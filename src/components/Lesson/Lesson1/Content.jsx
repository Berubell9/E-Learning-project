import React from "react";

function Content() {
  return (
    <div className="bg-gray-100 min-h-screen w-full py-10 px-4 sm:px-6 lg:px-8">
      
      {/* หัวข้อ */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
        วิดีโอความหมายของคอมพิวเตอร์
      </h1>

      {/* Video YouTube Embed */}
      <div className="flex justify-center ">
        <iframe
          className="w-full sm:w-[1020px] h-[300px] sm:h-[515px] rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/FhND-60Ox18"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
      <a href="https://www.youtube.com/watch?v=FhND-60Ox18" target="_blank">
        <p className="flex justify-center mt-3 text-gray-400 mb-8">
          อ้างอิง : https://www.youtube.com/watch?v=FhND-60Ox18
        </p>
      </a>

      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 lg:p-10">
        
        {/* หัวข้อ */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          ความหมายของคอมพิวเตอร์
        </h1>

        {/* เนื้อหาความหมายของคอมพิวเตอร์ */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          &emsp;&emsp;คอมพิวเตอร์ คือ อุปกรณ์ทางอิเล็กทรอนิกส์ (Electronic device)
          ที่มนุษย์ใช้เป็นเครื่องมือช่วยในการจัดการกับข้อมูลที่อาจเป็นได้ทั้งตัวเลข
          ตัวอักษร หรือสัญลักษณ์ที่ใช้แทนความหมายในสิ่งต่าง ๆ
          โดยคุณสมบัติที่สำคัญของคอมพิวเตอร์ คือ
          การที่สามารถกำหนดชุดคำสั่งล่วงหน้าหรือโปรแกรมได้ (Programmable)
          นั่น คือ คอมพิวเตอร์สามารถทำงานได้หลากหลายรูปแบบ
          ขึ้นอยู่กับชุดคำสั่งที่เลือกมาใช้
          ทำให้สามารถนำคอมพิวเตอร์ไปประยุกต์ใช้งานได้อย่างกว้างขวาง เช่น
          ใช้ในการตรวจคลื่นความถี่ของหัวใจ การฝาก – ถอนเงินในธนาคาร,
          การตรวจสอบสภาพเครื่องยนต์ เป็นต้น ข้อดีของคอมพิวเตอร์ คือ 
          เครื่องคอมพิวเตอร์สามารถทำงานได้อย่างมีประสิทธิภาพ มีความถูกต้อง และมีความรวดเร็ว
        </p>

        {/* หัวข้อคุณสมบัติของคอมพิวเตอร์ */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mt-8 mb-4">
          คุณสมบัติของคอมพิวเตอร์
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          &emsp;&emsp;ปัจจุบันคนส่วนใหญ่นิยมนำคอมพิวเตอร์มาใช้งานต่าง ๆ มากมาย
          ซึ่งผู้ใช้ส่วนใหญ่มักจะคิดว่าคอมพิวเตอร์เป็นเครื่องมือที่สามารถทำงานได้สารพัด
          แต่งานที่เหมาะกับการนำคอมพิวเตอร์มาใช้มากที่สุดคือการสร้างสารสนเทศ
          ซึ่งสารสนเทศเหล่านั้นสามารถนำมาพิมพ์ออกทางเครื่องพิมพ์
          ส่งผ่านเครือข่ายคอมพิวเตอร์ หรือจัดเก็บไว้ใช้ในอนาคตก็ได้
        </p>

        {/* คุณสมบัติของคอมพิวเตอร์ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {computerFeatures.map((feature, index) => (
            <div key={index} className="bg-red-50 p-5 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-102">
              <h3 className="text-lg font-semibold text-red-500">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
                {feature.description}
              </p>
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

// เนื้อหาคุณสมบัติของคอมพิวเตอร์ 
const computerFeatures = [
  {
    title: "1. ความเร็ว (Speed)",
    description:
      "คอมพิวเตอร์ในปัจจุบันสามารถทำงานได้ถึงร้อยล้านคำสั่งในหนึ่งวินาที",
  },
  {
    title: "2. ความเชื่อถือ (Reliable)",
    description:
      "คอมพิวเตอร์ทุกวันนี้สามารถทำงานได้ทั้งกลางวันและกลางคืนอย่างไม่มีข้อผิดพลาด และไม่รู้จักเหน็ดเหนื่อย",
  },
  {
    title: "3. ความถูกต้องแม่นยำ (Accurate)",
    description:
      "วงจรคอมพิวเตอร์ให้ผลการคำนวณที่ถูกต้องเสมอ หากเกิดข้อผิดพลาด มักเกิดจากโปรแกรมหรือข้อมูลที่ป้อนเข้าไป",
  },
  {
    title: "4. เก็บข้อมูลจำนวนมากได้ (Store Massive Amounts of Information)",
    description:
      "ไมโครคอมพิวเตอร์ในปัจจุบันสามารถเก็บข้อมูลได้มากกว่าหนึ่งพันล้านตัวอักษร และระบบคอมพิวเตอร์ขนาดใหญ่สามารถเก็บข้อมูลได้มากกว่าหนึ่งล้าน ๆ ตัวอักษร",
  },
  {
    title:
      "5. ย้ายข้อมูลจากที่หนึ่งไปยังอีกที่หนึ่งได้อย่างรวดเร็ว (Move Information)",
    description:
      "คอมพิวเตอร์สามารถส่งข้อมูลผ่านระบบเครือข่ายคอมพิวเตอร์ได้รวดเร็ว เช่น การส่งพจนานุกรมหนึ่งเล่มในรูปของข้อมูลอิเล็กทรอนิกส์ไปยังเครื่องคอมพิวเตอร์ที่อยู่ไกลคนละซีกโลกในเวลาเพียงไม่ถึงหนึ่งวินาที",
  },
];

export default Content;
