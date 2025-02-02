import React from "react";
import images from "../../constants/image"; 

function Content() {
  return (
    <div className="max-w-4xl mx-auto bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        {/* รายชื่อผู้จัดทำ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-102"
            >
              {/* รูปภาพ */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-90 object-cover"
              />

              {/* ข้อมูลผู้จัดทำ */}
              <div className="p-4 text-center">
                <h2 className="text-lg sm:text-xl font-semibold text-blue-600">
                  {member.name}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base mt-1">
                  {member.position}
                </p>
                <p className="text-gray-500 text-sm mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

const teamMembers = [
  {
    name: "นาย กรดนัย เเสงสว่าง",
    position: "รหัส 65202040002",
    description:
      "ระดับ ปวช. สาขา คอมพิวเตอร์ธุรกิจ",
    image: images.person1,
  },
  {
    name: "นาย กฤษกร เกาะทอง",
    position: "รหัส 65202040079",
    description:
      "ระดับ ปวช. สาขา คอมพิวเตอร์ธุรกิจ",
    image: images.person2,
  },
];

export default Content;
