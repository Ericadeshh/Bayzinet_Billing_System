import React from "react";
import styles from "./Home.module.css";

import QuickAccess from "../../components/QuickAccess/QuickAccess";
import PlanCard from "../../components/PlanCard/PlanCard";
import VoucherSection from "../../components/VoucherSection/VoucherSection";
import RecentPurchases from "../../components/RecentPurchases/RecentPurchases";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <QuickAccess />

      <div className={styles.planSection}>
        <h2>Plans</h2>
        <div className={styles.planGrid}>
          <PlanCard
            title="3 HOURS UNLIMITED"
            price="KES 10"
            device="1 Device"
          />
          <PlanCard
            title="6 HOURS UNLIMITED"
            price="KES 20"
            device="1 Device"
          />
          <PlanCard
            title="12 HOURS UNLIMITED"
            price="KES 30"
            device="1 Device"
          />
          <PlanCard
            title="Game Streaming 3H"
            price="KES 30"
            device="1 Device"
          />
          <PlanCard title="6H VIP FAST" price="KES 40" device="1 Device" />
          <PlanCard title="12H VIP FAST" price="KES 60" device="1 Device" />
        </div>
      </div>

      <VoucherSection />
      <RecentPurchases />
    </div>
  );
};

export default Home;
