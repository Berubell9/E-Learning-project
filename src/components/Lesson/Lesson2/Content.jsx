import React from "react";
import images from "../../../constants/image";

function Content() {
  return (
    <div className="bg-gray-100 min-h-screen w-full py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
        วิดีโอวิวัฒนาการของคอมพิวเตอร์
      </h1>
      {/* Video YouTube Embed */}
      <div className="flex justify-center ">
        <iframe
          className="w-full sm:w-[1020px] h-[300px] sm:h-[515px] rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/PkRSVzdmDy8"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
      <a href="https://www.youtube.com/watch?v=PkRSVzdmDy8" target="_blank">
        <p className="flex justify-center mt-3 text-gray-400 mb-8">
          อ้างอิง : https://www.youtube.com/watch?v=PkRSVzdmDy8
        </p>
      </a>
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
        {/* หัวข้อหลัก */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
          วิวัฒนาการของคอมพิวเตอร์
        </h1>
        <p className="text-gray-700 flex justify-center mb-6">
          มีทั้งหมด 5 ยุคด้วยกัน ได้แก่
        </p>

        {/* วนลูปแสดงยุคต่างๆ */}
        {computerGenerations.map((gen, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-6 mb-10"
          >
            {/* รูปภาพ */}
            <div className="w-full lg:w-1/3 flex justify-center overflow-hidden transition-transform transform hover:scale-102">
              <img
                src={gen.image}
                alt={gen.title}
                className="w-full max-w-xs rounded-lg shadow-md"
              />
            </div>

            {/* เนื้อหา */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-xl sm:text-2xl font-semibold text-cyan-500">
                {gen.title}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-1 font-medium">
                {gen.year}
              </p>
              <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
                {gen.description}
              </p>
            </div>
          </div>
        ))}
        <a href="https://surl.li/lrhogp" target="_blank">
          <p className="flex justify-center mt-6 text-gray-400 ">
            อ้างอิง : https://surl.li/lrhogp
          </p>
        </a>
        <a href="https://surl.li/itzpxb" target="_blank">
          <p className="flex justify-center mt-2 text-gray-400 ">
            https://surl.li/itzpxb
          </p>
        </a>
      </div>
    </div>
  );
}

// เนื้อหาวิวัฒนาการของคอมพิวเตอร์
const computerGenerations = [
  {
    title: "ยุคที่ 1 : หลอดสุญญากาศ (Vacuum Tubes)",
    year: "(ก่อนปี 1952)",
    description:
      "เป็นยุคที่มีการประดิษฐ์คอมพิวเตอร์ที่ไม่ใช่เครื่องคำนวณ เครื่องคอมพิวเตอร์ยุคนี้ใช้หลอดสุญญากาศในการควบคุมการทำงานของเครื่อง ซึ่งทำงานได้อย่างรวดเร็ว แต่มีขนาดใหญ่ที่มาก และราคาสูง อีกทั้งต้องใช้หลอดสุญญากาศจำนวนมากในการทำงาน ทำให้กินพลังงานสูง และต้องมีเครื่องปรับอากาศตลอดเวลา เครื่องที่มีชื่อเสียงที่สุดคือ UNIVAC ซึ่งเป็นคอมพิวเตอร์เครื่องแรกที่ถูกใช้เชิงพาณิชย์โดยบริษัท ENIAC",
    image: images.comgen1,
  },
  {
    title: "ยุคที่ 2 : ทรานซิสเตอร์ (Transistor)",
    year: "(1953 - 1957)",
    description:
      "ในยุคนี้มีการใช้ทรานซิสเตอร์แทนหลอดสุญญากาศ ทำให้ขนาดคอมพิวเตอร์เล็กลง ใช้พลังงานน้อยลง และประสิทธิภาพดีขึ้น คอมพิวเตอร์ที่มีชื่อเสียงในยุคนี้ คือ IBM 1620 นอกจากนี้ ยุคนี้ยังได้มีการคิดภาษาเพื่อใช้กับเครื่องคอมพิวเตอร์",
    image: images.comgen2,
  },
  {
    title: "ยุคที่ 3 : วงจรรวม (Integrated Circuits)",
    year: "(1958 - 1969)",
    description:
      "คอมพิวเตอร์ในยุคนี้เริ่มมีแผงวงจรคล้ายกับปัจจุบัน มีการรวมทรานซิสเตอร์ไว้ในวงจรเดียวกัน ทำให้เร็วขึ้น มีความแม่นยำสูงขึ้น และเริ่มรองรับภาษาโปรแกรม เช่น C และ C++ IBM 360 เป็นหนึ่งในคอมพิวเตอร์ที่โดดเด่นของยุคนี้",
    image: images.comgen3,
  },
  {
    title: "ยุคที่ 4 : ไมโครโพรเซสเซอร์ (Microprocessors)",
    year: "(1970 - 2004)",
    description:
      "เป็นยุคที่มีการนำสารกึ่งตัวนำมาสร้างเป็นวงจรรวมความจุสูงมาก (Very Large Scale Integrated : VLSI) ซึ่งสามารถย่อส่วน IC ธรรมดาหลายๆ วงจรเข้ามารวมในวงจรเดียวกัน และยังมีการประดิษฐ์ไมโครโพรเซสเซอร์ (Microprocessor) ขึ้น ทำให้เครื่องขนาดเล็กลง ราคาถูกขึ้น และมีความสามารถในการทำงานรวดเร็ว และสูงมาก เป็นยุคที่คอมพิวเตอร์เริ่มถูกผลิตให้ใช้งานทั่วไป และเป็นครั้งแรกที่ Apple เปิดตัว Macintosh ในปี 1984",
    image: images.comgen4,
  },
  {
    title:
      "ยุคที่ 5 : คอมพิวเตอร์ และปัญญาประดิษฐ์ (Artificial Intelligence: AI)",
    year: "(2005 - ปัจจุบัน)",
    description:
      "ในยุคนี้ได้มุ่งเน้นการพัฒนาความสามารถในการทำงานของระบบคอมพิวเตอร์ และความสะดวกสบายในการใช้งาน ที่เห็นได้ชัดเจนเลย คือ การพัฒนาสร้างเครื่องคอมพิวเตอร์ที่สามารถพกพาได้ (Portable Computer) จากคอมพิวเตอร์ขนาดใหญ่ กลายเป็นโน้ตบุ๊กพกพา และตอนนี้ AI ถูกนำมาใช้อย่างแพร่หลาย ปัจจุบันคอมพิวเตอร์ได้กลายเป็นส่วนหนึ่งของชีวิตประจำวัน ช่วยในงานด้านธุรกิจ วิทยาศาสตร์ และความบันเทิง",
    image: images.comgen5,
  },
];

export default Content;
