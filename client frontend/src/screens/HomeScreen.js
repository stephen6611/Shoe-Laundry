import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import About from "../components/homeComponents/About";
import CalltoActionSection from "../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import HeroSection from "../components/homeComponents/HeroSection";
import Services from "../components/homeComponents/Services";
import Blog from "../components/homeComponents/Blog";
import Mesin from "../components/homeComponents/Mesin";
import Testimonial from "../components/homeComponents/Testimonial";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <Mesin />

      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      {/* <CalltoActionSection /> */}
      <About />
      <Blog />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomeScreen;
