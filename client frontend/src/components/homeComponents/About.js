import "../styles/About.css";
import Helmet from "../homeComponents/Helmet";
import heroImg from "../../data/img/hero-img2.png";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion/dist/framer-motion";

import { Link } from "react-scroll";

const About = () => {
  return (
    <Helmet>
      <section className="trending___products">
        <Container id="about">
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Tentang Kami</h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="hero__section1">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="hero__content">
                <h2>Tentang Hars Shoe Cleaner</h2>
                <p>
                  Hars Shoe Cleaner merupakan usaha yang bergerak dibidang jasa
                  laundry cuci sepatu berkualitas yang berasal dari Kota
                  Jakarta.Kami hadir di Indonesia terutama di kota Jakarta pada
                  2017. Kami sangat serius meningkatkan kualitas dan juga terus
                  membagikan tips dalam merawat sepatu.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-3}
                    duration={100}
                  >
                    Laundry Sekarang
                  </Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
