import React from "react";
import Navbar from "../../components/Navbar";
import Content from "../../components/Lesson/Lesson6/Content";
import HeaderImage from "../../components/HeaderImage";
import Hero from "../../components/Lesson/Lesson6/Hero";
import images from "../../constants/image";
import Footer from "../../components/Footer";

function Lesson6() {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <Navbar />
      <div className="relative w-full">
        <HeaderImage image={images.cover1} />
        <Hero />
      </div>
      <Content />
      <Footer />
    </div>
  );
}

export default Lesson6;
