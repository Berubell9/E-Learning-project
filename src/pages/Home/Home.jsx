import React from "react";
import Navbar from "../../components/Navbar";
import images from "../../constants/image";
import BackgroundImage from "../../components/BackgroundImage";
import Hero from "../../components/Home/Hero";
import Footer from "../../components/Footer";
import LessonCategory from "../../components/Home/LessonCategory";
import TestCategory from "../../components/Home/TestCategory";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
        <Navbar />
        <div className="relative w-full">
            <BackgroundImage image={images.home_cover} />
            <Hero />
        </div>
        <LessonCategory/>
        <TestCategory/>
        <Footer />
    </div>
  );
}

export default Home;
