import { Link } from "react-router-dom";
import {
  FaWifi,
  FaHome,
  FaMoneyBill,
  FaChartBar,
  FaHeadset,
  FaSignOutAlt,
  FaUsers,
  FaTicketAlt,
  FaChartLine,
} from "react-icons/fa";
import { Nav } from "react-bootstrap";
import styles from "./Sidebar.module.css";
import type { SidebarProps } from "../../types/types";

const Sidebar: React.FC<SidebarProps> = ({ isAdmin = false }) => {
  return (
    <div className={`${styles.sidebar} d-none d-md-block`}>
      <h4 className={styles.title}>
        <FaWifi className={styles.logo} /> BAYZINET {isAdmin ? "Admin" : ""}
      </h4>
      <Nav className={styles.nav}>
        {isAdmin ? (
          <>
            <Nav.Link as={Link} to="/admin/users" className={styles.navLink}>
              <FaUsers className={styles.navIcon} /> Users
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/plans" className={styles.navLink}>
              <FaMoneyBill className={styles.navIcon} /> Plans
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/vouchers" className={styles.navLink}>
              <FaTicketAlt className={styles.navIcon} /> Vouchers
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/reports" className={styles.navLink}>
              <FaChartLine className={styles.navIcon} /> Reports
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link as={Link} to="/dashboard" className={styles.navLink}>
              <FaHome className={styles.navIcon} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/plans" className={styles.navLink}>
              <FaMoneyBill className={styles.navIcon} /> Buy Plan
            </Nav.Link>
            <Nav.Link as={Link} to="/usage" className={styles.navLink}>
              <FaChartBar className={styles.navIcon} /> Usage History
            </Nav.Link>
            <Nav.Link as={Link} to="/support" className={styles.navLink}>
              <FaHeadset className={styles.navIcon} /> Support
            </Nav.Link>
          </>
        )}
        <Nav.Link as={Link} to="/" className={styles.navLink}>
          <FaSignOutAlt className={styles.navIcon} /> Logout
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
