import React from "react";
import "../styles/faq.css";
import Slider from "react-slick";
import ava01 from "../../assets/images/video.png";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Pertanyaan</h6>
          <h2>FAQ</h2>
          <div className="slider__wrapper">
            <Slider {...settings}>
              <div className="slider__item">
                <p className="description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Omnis inventore sunt repellendus iure voluptatem quia enim
                  voluptatum. Eum libero voluptatibus veritatis, neque quidem
                  cupiditate minus dignissimos officiis numquam! Voluptas,
                  accusantium.
                </p>

                <div className="customer__details">
                  <div className="customer__img">
                    <img src={ava01} alt="" />
                  </div>
                  <div>
                    <h5 className="customer__name">John Doe</h5>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
