import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Instructions from "../../components/Instructions/Instructions";
import PlansSection from "../../components/PlansSection/PlansSection";
import ConnectForm from "../../components/ConnectForm/ConnectForm";
import RecentPurchases from "../../components/RecentPurchases/RecentPurchases";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Instructions />
        <PlansSection />
        <ConnectForm />
        <RecentPurchases />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
