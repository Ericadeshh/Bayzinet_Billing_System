import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSignal,
  FaTicketAlt,
  FaMoneyBill,
  FaShoppingCart,
  FaHistory,
  FaHeadset,
  FaBars,
  FaHome,
  FaChartBar,
  FaSignOutAlt,
  FaArrowRight,
} from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  ProgressBar,
  Table,
  Accordion,
  Modal,
  Form,
} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./UserDashboard.module.css";

const Dashboard: React.FC = () => {
  const [showPlanModal, setShowPlanModal] = useState<boolean>(false);

  return (
    <Container fluid className={styles.dashboardContainer}>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9} className={styles.mainContent}>
          <Navbar expand="md" className={`${styles.mobileNav} d-md-none`}>
            <Navbar.Toggle
              aria-controls="mobile-nav"
              className={styles.navToggle}
            >
              <FaBars />
            </Navbar.Toggle>
            <Navbar.Collapse id="mobile-nav">
              <Nav className={styles.mobileNavLinks}>
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
                <Nav.Link as={Link} to="/" className={styles.navLink}>
                  <FaSignOutAlt className={styles.navIcon} /> Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Row>
            <Col md={4} className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>
                    <FaSignal className={styles.cardIcon} /> Data Balance
                  </h4>
                  <ProgressBar
                    now={70}
                    label="3.5GB left"
                    className={styles.progressBar}
                  />
                </div>
              </div>
            </Col>
            <Col md={4} className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>
                    <FaTicketAlt className={styles.cardIcon} /> Active Plan
                  </h4>
                  <p className={styles.cardText}>Daily Voucher - 1GB</p>
                  <button
                    className={styles.button}
                    onClick={() => setShowPlanModal(true)}
                  >
                    Extend Plan
                  </button>
                </div>
              </div>
            </Col>
            <Col md={4} className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>
                    <FaMoneyBill className={styles.cardIcon} /> Quick Actions
                  </h4>
                  <div className={styles.buttonGroup}>
                    <button
                      className={styles.button}
                      onClick={() => setShowPlanModal(true)}
                    >
                      <FaShoppingCart className={styles.buttonIcon} /> Buy Plan
                    </button>
                    <button className={styles.button}>
                      <FaMoneyBill className={styles.buttonIcon} /> Top Up
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={styles.card}>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>
                    <FaHistory className={styles.cardIcon} /> Usage History
                  </h4>
                  <Table responsive className={styles.table}>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Data Used</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2025-07-22</td>
                        <td>500MB</td>
                        <td>2h</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={styles.supportSection}>
            <Col>
              <div className={styles.card}>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>
                    <FaHeadset className={styles.cardIcon} /> Support
                  </h4>
                  <Accordion className={styles.accordion}>
                    <Accordion.Item
                      eventKey="0"
                      className={styles.accordionItem}
                    >
                      <Accordion.Header className={styles.accordionHeader}>
                        How do I buy a plan?
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordionBody}>
                        Click "Buy Plan" and select a voucher or payment option.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Link to="/support" className={styles.supportLink}>
                    <FaHeadset className={styles.supportIcon} /> Contact Us
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        show={showPlanModal}
        onHide={() => setShowPlanModal(false)}
        dialogClassName={styles.modal}
      >
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title className={styles.modalTitle}>
            <FaMoneyBill className={styles.modalIcon} /> Buy Plan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <Form className={styles.form}>
            <Form.Group className={styles.formGroup}>
              <label className={styles.formLabel}>Voucher Code</label>
              <Form.Control
                type="text"
                placeholder="Enter Voucher Code"
                className={styles.input}
              />
            </Form.Group>
            <Form.Group className={styles.formGroup}>
              <label className={styles.formLabel}>Select Plan</label>
              <Form.Select className={styles.select}>
                <option>Daily 1GB - KES 50</option>
                <option>Weekly 5GB - KES 200</option>
              </Form.Select>
            </Form.Group>
            <button type="submit" className={styles.button}>
              <FaArrowRight className={styles.buttonIcon} /> Purchase
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Dashboard;
