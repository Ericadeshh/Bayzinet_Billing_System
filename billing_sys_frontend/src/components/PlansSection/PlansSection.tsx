import React, { useState, useEffect } from "react";
import { TbMobiledata } from "react-icons/tb";
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

const PlansSection: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Hourly");
  const categories = ["Hourly", "Daily", "Weekly", "Monthly"];

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/plans");
        if (!response.ok)
          throw new Error(`Failed to fetch plans: ${response.status}`);
        const { data } = await response.json();
        setPlans(data);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          console.error("❌ Error fetching plans:", error.message);
        } else {
          console.error("❌ Error fetching plans:", error);
        }
        setError("Unable to load plans. Please try again later.");
      }
    };
    fetchPlans();
  }, []);

  return (
    <section className={styles.plansSection}>
      <h2>
        Data Plans <TbMobiledata />
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
        {error ? (
          <p className={styles.error}>{error}</p>
        ) : plans.length > 0 ? (
          plans
            .filter((plan) => plan.category === activeTab)
            .map((plan) => (
              <PlanCard
                key={plan.id}
                id={plan.id} // Added id prop
                name={plan.name}
                price={plan.price}
                duration={plan.duration}
                devices={plan.devices}
              />
            ))
        ) : (
          <p>Loading plans...</p>
        )}
      </div>
    </section>
  );
};

export default PlansSection;
