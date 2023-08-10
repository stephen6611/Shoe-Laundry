import React from "react";
import "../styles/services.css";

const serviceData = [
  {
    icon: "ri-user-star-fill",
    title: "Profesional",
    desc: "Tenaga ahli yang berpengalaman, pengerjaan baik pemasangan baru & service sudah dipercaya.",
  },
  {
    icon: "ri-customer-service-fill",
    title: "Pelayanan Terbaik",
    desc: "Kecepatan & Ketepatan ketika memperbaiki mesin offset, Kami sangat mengerti apa yang Anda Inginkan.",
  },
  {
    icon: "ri-shield-check-fill",
    title: "Bergaransi",
    desc: "Pelanggan mendapat garansi terhadap mesin Offset yang telah diservis dalam kurun waktu 1 bulan.",
  },
  {
    icon: "ri-star-smile-fill",
    title: "Hasil Memuaskan",
    desc: "Hasil perbaikan mesin offset dispastikan optimal dengan langsung mengecek hasil cetak oleh mesin yang diservis",
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services_top-content">
          <h2>
            <b>Mengapa Harus Kami?</b>
          </h2>
          <h6 className="subtitle">
            Keunggulan Layanan CV Grafika Teknik Mandiri
          </h6>
          <h2 className="highlight"></h2>
        </div>

        <div className="service__item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services__item" key={index}>
              <span className="service__icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
