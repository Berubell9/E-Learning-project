import React from "react";
import Navbar from "../../components/Navbar";
import Content from "../../components/Lesson/Lesson4/Content";
import Hero from "../../components/Lesson/Lesson4/Hero";
import images from "../../constants/image";
import Footer from "../../components/Footer";
import HeaderImage from "../../components/HeaderImage";

function Lesson4() {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
        <Navbar />
        <div className="relative w-full">
          <HeaderImage image={images.cover3} />
          <Hero />
        </div>
        <Content />
      <Footer />
    </div>
  );
}

export default Lesson4;
