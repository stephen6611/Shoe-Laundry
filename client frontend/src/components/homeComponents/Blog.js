import React from "react";
import "../styles/blog.css";

import videoImg from "../../assets/images/video1.png";

const blogData = [
  {
    imgUrl: videoImg,
    title: "Galeri",
    desc: "",
    linkUrl: "#",
  },
  {
    imgUrl: videoImg,
    title: "Galeri",
    desc: "",
    linkUrl: "#",
  },
  {
    imgUrl: videoImg,
    title: "Galeri",
    desc: "",
    linkUrl: "#",
  },
];

const Blog = () => {
  return (
    <section>
      <div className="container">
        <div className="blog__top-content">
          <h2>
            <b>Galeri</b>
          </h2>
          <h6 className="subtitle">
            Keunggulan Layanan CV Grafika Teknik Mandiri
          </h6>
          <h2 className="highlight"></h2>
        </div>

        <div className="blog__wrapper">
          {blogData.map((item, index) => (
            <div className="blog__item">
              <h3>{item.title}</h3>
              <div className="blog__img" key={index}>
                <img src={item.imgUrl} alt="" />
              </div>
              <p className="description blog__desc">{item.desc}</p>
              <div>
                <a href={item.linkUrl} classname="learn__more">
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
