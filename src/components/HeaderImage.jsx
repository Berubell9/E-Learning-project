import React from 'react'

function HeaderImage({ image }) {
  return (
    <div className="relative w-full h-[25vh] mt-16 overflow-hidden">
      {/* รูปพื้นหลัง */}
      <img
        src={image}
        className="w-full h-full object-cover"
        alt="background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
  )
}

export default HeaderImage
