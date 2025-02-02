import React from "react";
import "./App.css";
import images from "../src/constants/image";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {/* รูปพื้นหลังเต็มจอ */}
      <img
        src={images.home_cover2}
        className="absolute inset-0 w-full h-full object-cover"
        alt="background"
      />

      {/* Overlay (พื้นหลังสีดำโปร่งแสง) */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* ข้อความและปุ่มอยู่ตรงกลาง */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          สื่อการเรียนการสอนคอมพิวเตอร์ <br /> และการบำรุงรักษา
        </h1>
        <p className="text-md sm:text-lg lg:text-2xl mt-2 mb-6 text-gray-200 drop-shadow-lg">
          E – Learning for Teaching of Computer and Maintenance
        </p>
        {/* ปุ่มเข้าสู่เว็บไซต์ */}
        <Link to="/home">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg text-lg sm:text-xl transition">
            เข้าสู่เว็บไซต์
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
