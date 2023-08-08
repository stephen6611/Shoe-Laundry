import React from "react";

import Helmet from "./Helmet";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../../assets/images/heroimg.png";
import "../styles/hero-section.css";

import { Link } from "react-scroll";

import "../styles/home-hero.css";

const HeroSection = () => {
  return (
    <Helmet title="Home">
      <section className="heroes__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="heroes__content  ">
                <h5 className="mb-3">Jasa Servis Mesin Offset</h5>
                <h1 className="mb-4 heroes__title">
                  <span>Grafika Teknik Mandiri</span>
                </h1>

                <h5>
                CV. Grafika Teknik Mandiri merupakan perusahaan yang bergerak di bidang jasa service mesin cetak offset terbaik di Jakarta. CV. Grafika Teknik Mandiri Melayani Jasa Perbaikan Mesin cetak offset untuk Perkantoran, dan lain-lain.
                </h5>

                <div className="heroes__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link to="services">Jelajahi Lebih Lanjut </Link>
                    <i class="ri-arrow-right-s-line"></i>
                  </button>

                  {/* <button className="all__foods-btn">
                    <Link to="about" classname="about__btn">
                      <a href="btn_2">Tentang Kami</a>
                    </Link>
                  </button> */}
                </div>

                <div className=" heroes__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-time-line"></i>
                    </span>
                    Buka 08:00-21:00
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-map-pin-line"></i>
                    </span>{" "}
                    Kedoya Selatan, Jakarta Barat
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="heroes__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default HeroSection;
