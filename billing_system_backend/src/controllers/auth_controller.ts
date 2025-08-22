import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  res.status(501).json({ success: false, message: "Login not implemented" });
};

export const validateVoucher = async (req: Request, res: Response) => {
  res
    .status(501)
    .json({ success: false, message: "Voucher validation not implemented" });
};
