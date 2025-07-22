import React from "react";
import styles from "./VoucherSection.module.css";

const VoucherSection: React.FC = () => {
  return (
    <div className={styles.voucherBox}>
      <h4>Redeem Access</h4>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter Voucher Code"
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter Transaction Code"
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Username (if any)"
      />
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
      />
      <button className="btn btn-success">Connect</button>
    </div>
  );
};

export default VoucherSection;
