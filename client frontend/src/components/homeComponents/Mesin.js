import React from "react";
import "../styles/mesin.css";
import team01 from "../../assets/images/team-01.png";
import team02 from "../../assets/images/team-02.png";
import team03 from "../../assets/images/team-03.png";
import team04 from "../../assets/images/team-04.png";
const teamMembers = [
  {
    imgUrl: team01,
    name: "Sakurai OLIVER 66EZ",
    detail: "detail",
  },
  {
    imgUrl: team02,
    name: "Sakurai OLIVER 72",
    detail: "detail",
  },
  {
    imgUrl: team03,
    name: "Sakurai OLIVER 272 E II",
    detail: "detail",
  },
  {
    imgUrl: team04,
    name: "Ryobi 520",
    detail: "detail",
  },
];

const Mesin = () => {
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h2>
            <b>Mesin Offset yang sering kami servis</b>
          </h2>
          <h6 className="subtitle">Sakurai Oliver, Hamada, Komori, Ryobi</h6>
        </div>

        <div className="team__wrapper">
          {teamMembers.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>

                <div className="team__member-social">
                  <span>
                    <h6>Cek Detail</h6>
                  </span>
                  <span>
                    <i class="ri-settings-2-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mesin;
