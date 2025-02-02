import React from "react";

function Hero() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 z-10">
      <h1 className="text-xl md:text-3xl drop-shadow-lg">ยินดีต้อนรับเข้าสู่</h1>
      <p className="text-4xl font-bold mt-2 md:text-6xl drop-shadow-lg">
        สื่อการเรียนการสอนคอมพิวเตอร์ เเละการบำรุงรักษา
      </p>
      <p className="text-md lg:text-2xl mt-2 sm:text-xl drop-shadow-lg">
        E – Learning for Teaching of Computer and Maintenance
      </p>
    </div>
  );
}

export default Hero;
