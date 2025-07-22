import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";
import LandingPage from "../src/components/LandingPage/LandingPage";
import Dashboard from "../src/components/UserDashboard/UserDashboard";
import AdminPanel from "../src/components/AdminPanel/AdminPanel";
import Support from "../src/components/Support/Support";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
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

export default App;
