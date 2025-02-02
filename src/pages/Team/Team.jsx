import React from 'react'
import Navbar from "../../components/Navbar";
import HeaderImage from '../../components/HeaderImage';
import images from "../../constants/image";
import Hero from '../../components/Team/Hero';
import Content from '../../components/Team/Content';
import Footer from '../../components/Footer';
import Detail from '../../components/Team/Detail';

function Team() {
  return (
    <div className="bg-gray-100 h-full w-full">
      <Navbar />
      <div className="relative w-full">
            <HeaderImage image={images.home_cover1} />
            <Hero />
        </div>
        <Content/>
        <Detail/>
        <Footer/>
    </div>
  )
}

export default Team
