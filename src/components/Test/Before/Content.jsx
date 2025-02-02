import React, { useState } from "react";

function Content() {
  // State สำหรับเก็บค่าปัจจุบันของข้อสอบ
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null)); // เก็บคำตอบที่เลือก
  const [showResult, setShowResult] = useState(false);

  // ฟังก์ชันเลือกคำตอบ
  const handleAnswerClick = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  // ฟังก์ชันเมื่อกด "ถัดไป"
  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  // ฟังก์ชันเมื่อกด "ย้อนกลับ"
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // ฟังก์ชันเลือกทำข้อไหนก็ได้
  const handleSelectQuestion = (index) => {
    setCurrentQuestion(index);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-6">
      <div className="mt-15 bg-white shadow-lg rounded-lg p-6 sm:p-10 sm:max-w-5xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          แบบทดสอบก่อนเรียน
        </h1>

        {showResult ? (
          // แสดงผลคะแนนหลังทำข้อสอบเสร็จ
          <div className="text-center">
            <h2 className="text-xl font-semibold text-green-600">
              คุณทำคะแนนได้{" "}
              {
                answers.filter(
                  (ans, index) => ans === questions[index].correctAnswer
                ).length
              }{" "}
              / {questions.length} คะแนน
            </h2>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers(Array(questions.length).fill(null));
                setShowResult(false);
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              ทำแบบทดสอบอีกครั้ง
            </button>
          </div>
        ) : (
          // แสดงคำถามและตัวเลือก
          <div>
            {/* แสดงลำดับข้อสอบ */}
            <div className="flex flex-col justify-center items-center mb-4 w-full px-4">
              {Array.from(
                { length: Math.ceil(questions.length / 10) },
                (_, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex flex-wrap justify-center gap-2 mb-2 w-full max-w-3xl overflow-x-auto"
                  >
                    {questions
                      .slice(rowIndex * 10, rowIndex * 10 + 10)
                      .map((_, index) => {
                        const actualIndex = rowIndex * 10 + index;
                        return (
                          <button
                            key={actualIndex}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-semibold transition ${
                              currentQuestion === actualIndex
                                ? "bg-green-600 text-white"
                                : answers[actualIndex]
                                ? "bg-gray-500 text-white"
                                : "bg-gray-300"
                            }`}
                            onClick={() => handleSelectQuestion(actualIndex)}
                          >
                            {actualIndex + 1}
                          </button>
                        );
                      })}
                  </div>
                )
              )}
            </div>

            {/* คำถาม */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
              {currentQuestion + 1}. {questions[currentQuestion].question}
            </h2>

            {/* ตัวเลือก */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded-lg text-gray-800 font-medium transition ${
                    answers[currentQuestion] === option
                      ? "bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* ปุ่มย้อนกลับ & ถัดไป */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition disabled:bg-gray-300"
              >
                ย้อนกลับ
              </button>
              <button
                onClick={handleNextQuestion}
                disabled={!answers[currentQuestion]}
                className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition disabled:bg-gray-300"
              >
                {currentQuestion + 1 === questions.length
                  ? "ดูผลคะแนน"
                  : "ถัดไป"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
const questions = [
  {
    question: "คอมพิวเตอร์คืออะไร?",
    options: [
      "เครื่องคิดเลข",
      "โทรศัพท์มือถือ",
      "อุปกรณ์อิเล็กทรอนิกส์",
      "ทีวี",
    ],
    correctAnswer: "อุปกรณ์อิเล็กทรอนิกส์",
  },
  {
    question: "ข้อดีของคอมพิวเตอร์คืออะไร?",
    options: ["รวดเร็ว และแม่นยำ", "กินไฟมาก", "เสียงดัง", "ใหญ่ และหนัก"],
    correctAnswer: "รวดเร็ว และแม่นยำ",
  },
  {
    question: "อุปกรณ์ใดที่ใช้ป้อนข้อมูลเข้าสู่คอมพิวเตอร์?",
    options: ["จอภาพ", "คีย์บอร์ด", "ลำโพง", "ฮาร์ดดิสก์"],
    correctAnswer: "คีย์บอร์ด",
  },
  {
    question: "ฮาร์ดแวร์คืออะไร?",
    options: [
      "โปรแกรมซอฟต์แวร์",
      "ระบบปฏิบัติการ",
      "ฐานข้อมูล",
      "อุปกรณ์ที่จับต้องได้",
    ],
    correctAnswer: "อุปกรณ์ที่จับต้องได้",
  },
  {
    question: "ซอฟต์แวร์คืออะไร?",
    options: [
      "โปรแกรมที่ใช้ควบคุมการทำงาน",
      "อุปกรณ์ฮาร์ดแวร์",
      "ข้อมูลในฮาร์ดดิสก์",
      "อุปกรณ์เชื่อมต่อ",
    ],
    correctAnswer: "โปรแกรมที่ใช้ควบคุมการทำงาน",
  },
  {
    question: "คอมพิวเตอร์ยุคปัจจุบันเป็นยุคที่เท่าไหร่?",
    options: ["ยุคที่ 2", "ยุคที่ 3", "ยุคที่ 4", "ยุคที่ 5"],
    correctAnswer: "ยุคที่ 5",
  },
  {
    question: "ยุคที่ 1 ของคอมพิวเตอร์ใช้เทคโนโลยีอะไร?",
    options: [ "ทรานซิสเตอร์", "วงจรรวม", "หลอดสุญญากาศ", "ไมโครชิป"],
    correctAnswer: "หลอดสุญญากาศ",
  },
  {
    question: "คอมพิวเตอร์ยุคที่ 2 มีการพัฒนาอย่างไร?",
    options: [
      "ใช้วงจรรวม",
      "ใช้ทรานซิสเตอร์แทนหลอดสุญญากาศ",
      "ใช้ AI",
      "ใช้ระบบปฏิบัติการใหม่",
    ],
    correctAnswer: "ใช้ทรานซิสเตอร์แทนหลอดสุญญากาศ",
  },
  {
    question: "คอมพิวเตอร์ยุคที่ 3 ใช้อะไรเป็นองค์ประกอบหลัก?",
    options: ["หลอดสุญญากาศ", "ทรานซิสเตอร์", "ฮาร์ดดิสก์", "วงจรรวม (IC)"],
    correctAnswer: "วงจรรวม (IC)",
  },
  {
    question: "คอมพิวเตอร์ยุคที่ 4 มีเทคโนโลยีอะไรที่พัฒนาขึ้น?",
    options: [
      "การใช้ไมโครโพรเซสเซอร์",
      "การใช้ AI",
      "การรองรับระบบสัมผัส",
      "การเชื่อมต่ออินเทอร์เน็ตความเร็วสูง",
    ],
    correctAnswer: "การใช้ไมโครโพรเซสเซอร์",
  },
  {
    question: "คอมพิวเตอร์สามารถแบ่งออกเป็นกี่ประเภทหลัก?",
    options: ["4", "2", "5", "6"],
    correctAnswer: "6",
  },
  {
    question: "คอมพิวเตอร์ประเภทใดที่มีขนาดใหญ่ที่สุด และมีประสิทธิภาพสูงสุด?",
    options: ["Supercomputer", "Mainframe", "Microcomputer", "Server"],
    correctAnswer: "Supercomputer",
  },
  {
    question: "คอมพิวเตอร์ประเภทใดที่สามารถพกพาได้สะดวก?",
    options: ["Mainframe", "Supercomputer", "Laptop", "Server"],
    correctAnswer: "Laptop",
  },
  {
    question: "คอมพิวเตอร์ประเภทใดที่มีขนาดเล็ก และใช้ระบบสัมผัส?",
    options: [ "Desktop", "Tablet", "Minicomputer", "Server"],
    correctAnswer: "Tablet",
  },
  {
    question: "คอมพิวเตอร์ประเภทใดที่นิยมใช้ในบ้าน และสำนักงาน?",
    options: ["Microcomputer", "Supercomputer", "Mainframe", "Minicomputer"],
    correctAnswer: "Microcomputer",
  },
  {
    question: "หน่วยประมวลผลกลาง (CPU) ทำหน้าที่อะไร?",
    options: [
      "จัดเก็บข้อมูล",
      "แสดงผลข้อมูล",
      "ควบคุมพลังงาน",
      "ประมวลผลข้อมูล"
    ],
    correctAnswer: "ประมวลผลข้อมูล",
  },
  {
    question: "เมื่อมีการนำระบบ Input, Processing, Output และ Storage เข้าด้วยกันเรียกว่าอะไร?",
    options: ["วงจรการพัฒนาระบบสารสนเทศ", "วงจรการประมวลผลข้อมูล", "หลักการทำงานของคอมพิวเตอร์", "ระบบปฎิบัติการ"],
    correctAnswer: "หลักการทำงานของคอมพิวเตอร์",
  },
  {
    question: "RAM ทำหน้าที่อะไร?",
    options: [
      "เก็บข้อมูลชั่วคราว",
      "ประมวลผลข้อมูล",
      "แสดงผลข้อมูล",
      "เชื่อมต่ออินเทอร์เน็ต",
    ],
    correctAnswer: "เก็บข้อมูลชั่วคราว",
  },
  {
    question: "อุปกรณ์ใดใช้สำหรับแสดงผล (Output Device)?",
    options: [ "คีย์บอร์ด", "จอภาพ", "RAM", "CPU"],
    correctAnswer: "จอภาพ",
  },
  {
    question: "Hard Disk และ SSD มีหน้าที่อะไร?",
    options: [
      "เพิ่มความเร็วประมวลผล",
      "เก็บข้อมูลถาวร",
      "ทำให้คอมพิวเตอร์เปิดเครื่องเร็วขึ้น",
      "เชื่อมต่ออุปกรณ์ภายนอก",
    ],
    correctAnswer: "เก็บข้อมูลถาวร",
  },
  {
    question: "คอมพิวเตอร์ทำงานตามหลักการพื้นฐานกี่ขั้นตอน?",
    options: ["4 ขั้นตอน", "3 ขั้นตอน", "5 ขั้นตอน", "6 ขั้นตอน"],
    correctAnswer: "5 ขั้นตอน",
  },
  {
    question: "ข้อใดเป็น 5 ขั้นตอนหลักของการทำงานของคอมพิวเตอร์?",
    options: [
      "รับข้อมูล, ประมวลผล, ความจำหลัก, แสดงผล, ความจำสำรอง",
      "เปิดเครื่อง, โหลดโปรแกรม, ใช้งาน, ปิดเครื่อง, รีสตาร์ท",
      "ส่งข้อมูล, รับข้อมูล, คำนวณ, จัดเก็บ, ลบข้อมูล",
      "เชื่อมต่ออินเทอร์เน็ต, เปิดเว็บไซต์, ใช้แอปพลิเคชัน, ดาวน์โหลดไฟล์, ปิดเครื่อง"
    ],
    correctAnswer: "รับข้อมูล, ประมวลผล, ความจำหลัก, แสดงผล, ความจำสำรอง",
  },
  {
    question: "AI คืออะไร?",
    options: [
      "เทคโนโลยีที่ช่วยให้คอมพิวเตอร์สามารถคิด และเรียนรู้ได้",
      "ระบบปฏิบัติการของคอมพิวเตอร์",
      "ซอฟต์แวร์ที่ใช้สร้างเว็บไซต์",
      "อุปกรณ์ฮาร์ดแวร์ที่ใช้ในคอมพิวเตอร์"
    ],
    correctAnswer: "เทคโนโลยีที่ช่วยให้คอมพิวเตอร์สามารถคิด และเรียนรู้ได้",
  },
  {
    question: "ข้อใดเป็นตัวอย่างของ AI ที่ใช้ในชีวิตประจำวัน?",
    options: [
      "PowerPoint",
      "Microsoft Excel",
      "USB Flash Drive",
      "Google Assistant และ Siri",
    ],
    correctAnswer: "Google Assistant และ Siri",
  },
  {
    question: "ข้อใดเป็นตัวอย่างของเทคโนโลยี AI ที่ใช้ในธุรกิจ?",
    options: [
      "Microsoft Word",
      "Chatbots และระบบแนะนำสินค้า",
      "เครื่องคิดเลข",
      "เครื่องพิมพ์เลเซอร์"
    ],
    correctAnswer: "Chatbots และระบบแนะนำสินค้า",
  },
  {
    question: "วิธีที่ถูกต้องในการทำความสะอาดคอมพิวเตอร์คืออะไร?",
    options: [
      "ใช้แอลกอฮอล์เช็ดหน้าจอโดยตรง",
      "ใช้น้ำฉีดล้างตัวเครื่อง",
      "ใช้กระดาษทรายขัดฝุ่นออก",
      "ใช้ผ้าสะอาดชุบน้ำ หรือสารทำความสะอาด",
    ],
    correctAnswer: "ใช้ผ้าสะอาดชุบน้ำ หรือสารทำความสะอาด",
  },
  {
    question: "เหตุใดจึงต้องทำความสะอาดคอมพิวเตอร์เป็นประจำ?",
    options: [
      "ช่วยลดการสะสมของฝุ่น และยืดอายุการใช้งาน",
      "ทำให้คอมพิวเตอร์ทำงานช้าลง",
      "ทำให้จอภาพสว่างขึ้น",
      "ไม่มีความจำเป็นต้องทำความสะอาด",
    ],
    correctAnswer: "ช่วยลดการสะสมของฝุ่น และยืดอายุการใช้งาน",
  },
  {
    question: "การจัดวางคอมพิวเตอร์ที่เหมาะสมคืออะไร?",
    options: [
      "วางใกล้หน้าต่างเพื่อรับแสงแดด",
      "ควรวางในที่มีอากาศถ่ายเทสะดวก",
      "วางบนพรมเพื่อป้องกันรอยขีดข่วน",
      "วางในที่ปิดทึบไม่มีช่องระบายอากาศ",
    ],
    correctAnswer: "ควรวางในที่มีอากาศถ่ายเทสะดวก",
  },
  {
    question: "อุปกรณ์ใดช่วยลดปัญหาไฟฟ้ากระชากที่อาจทำให้คอมพิวเตอร์เสียหาย?",
    options: [
      "ฮาร์ดดิสก์ภายนอก",
      "เครื่องสำรองไฟ (UPS)",
      "เครื่องพิมพ์",
      "พัดลมตั้งโต๊ะ",
    ],
    correctAnswer: "เครื่องสำรองไฟ (UPS)",
  },
  {
    question: "ควรเป่าฝุ่นภายในคอมพิวเตอร์ด้วยอะไร?",
    options: [ "น้ำสบู่", "แอลกอฮอล์", "เครื่องเป่าลม", "ผ้าชุบน้ำ"],
    correctAnswer: "เครื่องเป่าลม",
  },
];
export default Content;
