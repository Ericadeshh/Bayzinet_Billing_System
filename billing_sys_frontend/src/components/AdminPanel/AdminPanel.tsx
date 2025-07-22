import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./AdminPanel.module.css";

const AdminPanel: React.FC = () => {
  return (
    <Container fluid className={styles.adminContainer}>
      <Row>
        <Col md={3}>
          <Sidebar isAdmin={true} />
        </Col>
        <Col md={9} className={styles.mainContent}>
          <h3 className={styles.title}>Admin Panel</h3>
          <p className={styles.text}>
            Manage users, plans, vouchers, and reports here.
          </p>
          {/* Add tables, graphs, and controls later */}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
