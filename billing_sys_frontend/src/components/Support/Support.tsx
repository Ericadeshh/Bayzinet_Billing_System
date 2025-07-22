import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { FaHeadset } from "react-icons/fa";
import styles from "./Support.module.css";

const Support: React.FC = () => {
  return (
    <Container className={styles.supportContainer}>
      <Row>
        <Col>
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <h3 className={styles.title}>
                <FaHeadset className={styles.titleIcon} /> Support
              </h3>
              <Accordion className={styles.accordion}>
                <Accordion.Item eventKey="0" className={styles.accordionItem}>
                  <Accordion.Header className={styles.accordionHeader}>
                    How do I buy a plan?
                  </Accordion.Header>
                  <Accordion.Body className={styles.accordionBody}>
                    Click "Buy Plan" and select a voucher or payment option.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className={styles.accordionItem}>
                  <Accordion.Header className={styles.accordionHeader}>
                    How do I contact support?
                  </Accordion.Header>
                  <Accordion.Body className={styles.accordionBody}>
                    Use the form below or call our support line.
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
    </Container>
  );
};

export default Support;
