import React from "react";
import Navbar from "../../components/Navbar";
import Content from "../../components/Test/Before/Content";
import Footer from '../../components/Footer';

function Before() {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <Navbar />
      <Content/>
      <Footer/>
    </div>
  );
}

export default Before;
