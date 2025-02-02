import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-3">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center">
      {/* ข้อความลิขสิทธิ์ */}
      <div className="mt-0 text-sm">
        © {new Date().getFullYear()} Kornkanai & Kritsakorn. All rights reserved.
      </div>

    </div>
  </footer>
  )
}

export default Footer
