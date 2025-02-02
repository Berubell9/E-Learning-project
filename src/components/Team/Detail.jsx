import React from "react";

function Detail() {
  return (
    <div className="px-5 py-5 md:px-20">
      <p className="text-gray-800 flex justify-center text-3xl md:text-4xl font-bold p-2 ">รายละเอียดวิชา</p>
      <p className="flex justify-center text-lg text-gray-700">วิชาโครงงานอาชีพ</p>
      <p className="flex justify-center text-base text-gray-700">รหัสวิชา 20204-8501</p>
      <p className="flex justify-center text-base text-gray-700">อาจารย์ที่ปรึกษา อาจารย์สุรพงศ์ อับดุลเล๊าะ</p>
      <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white border border-gray-200 w-full h-full p-7 drop-shadow-xs rounded-md items-center justify-center">
            <h1 className="text-gray-800 text-xl md:text-2xl font-bold flex justify-center pb-3">จุดประสงค์รายวิชา</h1>
            <p className="pb-3 text-gray-800 text-base">
                1. เข้าใจหลักการ และกระบวนการวางแผนจัดทําโครงงานสร้างและหรือพัฒนางาน
            </p>
            <p className="pb-3 text-gray-800 text-base">
                2. สามารถประมวลความรู้ และทักษะในการสร้างและหรือพัฒนางานในสาขาวิชชาชีพตามกระบวนการวางแผน
                ดําเนินงาน แก้ไขปัญหา ประเมินผล ทํารายงาน และนําเสนอผลงาน
            </p>
            <p className="text-gray-800 text-base">
                3. มีเจตคติ และกิจนิสัยในการทํางานด้วยความรับผิดชอบ มีวินัย คุณธรรม จริยธรรม ความคิดริเริ่มสร้างสรรค์
                ขยัน อดทน และสามารถทํางานร่วมกับผู้อื่น
            </p>
        </div>
        <div className="bg-white border border-gray-200 w-full h-full p-7 drop-shadow-xs rounded-md items-center justify-center">
            <h1 className="text-gray-800 text-xl md:text-2xl font-bold flex justify-center pb-3">สมรรถนะรายวิชา</h1>
            <p className="pb-3 text-gray-800 text-base">
                1. แสดงความรู้เกี่ยวกับหลักการ และกระบวนการวางแผน จัดทําโครงงาน ดําเนินงาน แก้ไขปัญหา ประเมินผล
                จัดทํารายงาน และนําเสนอผลงาน
            </p>
            <p className="pb-3 text-gray-800 text-base">
                2. เขียนโครงงานสร้างและหรือพัฒนางานตามหลักการ
            </p>
            <p className="pb-3 text-gray-800 text-base">
                3. ดําเนินงานตามแผนงานโครงงานตามหลักการและกระบวนการ
            </p>
            <p className="pb-3 text-gray-800 text-base">
                4. ประเมินผลการดําเนินงานโครงงานตามหลักการ
            </p>
            <p className="text-gray-800 text-base">
                5. รายงานผลการปฏิบัติงาน
            </p>
        </div>
        <div className="bg-white border border-gray-200 w-full h-full p-7 drop-shadow-xs rounded-md items-center justify-center">
            <h1 className="text-gray-800 text-xl md:text-2xl font-bold flex justify-center pb-3">คําอธิบายรายวิชา</h1>
            <p className="text-base text-gray-800">
                &emsp;&emsp;ศึกษา และปฏิบัติเกี่ยวกับหลักการจัดทําโครงงาน การวางแผน การดําเนินงาน การแก้ไขปัญหา การประเมินผล
                การจัดทํารายงาน และการนําเสนอผลงาน โดยปฏิบัติจัดทําโครงงานสร้าง และหรือพัฒนางานที่ใช้ความรู้ และทักษะ
                ในระดับฝีมือ สอดคล้องกับสาขาวิชาชีพที่ศึกษา ดําเนินการเป็นรายบุคคล หรือกลุ่มตามลักษณะของงานให้แล้วเสร็จ
                ในระยะเวลาที่กําหนด
            </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
