import React from "react";
import images from "../../../constants/image";

function Content() {
  return (
    <div className="bg-gray-100 min-h-screen w-full py-10 px-4 sm:px-6 lg:px-8">
      
      {/* หัวข้อ */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
        วิดีโอประเภทของคอมพิวเตอร์
      </h1>

      {/* Video YouTube Embed */}
      <div className="flex justify-center ">
        <iframe
          className="w-full sm:w-[1020px] h-[300px] sm:h-[515px] rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/T5nIKDQvlSs"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
      <a href="https://youtu.be/T5nIKDQvlSs" target="_blank">
        <p className="flex justify-center mt-3 text-gray-400 mb-8">
          อ้างอิง : https://youtu.be/T5nIKDQvlSs
        </p>
      </a>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
        
        {/* หัวข้อ */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
          ประเภทของคอมพิวเตอร์
        </h1>
        <p className="text-gray-700 flex justify-center mb-6">
          มีหลักๆ ทั้งหมด 6 ประเภทด้วยกัน ได้แก่
        </p>

        {/* วนลูปรายการประเภทคอมพิวเตอร์ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {computerTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-102"
            >
              {/* รูปภาพ */}
              <img
                src={type.image}
                alt={type.title}
                className="w-full h-48 object-cover"
              />

              {/* เนื้อหา */}
              <div className="p-4">
                <h2 className="text-lg sm:text-xl font-semibold text-green-600">
                  {type.title}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a href="https://surl.li/lajsxl" target="_blank">
            <p className="flex justify-center mt-6 text-gray-400 ">
              อ้างอิง : https://surl.li/lajsxl
            </p>
          </a>
      </div>
    </div>
  );
}

// เนื้อหาประเภทของคอมพิวเตอร์
const computerTypes = [
  {
    title: "ซูเปอร์คอมพิวเตอร์ (Supercomputer)",
    description:
      "คอมพิวเตอร์ที่มีสมรรถนะสูงสุด ใช้สำหรับงานที่ต้องการการประมวลผลอย่างรวดเร็วและซับซ้อน เช่น การพยากรณ์อากาศ การวิจัยทางวิทยาศาสตร์ และการจำลองทางฟิสิกส์",
    image: images.comtype1,
  },
  {
    title: "เมนเฟรมคอมพิวเตอร์ (Mainframe Computer)",
    description:
      "คอมพิวเตอร์ขนาดใหญ่ที่สามารถรองรับผู้ใช้หลายร้อยคนพร้อมกัน มักใช้ในองค์กรขนาดใหญ่ เช่น ธนาคาร และบริษัทประกันภัย",
    image: images.comtype2,
  },
  {
    title: "มินิคอมพิวเตอร์ (Minicomputer)",
    description:
      "คอมพิวเตอร์ที่มีขนาดและประสิทธิภาพรองลงมาจากเมนเฟรม รองรับผู้ใช้หลายคนพร้อมกัน เหมาะสำหรับองค์กรขนาดกลาง",
    image: images.comtype3
  },
  {
    title: "ไมโครคอมพิวเตอร์ (Microcomputer)",
    description:
      "คอมพิวเตอร์ส่วนบุคคลที่เราคุ้นเคย เช่น เดสก์ท็อป โน้ตบุ๊ก และแท็บเล็ต",
    image: images.comtype4,
  },
  {
    title: "คอมพิวเตอร์แบบฝังตัว (Embedded Computer)",
    description:
      "คอมพิวเตอร์ที่ฝังอยู่ในอุปกรณ์อื่น ๆ เพื่อควบคุมการทำงาน เช่น ในเครื่องใช้ไฟฟ้า รถยนต์ และอุปกรณ์อิเล็กทรอนิกส์ต่าง ๆ",
    image: images.comtype5,
  },
  {
    title: "เซิร์ฟเวอร์คอมพิวเตอร์ (Server Computer)",
    description:
      "คอมพิวเตอร์ที่ออกแบบมาเพื่อให้บริการและจัดเก็บข้อมูลในเครือข่าย สามารถรองรับผู้ใช้จำนวนมากได้พร้อมกัน ใช้ในองค์กรขนาดเล็กไปจนถึงศูนย์ข้อมูลขนาดใหญ่",
    image: images.comtype6,
  },
];

export default Content;
