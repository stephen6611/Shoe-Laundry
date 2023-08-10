import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "../components/styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h4 className="text-white">CV. Grafika Teknik Mandiri</h4>
              </div>
            </div>
            <p className="footer__text mt-4">
            Hasil perbaikan mesin offset dispastikan optimal dengan langsung mengecek hasil cetak oleh mesin yang diservis.
            </p>
          </Col>

          <Col lg="3" md="3" className="mb-3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Layanan Kami</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Perbaikan Mesin Offset</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Penjualan Suku Cadang</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Tautan</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/register">Register</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>Jl. Palapa IV No.12 B, RT.3/RW.1, Kedoya Sel., Kec. Kb. Jeruk, Kota Jakarta Barat.
</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-whatsapp-line"></i>
                  </span>
                  <p>0814-1002-2271</p>
                </ListGroupItem>

                {/* <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-instagram-line"></i>
                  </span>
                  <p>@nyikatpatu</p>
                </ListGroupItem> */}
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year}, by Kresna Anugrah | CV. Grafika Teknik Mandiri.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
