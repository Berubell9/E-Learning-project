import React from "react";

function BackgroundImage({ image }) {
  return (
    <div className="relative w-full h-[40vh] mt-16">
      {/* รูปพื้นหลัง */}
      <img
        src={image}
        className="w-full h-full object-cover"
        alt="background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
  );
}

export default BackgroundImage;
