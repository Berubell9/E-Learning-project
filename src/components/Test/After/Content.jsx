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
          แบบทดสอบหลังเรียน
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
    options: ["อุปกรณ์อิเล็กทรอนิกส์", "เครื่องคิดเลข", "โทรศัพท์มือถือ", "ทีวี"],
    correctAnswer: "อุปกรณ์อิเล็กทรอนิกส์",
  },
  {
    question: "คุณสมบัติที่สำคัญของคอมพิวเตอร์คืออะไร?",
    options: [ "ขนาดเล็ก", "ราคาแพง", "ทำงานช้า", "เก็บข้อมูลจำนวนมากได้"],
    correctAnswer: "เก็บข้อมูลจำนวนมากได้",
  },
  {
    question: "ระบบปฏิบัติการ (OS) คืออะไร?",
    options: [ "อุปกรณ์ฮาร์ดแวร์", "โปรแกรมที่ควบคุมการทำงานของคอมพิวเตอร์", "หน่วยความจำ", "ซีพียู"],
    correctAnswer: "โปรแกรมที่ควบคุมการทำงานของคอมพิวเตอร์",
  },
  {
    question: "ระบบปฏิบัติการที่ใช้กันมากที่สุดคืออะไร?",
    options: [ "CPU","Windows", "BIOS", "RAM"],
    correctAnswer: "Windows",
  },
  {
    question: "คอมพิวเตอร์ใช้ระบบเลขฐานใด?",
    options: ["ฐานสอง", "ฐานสิบ", "ฐานสิบหก", "ฐานแปด"],
    correctAnswer: "ฐานสอง",
  },
  {
    question: "วิวัฒนาการของคอมพิวเตอร์มีกี่ยุค?",
    options: ["2 ยุค", "3 ยุค", "4 ยุค","5 ยุค"],
    correctAnswer: "5 ยุค",
  },
  {
    question: "คอมพิวเตอร์ยุคที่ 1 มีลักษณะอย่างไร?",
    options: [
      "มีขนาดเล็ก และประมวลผลเร็ว",
      "ใช้ระบบ AI",
      "เป็นคอมพิวเตอร์แบบพกพา",
      "มีขนาดใหญ่ และใช้หลอดสุญญากาศ",
    ],
    correctAnswer: "มีขนาดใหญ่ และใช้หลอดสุญญากาศ",
  },
  {
    question: "คอมพิวเตอร์ยุคที่ 2 มีการพัฒนาอย่างไรจากยุคแรก?",
    options: [
      "สามารถพกพาได้",
      "ขนาดเล็กลง และใช้พลังงานน้อยลง",
      "ใช้ระบบสัมผัส",
      "รองรับการใช้งานอินเทอร์เน็ต"
    ],
    correctAnswer: "ขนาดเล็กลง และใช้พลังงานน้อยลง",
  },
  {
    question: "IBM 360 เป็นคอมพิวเตอร์ในยุคที่เท่าไหร่?",
    options: ["ยุคที่ 3", "ยุคที่ 1", "ยุคที่ 2", "ยุคที่ 4"],
    correctAnswer: "ยุคที่ 3",
  },
  {
    question: "ยุคที่ 5 ของคอมพิวเตอร์มีจุดเด่นอะไร?",
    options: [
      "เล่นเกมได้",
      "การใช้ปัญญาประดิษฐ์ (AI)",
      "ขนาดใหญ่ขึ้น",
      "ไม่มีการพัฒนาใหม่"
    ],
    correctAnswer: "การใช้ปัญญาประดิษฐ์ (AI)",
  },
  {
    question: "Mainframe Computer นิยมใช้ในองค์กรประเภทใด?",
    options: ["ธนาคาร และรัฐบาล", "ร้านค้าเล็กๆ", "นักเรียน", "ใช้ในบ้าน"],
    correctAnswer: "ธนาคาร และรัฐบาล"
  },
  {
    question: "Notebook และ Laptop เป็นคอมพิวเตอร์ประเภทใด?",
    options: [ "Minicomputer","Microcomputer", "Mainframe", "Supercomputer"],
    correctAnswer: "Microcomputer",
  },
  {
    question: "Supercomputer มักใช้ในงานประเภทใด?",
    options: [
      "งานเอกสารในสำนักงาน",
      "การเล่นเกมทั่วไป",
      "การเชื่อมต่ออินเทอร์เน็ต",
      "งานคำนวณที่ซับซ้อน เช่น การพยากรณ์อากาศ"
    ],
    correctAnswer: "งานคำนวณที่ซับซ้อน เช่น การพยากรณ์อากาศ",
  },
  {
    question: "คอมพิวเตอร์ประเภทใดที่รองรับผู้ใช้หลายคนพร้อมกัน?",
    options: [ "Microcomputer","Mainframe", "Tablet", "Laptop"],
    correctAnswer: "Mainframe",
  },
  {
    question: "Server Computer มีหน้าที่อะไร?",
    options: [
      "ใช้เล่นเกมออนไลน์",
      "ใช้ทำงานกราฟิก",
      "ใช้ทำงานเอกสาร",
      "ให้บริการ และจัดเก็บข้อมูลในเครือข่าย"
    ],
    correctAnswer: "ให้บริการ และจัดเก็บข้อมูลในเครือข่าย",
  },
  {
    question: "Power Supply มีหน้าที่อะไร?",
    options: [ "ควบคุมการประมวลผล", "เก็บข้อมูลสำรอง","จ่ายไฟให้คอมพิวเตอร์", "เชื่อมต่ออินเทอร์เน็ต"],
    correctAnswer: "จ่ายไฟให้คอมพิวเตอร์",
  },
  {
    question: "การ์ดจอ (GPU) มีหน้าที่หลักคืออะไร?",
    options: [ "ควบคุมพลังงาน","ประมวลผลภาพ และกราฟิก", "จัดเก็บข้อมูล", "เพิ่มความเร็วของ RAM"],
    correctAnswer: "ประมวลผลภาพ และกราฟิก",
  },
  {
    question: "เมนบอร์ด (Motherboard) มีหน้าที่อะไร?",
    options: ["เชื่อมต่ออุปกรณ์ต่างๆ ในคอมพิวเตอร์", "เก็บข้อมูลชั่วคราว", "แสดงผลข้อมูล", "เพิ่มความเร็วในการประมวลผล"],
    correctAnswer: "เชื่อมต่ออุปกรณ์ต่างๆ ในคอมพิวเตอร์",
  },
  {
    question: "หน่วยความจำรอง (Secondary Storage) ใช้สำหรับทำอะไร?",
    options: [ "เพิ่มประสิทธิภาพของ CPU", "ประมวลผลข้อมูล", "ส่งข้อมูลไปยังเครือข่าย","จัดเก็บข้อมูลถาวร"],
    correctAnswer: "จัดเก็บข้อมูลถาวร",
  },
  {
    question: "อุปกรณ์ใดใช้สำหรับเชื่อมต่อกับเครือข่ายอินเทอร์เน็ต?",
    options: [ "CPU", "RAM", "Power Supply","Network Card"],
    correctAnswer: "Network Card",
  },
  {
    question: "หลักการทำงานของคอมพิวเตอร์มีทั้งหมดกี่ขั้นตอน?",
    options: ["3 ขั้นตอน", "4 ขั้นตอน", "5 ขั้นตอน", "6 ขั้นตอน"],
    correctAnswer: "5 ขั้นตอน",
  },
  {
    question: "ข้อใดเป็น 5 ขั้นตอนหลักของการทำงานของคอมพิวเตอร์?",
    options: [
      "เปิดเครื่อง, โหลดโปรแกรม, ใช้งาน, ปิดเครื่อง, รีสตาร์ท",
      "ส่งข้อมูล, รับข้อมูล, คำนวณ, จัดเก็บ, ลบข้อมูล",
      "รับข้อมูล, ประมวลผล, ความจำหลัก, แสดงผล, ความจำสำรอง",
      "เชื่อมต่ออินเทอร์เน็ต, เปิดเว็บไซต์, ใช้แอปพลิเคชัน, ดาวน์โหลดไฟล์, ปิดเครื่อง"
    ],
    correctAnswer: "รับข้อมูล, ประมวลผล, ความจำหลัก, แสดงผล, ความจำสำรอง",
  },
  {
    question: "การจัดเก็บข้อมูลในคอมพิวเตอร์แบ่งออกเป็นกี่ประเภทหลัก?",
    options: ["1 ประเภท", "2 ประเภท", "3 ประเภท", "4 ประเภท"],
    correctAnswer: "2 ประเภท",
  },
  {
    question: "การสื่อสารข้อมูลในคอมพิวเตอร์เกี่ยวข้องกับขั้นตอนใด?",
    options: [ "การแสดงผลข้อมูล", "การคำนวณทางคณิตศาสตร์","การเชื่อมต่อเครือข่าย และอินเทอร์เน็ต", "การจัดเก็บไฟล์ในเครื่อง"],
    correctAnswer: "การเชื่อมต่อเครือข่าย และอินเทอร์เน็ต",
  },
  {
    question: "หน่วยเก็บข้อมูลหลักที่ใช้เก็บโปรแกรมขณะทำงานคืออะไร?",
    options: ["RAM", "Hard Disk", "CPU", "Power Supply"],
    correctAnswer: "RAM",
  },
  {
    question: "การดูแลระบบระบายความร้อนของคอมพิวเตอร์ควรทำอย่างไร?",
    options: [
      "ใช้คอมพิวเตอร์ตลอด 24 ชั่วโมงโดยไม่พัก",
      "ปิดพัดลมระบายความร้อนเพื่อลดเสียงรบกวน",
      "ทำความสะอาดพัดลม และช่องระบายอากาศเป็นประจำ",
      "วางคอมพิวเตอร์ไว้บนผ้านุ่มๆ เพื่อป้องกันรอยขีดข่วน"
    ],
    correctAnswer: "ทำความสะอาดพัดลม และช่องระบายอากาศเป็นประจำ",
  },
  {
    question: "เหตุใดจึงต้องลบไฟล์ที่ไม่จำเป็นออกจากคอมพิวเตอร์?",
    options: [
      "เพื่อทำให้หน้าจอสว่างขึ้น",
      "เพื่อให้พัดลมทำงานได้ดีขึ้น",
      "ไม่มีผลต่อการทำงานของเครื่อง",
      "เพื่อเพิ่มพื้นที่ว่าง และทำให้เครื่องทำงานเร็วขึ้น"
    ],
    correctAnswer: "เพื่อเพิ่มพื้นที่ว่าง และทำให้เครื่องทำงานเร็วขึ้น",
  },
  {
    question: "ควรอัปเดตซอฟต์แวร์ และระบบปฏิบัติการบ่อยแค่ไหน?",
    options: [
      "ปีละครั้ง",
      "เมื่อมีการแจ้งเตือนอัปเดต",
      "เมื่อต้องการเปลี่ยนหน้าตาของระบบ",
      "ไม่จำเป็นต้องอัปเดต"
    ],
    correctAnswer: "เมื่อมีการแจ้งเตือนอัปเดต",
  },
  {
    question: "การสแกนไวรัสในคอมพิวเตอร์มีประโยชน์อย่างไร?",
    options: [
      "ช่วยป้องกันมัลแวร์ และไวรัสที่เป็นอันตราย",
      "ทำให้คอมพิวเตอร์ร้อนขึ้น",
      "ทำให้หน้าจอใหญ่ขึ้น",
      "ไม่มีผลใดๆ ต่อการทำงานของคอมพิวเตอร์"
    ],
    correctAnswer: "ช่วยป้องกันมัลแวร์ และไวรัสที่เป็นอันตราย",
  },
  {
    question: "ควรลบโปรแกรมที่ไม่ได้ใช้งานออกจากเครื่องหรือไม่?",
    options: [
      "ไม่ควรลบ เพราะ โปรแกรมเก่าช่วยให้เครื่องเร็วขึ้น",
      "ควรลบเพื่อลดภาระการทำงานของคอมพิวเตอร์",
      "ไม่เกี่ยวกับความเร็วของคอมพิวเตอร์",
      "ควรติดตั้งโปรแกรมเพิ่มแทน"
    ],
    correctAnswer: "ควรลบเพื่อลดภาระการทำงานของคอมพิวเตอร์",
    category: "การบำรุงรักษาคอมพิวเตอร์",
  },

];
export default Content;
