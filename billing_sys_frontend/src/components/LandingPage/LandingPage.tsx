import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaWifi,
  FaUser,
  FaUserPlus,
  FaTicketAlt,
  FaSpinner,
  FaArrowRight,
  FaHeadset,
} from "react-icons/fa";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import styles from "./LandingPage.module.css";

const LandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("voucher");
  const [voucherCode, setVoucherCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleVoucherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call for voucher validation
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <Container
      className={`${styles.landingContainer} min-vh-100 d-flex align-items-center justify-content-center`}
    >
      <Row>
        <Col xs={12} sm={10} md={8} lg={6}>
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <FaWifi className={styles.logo} />
              <h3 className={styles.title}>BAYZINET Hotspot</h3>
              <p className={styles.subtitle}>Fast Wi-Fi for All</p>
              <Tab.Container
                activeKey={activeTab}
                onSelect={(k) => k && setActiveTab(k)}
              >
                <Nav className={styles.navTabs}>
                  <Nav.Item>
                    <Nav.Link eventKey="voucher" className={styles.navLink}>
                      <FaTicketAlt className={styles.navIcon} /> Voucher
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="login" className={styles.navLink}>
                      <FaUser className={styles.navIcon} /> Login
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="signup" className={styles.navLink}>
                      <FaUserPlus className={styles.navIcon} /> Signup
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="voucher">
                    <Form
                      onSubmit={handleVoucherSubmit}
                      className={styles.form}
                    >
                      <Form.Group className={styles.formGroup}>
                        <Form.Control
                          type="text"
                          placeholder="Enter Voucher Code"
                          value={voucherCode}
                          onChange={(e) => setVoucherCode(e.target.value)}
                          className={styles.input}
                        />
                      </Form.Group>
                      <button
                        type="submit"
                        className={styles.button}
                        disabled={loading}
                      >
                        {loading ? (
                          <FaSpinner className={styles.spinner} />
                        ) : (
                          <>
                            <FaArrowRight className={styles.buttonIcon} />{" "}
                            Connect Now
                          </>
                        )}
                      </button>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="login">
                    <Form className={styles.form}>
                      <Form.Group className={styles.formGroup}>
                        <Form.Control
                          type="email"
                          placeholder="Email or Phone"
                          className={styles.input}
                        />
                      </Form.Group>
                      <Form.Group className={styles.formGroup}>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className={styles.input}
                        />
                      </Form.Group>
                      <button type="submit" className={styles.button}>
                        <FaArrowRight className={styles.buttonIcon} /> Log In
                      </button>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="signup">
                    <Form className={styles.form}>
                      <Form.Group className={styles.formGroup}>
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          className={styles.input}
                        />
                      </Form.Group>
                      <Form.Group className={styles.formGroup}>
                        <Form.Control
                          type="email"
                          placeholder="Email or Phone"
                          className={styles.input}
                        />
                      </Form.Group>
                      <Form.Group className={styles.formGroup}>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className={styles.input}
                        />
                      </Form.Group>
                      <button type="submit" className={styles.button}>
                        <FaArrowRight className={styles.buttonIcon} /> Sign Up
                      </button>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
              <div className={styles.footer}>
                <Link to="/support" className={styles.footerLink}>
                  <FaHeadset className={styles.footerIcon} /> Contact Support
                </Link>
                <span className={styles.footerSeparator}> | </span>
                <Link to="/terms" className={styles.footerLink}>
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
