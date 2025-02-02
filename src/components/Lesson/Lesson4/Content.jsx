import React from "react";

function Content() {
  return (
    <div className="bg-gray-100 min-h-screen w-full py-10 px-4 sm:px-6 lg:px-8">
      
      {/* หัวข้อ */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
        วิดีโอหลักการทำงานของคอมพิวเตอร์
      </h1>
      
      {/* Video YouTube Embed */}
      <div className="flex justify-center ">
        <iframe
          className="w-full sm:w-[1020px] h-[300px] sm:h-[515px] rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/GRIIf4bCH4g"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
      <a href="https://www.youtube.com/watch?v=GRIIf4bCH4g" target="_blank">
        <p className="flex justify-center mt-3 text-gray-400 mb-8">
          อ้างอิง : https://www.youtube.com/watch?v=GRIIf4bCH4g
        </p>
      </a>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
        
        {/* หัวข้อ */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
          หลักการทำงานของคอมพิวเตอร์
        </h1>
        <p className="text-gray-700 flex justify-center mb-6">
          มีทั้งหมด 5 หน่วยด้วยกัน ได้แก่
        </p>
        
        {/* รูปภาพหลัก */}
        <div className="flex justify-center mb-8">
          <img
            src="https://nookpingangle.wordpress.com/wp-content/uploads/2012/08/e0b8a3e0b8b9e0b89be0b8a0e0b8b2e0b89e11.png"
            alt="โครงสร้างของคอมพิวเตอร์"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>

        {/* แสดงรายการโครงสร้างแต่ละส่วน */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {computerStructure.map((unit, index) => (
            <div key={index} className="bg-amber-50 p-5 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-102">
              <h2 className="text-lg sm:text-xl font-semibold text-amber-500">
                {unit.title}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
                {unit.description}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                <strong>ตัวอย่าง :</strong> {unit.example}
              </p>
            </div>
          ))}
        </div>
        <a href="https://surl.li/wupfpo" target="_blank">
          <p className="flex justify-center mt-6 text-gray-400 ">
            อ้างอิง : https://surl.li/wupfpo
          </p>
        </a>
      </div>
    </div>
  );
}
const computerStructure = [
  {
    title: "หน่วยรับข้อมูล (Input Unit)",
    description:
      "ทำหน้าที่รับข้อมูลมาจัดเก็บที่หน่วยความจำหลักของคอมพิวเตอร์ จากนั้นเมื่อมีคำสั่งให้ประมวลผล ข้อมูลที่ถูกจัดเก็บไว้ที่หน่วยความจำจะถูกส่งไปยังหน่วยประมวลผล",
    example: "คีย์บอร์ด, เมาส์, สแกนเนอร์, ไมโครโฟน",
  },
  {
    title: "หน่วยประมวลผลกลาง (Central Processing Unit)",
    description:
      "ทำหน้าที่ประมวลผลให้ได้ผลลัพธ์ตามที่ต้องการ จากนั้นผลลัพธ์จะถูกส่งไปจัดเก็บที่หน่วยความจำหลัก",
    example: "CPU Intel Core i9, AMD Ryzen 9",
  },
  {
    title: "หน่วยความจำหลัก (Main Memory)",
    description:
      "ทำหน้าที่จัดเก็บข้อมูลและโปรแกรมต่างๆ ในขณะที่เครื่องคอมพิวเตอร์เปิดอยู่เท่านั้น ถ้าปิดเครื่องคอมพิวเตอร์ข้อมูลหรือโปรแกรมนั้นจะสูญหายไป",
    example: "RAM DDR4, DDR5",
  },
  {
    title: "หน่วยแสดงผล (Output Unit)",
    description:
      "ทำหน้าที่นำผลลัพธ์ที่ได้จากการประมวลผลมาแสดงผลหรือจัดเก็บไว้ที่หน่วยความจำรอง",
    example: "หน้าจอ Monitor, เครื่องพิมพ์ (Printer)",
  },
  {
    title: "หน่วยความจำรอง (Secondary Storage)",
    description:
      "ทำหน้าที่จัดเก็บข้อมูลและโปรแกรมต่างๆเพื่อนำมาใช้อีกครั้งในภายหลังได้ แม้จะปิดเครื่องคอมพิวเตอร์ข้อมูลและโปรแกรมที่จัดเก็บไว้จะไม่สูญหาย",
    example: "ฮาร์ดดิสก์ (HDD), SSD, USB Flash Drive",
  },
];

export default Content;
