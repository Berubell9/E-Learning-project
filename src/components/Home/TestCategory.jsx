import React from "react";
import images from "../../constants/image";
import { Link } from "react-router-dom";

function TestCategory() {
  return (
    <div className="px-5 py-10 flex flex-col items-center">
      {/* หัวข้อ */}
      <p className="text-gray-800 text-3xl md:text-4xl font-bold text-center">
        เเบบทดสอบ
      </p>
      <p className="text-base text-gray-700 text-center mt-2">
        กรุณาเลือกเเบบทดสอบก่อนเรียนเพื่อวัดระดับความรู้ของคุณก่อน
      </p>

      {/* กล่อง 2 อันอยู่กลางจอ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 place-items-center">
        {/* กรอบ 1 */}
        <div className=" overflow-hidden transition-transform transform hover:scale-103 bg-white border border-gray-200 w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] shadow-sm rounded-md flex items-center justify-center">
          <Link to="/before">
            <img
              src={images.seven}
              alt="ก่อนเรียน"
              className="w-full h-full object-cover rounded-md"
            />
          </Link>
        </div>

        {/* กรอบ 2 */}
        <div className=" overflow-hidden transition-transform transform hover:scale-103 bg-white border border-gray-200 w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] shadow-sm rounded-md flex items-center justify-center">
          <Link to="/after">
            <img
              src={images.eight}
              alt="หลังเรียน"
              className="w-full h-full object-cover rounded-md"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TestCategory;
