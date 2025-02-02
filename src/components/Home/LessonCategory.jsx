import React from "react";
import images from "../../constants/image";
import { Link } from "react-router-dom";

function LessonCategory() {
  return (
    <div className="px-5 py-10 flex flex-col items-center">
      {/* หัวข้อ */}
      <p className="text-gray-800 text-3xl md:text-4xl font-bold text-center">
        บทเรียน
      </p>
      <p className="text-base text-gray-700 text-center mt-2">
        เลือกบทเรียนที่คุณสนใจ
      </p>

      {/* กล่องบทเรียนแบบ Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 place-items-center">
        {/* บทเรียน */}
        {[images.one, images.two, images.three, images.four, images.five, images.six].map((image, index) => (
          <Link to={`/lesson${index + 1}`} key={index}>
            <div className=" overflow-hidden transition-transform transform hover:scale-103 bg-white border border-gray-200 w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] shadow-sm rounded-md flex items-center justify-center">
              <img
                src={image}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LessonCategory;
