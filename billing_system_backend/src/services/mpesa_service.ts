import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

interface StkPushResponse {
  MerchantRequestID: string;
  CheckoutRequestID: string;
  ResponseCode: string;
  ResponseDescription: string;
  CustomerMessage: string;
}

export const initiateMpesaPayment = async (
  phone: string,
  amount: number,
  planName: string
): Promise<StkPushResponse> => {
  try {
    const {
      MPESA_CONSUMER_KEY,
      MPESA_CONSUMER_SECRET,
      MPESA_SHORTCODE,
      MPESA_PASSKEY,
      MPESA_CALLBACK_URL,
    } = process.env;
    if (
      !MPESA_CONSUMER_KEY ||
      !MPESA_CONSUMER_SECRET ||
      !MPESA_SHORTCODE ||
      !MPESA_PASSKEY ||
      !MPESA_CALLBACK_URL
    ) {
      throw new Error("M-Pesa credentials missing");
    }

    // Generate OAuth token
    const auth = Buffer.from(
      `${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`
    ).toString("base64");
    const tokenResponse = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: { Authorization: `Basic ${auth}` },
      }
    );
    const accessToken = tokenResponse.data.access_token;
    console.log("🔍 OAuth token generated:", accessToken);

    // Generate timestamp (YYYYMMDDHHMMSS)
    const now = new Date();
    const timestamp =
      now.getFullYear().toString() +
      String(now.getMonth() + 1).padStart(2, "0") +
      String(now.getDate()).padStart(2, "0") +
      String(now.getHours()).padStart(2, "0") +
      String(now.getMinutes()).padStart(2, "0") +
      String(now.getSeconds()).padStart(2, "0");
    const password = Buffer.from(
      `${MPESA_SHORTCODE}${MPESA_PASSKEY}${timestamp}`
    ).toString("base64");
    console.log("🔍 Timestamp:", timestamp, "Password:", password);

    // STK Push request
    const stkPushData = {
      BusinessShortCode: MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: Math.floor(amount),
      PartyA: phone,
      PartyB: MPESA_SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: MPESA_CALLBACK_URL,
      AccountReference: planName.slice(0, 12),
      TransactionDesc: `Payment for ${planName}`,
    };
    console.log("🔍 STK Push data:", stkPushData);

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      stkPushData,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    console.log("✅ M-Pesa STK Push initiated:", response.data);
    return response.data;
  } catch (error) {
    let errorMessage = "Unknown error";
    if (axios.isAxiosError(error) && error.response?.data?.errorMessage) {
      errorMessage = error.response.data.errorMessage;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error("❌ M-Pesa STK Push failed:", errorMessage);
    throw new Error(errorMessage);
  }
};
