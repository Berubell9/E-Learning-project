import React from "react";
import images from "../../../constants/image";

function Content() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      
      {/* หัวข้อ */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
        วิดีโอส่วนประกอบของคอมพิวเตอร์
      </h1>

      {/* Video YouTube Embed */}
      <div className="flex justify-center">
        <iframe
          className="w-full sm:w-[1020px] h-[300px] sm:h-[515px] rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/udsOCX4YNZY"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
      <a href="https://www.youtube.com/watch?v=udsOCX4YNZY" target="_blank">
        <p className="flex justify-center mt-3 text-gray-400 mb-8">
          อ้างอิง : https://www.youtube.com/watch?v=udsOCX4YNZY
        </p>
      </a>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
        
        {/* หัวข้อ*/}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          ส่วนประกอบของคอมพิวเตอร์
        </h1>

        {/* วนลูปรายการส่วนประกอบของคอมพิวเตอร์ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {computerComponents.map((component, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-102"
            >
              {/* รูปภาพ */}
              <img
                src={component.imageUrl}
                alt={component.title}
                className="w-full h-48 object-cover"
              />

              {/* เนื้อหา */}
              <div className="p-4">
                <h2 className="text-lg sm:text-xl font-semibold text-pink-500">
                  {component.title}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
                  {component.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a href="https://surl.li/lgxiap" target="_blank">
          <p className="flex justify-center mt-6 text-gray-400 ">
            อ้างอิง : https://surl.li/lgxiap
          </p>
        </a>
      </div>
    </div>
  );
}

// เนื้อหาส่วนประกอบของคอมพิวเตอร์
const computerComponents = [
  {
    title: "เคสคอมพิวเตอร์ (Computer Case)",
    description:
      "เป็นโครงสร้างที่ใช้ติดตั้งและป้องกันอุปกรณ์ภายในคอมพิวเตอร์ เช่น เมนบอร์ด, พาวเวอร์ซัพพลาย, และฮาร์ดแวร์อื่น ๆ",
    imageUrl:
    images.casecom,
  },
  {
    title: "เมนบอร์ด (Motherboard)",
    description:
      "เป็นศูนย์กลางที่เชื่อมต่ออุปกรณ์ทุกชิ้นในคอมพิวเตอร์ รวมถึง CPU, RAM, และการ์ดจอต่าง ๆ",
    imageUrl:
    images.mainboard,
  },
  {
    title: "หน่วยประมวลผลกลาง (CPU)",
    description:
      "สมองของคอมพิวเตอร์ที่ทำหน้าที่ประมวลผลข้อมูลและควบคุมการทำงานของอุปกรณ์ทั้งหมด",
    imageUrl: images.cpu,
  },
  {
    title: "หน่วยความจำหลัก (RAM)",
    description:
      "ใช้เก็บข้อมูลและโปรแกรมที่กำลังทำงานเพื่อให้ CPU ดึงมาใช้ได้รวดเร็ว",
    imageUrl:
    images.ram,
  },
  {
    title: "ฮาร์ดดิสก์ (HDD) / SSD",
    description:
      "ใช้สำหรับจัดเก็บข้อมูลถาวรของระบบปฏิบัติการ, โปรแกรม, และไฟล์ต่าง ๆ",
    imageUrl:
    images.hhd,
  },
  {
    title: "การ์ดจอ (GPU)",
    description:
      "ช่วยประมวลผลภาพและกราฟิก ทำให้แสดงผลได้ดีขึ้น โดยเฉพาะสำหรับงานกราฟิกและเกม",
    imageUrl:
    images.gpu,
  },
  {
    title: "พาวเวอร์ซัพพลาย (Power Supply Unit)",
    description: "ทำหน้าที่จ่ายไฟให้กับอุปกรณ์ต่าง ๆ ภายในคอมพิวเตอร์",
    imageUrl:
    images.power,
  },
  {
    title: "จอภาพ (Monitor)",
    description:
      "ใช้แสดงผลลัพธ์ที่เกิดจากการประมวลผลของคอมพิวเตอร์ เช่น ข้อความ รูปภาพ และวิดีโอ",
    imageUrl:
    images.monitor,
  },
  {
    title: "คีย์บอร์ด (Keyboard)",
    description:
      "อุปกรณ์ป้อนข้อมูลที่ใช้พิมพ์ตัวอักษร คำสั่ง และควบคุมการทำงานของคอมพิวเตอร์",
    imageUrl:
    images.keyboard,
  },
  {
    title: "เมาส์ (Mouse)",
    description:
      "อุปกรณ์ชี้ตำแหน่งที่ใช้ควบคุมตัวชี้บนหน้าจอและใช้เลือกคำสั่งต่าง ๆ",
    imageUrl:
    images.mouse,
  },
  {
    title: "ระบบระบายความร้อน (Cooling System)",
    description:
      "ช่วยควบคุมอุณหภูมิของอุปกรณ์ภายในคอมพิวเตอร์ เช่น พัดลมระบายความร้อน และระบบระบายความร้อนด้วยน้ำ",
    imageUrl:
    images.cooling,
  },
  {
    title: "เน็ตเวิร์คการ์ด (Network Card)",
    description:
      "เป็นตัวเชื่อมต่อระหว่างคอมพิวเตอร์ และเครือข่ายอินเตอร์เน็ต ปัจจุบันเมนบอร์ดส่วนใหญ่มักจะมีชีพที่เป็นช่องเน็ตเวิร์คการ์ดในตัวอยู่แล้ว ทำให้เน็ตเวิร์คการด์นั้นไม่ค่อยใช้กัน",
    imageUrl:
    images.network,
  },
];

export default Content;
