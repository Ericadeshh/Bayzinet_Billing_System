import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";
import LandingPage from "../../components/LandingPage/LandingPage";
import Dashboard from "../../components/UserDashboard/UserDashboard";
import AdminPanel from "../../components/AdminPanel/AdminPanel";
import Support from "../../components/Support/Support";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Suspense
          fallback={
            <div className={styles.spinnerWrapper}>
              <FaSpinner className={styles.spinner} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin/*" element={<AdminPanel />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default Home;
