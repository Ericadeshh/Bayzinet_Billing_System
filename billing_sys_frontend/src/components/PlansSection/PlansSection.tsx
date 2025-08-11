import React, { useState } from "react";
import { MdOutlineMobiledataOff } from "react-icons/md";
import styles from "./PlansSection.module.css";
import PlanCard from "../PlanCard/PlanCard";

interface Plan {
  id: number;
  name: string;
  price: number;
  duration: string;
  devices: string;
  category: string;
}

const plans: Plan[] = [
  {
    id: 1,
    name: "3 HOURS UNLIMITED",
    price: 10,
    duration: "3 Hours",
    devices: "1 Device",
    category: "Hourly",
  },
  {
    id: 2,
    name: "6 HOURS UNLIMITED",
    price: 20,
    duration: "6 Hours",
    devices: "1 Device",
    category: "Hourly",
  },
  {
    id: 3,
    name: "12 HOURS UNLIMITED",
    price: 30,
    duration: "12 Hours",
    devices: "1 Device",
    category: "Hourly",
  },
  {
    id: 4,
    name: "Game Streaming 3 Hours",
    price: 30,
    duration: "3 Hours",
    devices: "1 Device",
    category: "Hourly",
  },
  {
    id: 5,
    name: "6 HOURS VIP FAST SPEED",
    price: 40,
    duration: "6 Hours",
    devices: "1 Device",
    category: "Hourly",
  },
  {
    id: 6,
    name: "12 HOURS VIP FAST SPEED",
    price: 60,
    duration: "12 Hours",
    devices: "1 Device",
    category: "Hourly",
  },
  {
    id: 7,
    name: "DAILY UNLIMITED",
    price: 50,
    duration: "24 Hours",
    devices: "1 Device",
    category: "Daily",
  },
  {
    id: 8,
    name: "WEEKLY UNLIMITED",
    price: 200,
    duration: "7 Days",
    devices: "1 Device",
    category: "Weekly",
  },
  {
    id: 9,
    name: "MONTHLY UNLIMITED",
    price: 750,
    duration: "30 Days",
    devices: "1 Device",
    category: "Monthly",
  },
];

const PlansSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Hourly");

  const categories = ["Hourly", "Daily", "Weekly", "Monthly"];

  return (
    <section className={styles.plansSection}>
      <h2>
        Data Plans <MdOutlineMobiledataOff />
      </h2>
      <div className={styles.tabs}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.tab} ${
              activeTab === category ? styles.active : ""
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.plansGrid}>
        {plans
          .filter((plan) => plan.category === activeTab)
          .map((plan) => (
            <PlanCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              duration={plan.duration}
              devices={plan.devices}
            />
          ))}
      </div>
    </section>
  );
};

export default PlansSection;
