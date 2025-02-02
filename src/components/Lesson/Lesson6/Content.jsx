import React from "react";

function Content() {
    return (
        <div className="bg-gray-100 min-h-screen w-full py-10 px-4 sm:px-6 lg:px-8">
             <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
                วิดีโอการบำรุงรักษาคอมพิวเตอร์
            </h1>
            {/* Video YouTube Embed */}
            <div className="flex justify-center ">
                <iframe
                className="w-full sm:w-[1020px] h-[300px] sm:h-[515px] rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/GDGJLIAAlGU?start=1166"
                title="YouTube video"
                allowFullScreen
                ></iframe>
            </div>
            <a href="https://www.youtube.com/watch?v=GDGJLIAAlGU&t=1166s" target="_blank">
                <p className="flex justify-center mt-3 text-gray-400 mb-8">อ้างอิง : https://www.youtube.com/watch?v=GDGJLIAAlGU&t=1166s</p>
            </a>

            {/* เนื้อหา */}
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 lg:p-10">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
                    วิธีดูแลรักษาคอมพิวเตอร์ให้ใช้งานได้นาน
                </h1>
                <div className="space-y-6">
                {contentData.map((item, index) => (
                    <div key={index}>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
                        {item.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                        {item.description}
                    </p>
                    </div>
                ))}
                </div>
                <a href="https://surl.li/mhsqpm" target="_blank">
                <p className="flex justify-center mt-5 text-gray-400">อ้างอิง : https://surl.li/mhsqpm</p>
                </a>
            </div>
        </div>
    );
}

const contentData = [
  {
    title: "1. ทำความสะอาดคอมพิวเตอร์",
    description:
      "เริ่มจากการถอดปลั๊กไฟก่อน และทำความสะอาดโดยใช้ผ้าสะอาดชุบน้ำเปล่า หรือน้ำยาทำความสะอาดคอมพิวเตอร์ เช็ดส่วนต่างๆ ที่เป็นตัวเครื่องหรือกรอบหน้าจอ เมาส์ คีย์บอร์ด รวมถึงสายไฟคอมพิวเตอร์",
  },
  {
    title: "2. เป่าฝุ่นหรือกำจัดฝุ่นที่อยู่บนตัวเครื่อง",
    description:
      "แนะนำให้ใช้แปลงทาสีที่มีขนอ่อนๆ อาจจะเป็นแปรงด้ามไม้ไผ่หาซื้อได้ตามร้านวัสดุก่อสร้าง เพราะ หน้าจอ หรือตัวเครื่องบางรุ่น หากใช้แปรงที่มีขนหนาอาจทำให้เป็นรอยได้ ถ้าใครมีเครื่องเป่าฝุ่น หรือเป่าลม สามารถใช้นำมาเป่าเครื่องได้ เพื่อไล่ฝุ่นออกจากคอมพิวเตอร์",
  },
  {
    title: "3. ตรวจเช็คความเรียบร้อยภายในตัวเครื่องคอมพิวเตอร์",
    description:
      "เปิดฝาเครื่อง และตรวจสอบพัดลมระบายความร้อน รวมถึงสายไฟภายในเครื่องว่ายังอยู่ในสภาพดีหรือไม่ เพราะ ความร้อนเป็นอีกหนึ่งสาเหตุที่ทำให้คอมพิวเตอร์เสียได้เพราะอุปกรณ์สึกหรอ",
  },
  {
    title: "4. จัดวางคอมพิวเตอร์ให้ถูกหลัก",
    description:
      "สำหรับผู้ที่ใช้คอมพิวเตอร์ตั้งโต๊ะ การจัดวางหน้าจอคอมพิวเตอร์ควรวางให้ห่างจากกำแพง หรือมีช่องว่างด้านหลังจอประมาณ 1 ไม้บรรทัด เพราะ ความร้อนที่กระจายออกมาจะได้มีการระบายที่โล่ง และไม่เกิดอุณหภูมิสูง รวมถึงตัวเคสคอมพิวเตอร์ก็ควรตั้งในที่มีช่องระบายความร้อนให้ลมสามารถพัดเข้า-ออกได้ ผู้ที่ใช้โน้ตบุ้คก็เช่นเดียวกัน ควรยกระดับด้านล่างของโน้ตบุ้คให้มีช่องว่างระบายอากาศด้านล่างด้วย เนื่องจากโน้ตบุ้คจะมีความร้อนที่สูงกว่าคอมพิวเตอร์ทั่วไป แนะนำให้หาพัดลมตัวเล็กๆ หรือพัดลมตั้งพื้นเป่า",
  },
  {
    title: "5. เข้าศูนย์ หรือร้านซ่อมคอมใกล้บ้าน",
    description:
      "วิธีนี้สำหรับคนที่ไม่สะดวกในการจัดการคอมพิวเตอร์ ก็ต้องฝากให้เป็นงานของช่างคอมพิวเตอร์ช่วยตรวจสอบกันว่าอุปกรณ์ต่างๆ ยังอยู่ในสภาพดีไหม ก่อนตรวจเช็คสอบถามราคาในการดำเนินการก่อน",
  },
  {
    title: "6. จัดการไฟล์ที่ไม่ได้ใช้แล้วหรือไม่สำคัญ",
    description:
      "ไฟล์ต่างๆ ที่เราดาวน์โหลดมา หรือเก็บไว้ในเครื่องคอมพิวเตอร์หากไม่ได้ใช้งานแล้ว หรือไม่สำคัญก็ควรลบทิ้งจากเครื่องคอมพิวเตอร์ เพราะ จะทำให้ไม่หนักเครื่องในส่วนของหน่วยความจำ จะได้พร้อมและมีที่ว่างรับข้อมูลใหม่",
  },
  {
    title: "7. จัดระเบียบโฟลเดอร์ต่างๆ",
    description:
      "ในส่วนนี้จะช่วยประหยัดทั้งเวลา และช่วยในเรื่องการทำงานของเราได้เลย เพราะ หากเราจัดการไฟล์ และโฟลเดอร์ต่างๆ ให้เป็นระเบียบเรียบร้อย เวลาที่หาไฟล์ต่างๆ ก็จะสะดวกมากขึ้น เครื่องก็จะทำงานไม่หนัก",
  },
  {
    title: "8. กำจัด และสแกนไวรัสในคอมพิวเตอร์",
    description:
      "วิธีนี้อาจต้องใช้เวลาหน่อย เพราะ แน่นอนว่าสำหรับคนที่ใช้คอมพิวเตอร์มานาน ข้อมูลต่างๆ รูปภาพ ไฟล์เพลง งานต่างๆ มากมายที่อยู่ในเครื่องมาจากหลากหลายที่ ทำให้มีไวรัสแฝงตัวอยู่ในโฟลเดอร์ต่างๆ ทั้งที่เราไม่รู้บ้าง ยิ่งข้อมูลมากยิ่งใช้เวลาสแกนนานมากขึ้น ลองหาโปรแกรมสแกนไวรัสสักตัวอย่างเช่น NOD32 เพื่อให้การใช้งานคอมพิวเตอร์ไม่มีปัญหา",
  },
  {
    title: "9. ลบโปรแกรมที่ไม่ได้ใช้งานทิ้ง",
    description:
      "หากเรารู้ว่าโปรแกรมไหนที่เราไม่ได้ใช้งานแล้ว หรือเกมส์ต่างๆ ที่เราลงไว้ในคอมพิวเตอร์แต่ไม่ได้เล่น เราควรจะลบออกเช่นเดียวกับโฟลเดอร์ และไฟล์ เพราะ จะทำให้เครื่องคอมพิวเตอร์ของเราไม่ทำงานหนักที่ต้องเตรียมโปรแกรมต่างๆ คอยเสิร์ฟเวลาที่เราจะใช้งาน",
  },
  {
    title: "10. หมั่นหาวิธี หรือการใช้งานที่ถูกต้อง",
    description:
      "จริงๆ แล้ววิธีนี้ก็คือการใช้งานคอมพิวเตอร์ให้ถูกต้องตามพื้นฐาน เพราะ ถ้าเราไม่รู้หลักในการใช้งานแล้ว ตั้งแต่ข้อ 9 จนถึง 1 ที่กล่าวมาก็อาจทำให้เราละเลยในการดูแลรักษาคอมพิวเตอร์จากการใช้งานที่ไม่ถูกต้องได้ เพียงแค่เราคอยเอาใจใส่ทั้งตัวเราและคอมพิวเตอร์ ต้องเริ่มจากตัวเราก่อน เพราะถ้าเราไม่ดูแลสุขภาพตัวเราก่อน เวลาที่เราจะดูแลคอมพิวเตอร์ก็จะมีน้อยลง",
  },
];

export default Content;
