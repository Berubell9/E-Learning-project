import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownLesson, setDropdownLesson] = useState(false);
  const [dropdownTest, setDropdownTest] = useState(false);

  const handleClick = () => setClick(!click);
  const toggleLessonDropdown = () => setDropdownLesson(!dropdownLesson);
  const toggleTestDropdown = () => setDropdownTest(!dropdownTest);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="h-16 flex items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <Link to="/home" className="flex items-center cursor-pointer">
          <MdOutlineMenuBook className="text-blue-600 text-3xl" />
          <p className="text-blue-600 text-2xl font-bold ml-2">E–LEARNING</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-end items-center">
          <ul className="flex gap-10">
            <Link to="/home" className="text-gray-800 hover:text-blue-600">หน้าหลัก</Link>

            {/* Dropdown บทเรียน */}
            <div className="relative">
              <button
                onClick={toggleLessonDropdown}
                className="flex items-center text-gray-800 hover:text-blue-600 focus:outline-none"
              >
                บทเรียน {dropdownLesson ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />}
              </button>
              {dropdownLesson && (
                <div className="absolute top-8 left-0 w-60 bg-white shadow-md rounded-md overflow-hidden">
                  <Link to="/lesson1" className="block px-4 py-2 hover:bg-blue-100">ความหมายของคอมพิวเตอร์</Link>
                  <Link to="/lesson2" className="block px-4 py-2 hover:bg-blue-100">วิวัฒนาการของคอมพิวเตอร์</Link>
                  <Link to="/lesson3" className="block px-4 py-2 hover:bg-blue-100">ประเภทของคอมพิวเตอร์</Link>
                  <Link to="/lesson4" className="block px-4 py-2 hover:bg-blue-100">หลักการทำงานของคอมพิวเตอร์</Link>
                  <Link to="/lesson5" className="block px-4 py-2 hover:bg-blue-100">ส่วนประกอบของคอมพิวเตอร์</Link>
                  <Link to="/lesson6" className="block px-4 py-2 hover:bg-blue-100">วิธีการบำรุงรักษาคอมพิวเตอร์</Link>
                </div>
              )}
            </div>

            {/* Dropdown แบบทดสอบ */}
            <div className="relative">
              <button
                onClick={toggleTestDropdown}
                className="flex items-center text-gray-800 hover:text-blue-600 focus:outline-none"
              >
                แบบทดสอบ {dropdownTest ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />}
              </button>
              {dropdownTest && (
                <div className="absolute top-8 left-0 w-60 bg-white shadow-md rounded-md overflow-hidden">
                  <Link to="/before" className="block px-4 py-2 hover:bg-blue-100">แบบทดสอบก่อนเรียน</Link>
                  <Link to="/after" className="block px-4 py-2 hover:bg-blue-100">แบบทดสอบหลังเรียน</Link>
                </div>
              )}
            </div>

            <Link to="/team" className="text-gray-800 hover:text-blue-600">คณะผู้จัดทำ</Link>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          {click && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-md transition">
              <ul className="text-center text-xl p-2">
                <Link to="/home" onClick={() => setClick(false)}>
                  <li className="text-base py-4 text-gray-800 hover:bg-blue-100">หน้าหลัก</li>
                </Link>

                {/* Dropdown บทเรียน ในมือถือ */}
                <div>
                  <button
                    onClick={toggleLessonDropdown}
                    className="text-base w-full text-left px-6 py-4 text-gray-800 hover:bg-blue-100 flex justify-center items-center"
                  >
                    บทเรียน {dropdownLesson ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {dropdownLesson && (
                    <div className="bg-gray-100 ">
                      <Link to="/lesson1" className="block py-4 hover:bg-blue-100 text-sm">ความหมายของคอมพิวเตอร์</Link>
                      <Link to="/lesson2" className="block py-4 hover:bg-blue-100 text-sm">วิวัฒนาการของคอมพิวเตอร์</Link>
                      <Link to="/lesson3" className="block py-4 hover:bg-blue-100 text-sm">ประเภทของคอมพิวเตอร์</Link>
                      <Link to="/lesson4" className="block py-4 hover:bg-blue-100 text-sm">หลักการทำงานของคอมพิวเตอร์</Link>
                      <Link to="/lesson5" className="block py-4 hover:bg-blue-100 text-sm">ส่วนประกอบของคอมพิวเตอร์</Link>
                      <Link to="/lesson6" className="block py-4 hover:bg-blue-100 text-sm">วิธีการบำรุงรักษาคอมพิวเตอร์</Link>
                    </div>
                  )}
                </div>

                {/* Dropdown แบบทดสอบ ในมือถือ */}
                <div>
                  <button
                    onClick={toggleTestDropdown}
                    className="text-base w-full text-left px-6 py-4 text-gray-800 hover:bg-blue-100 flex justify-center items-center"
                  >
                    แบบทดสอบ {dropdownTest ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {dropdownTest && (
                    <div className="bg-gray-100 ">
                      <Link to="/before" className="block py-4 hover:bg-blue-100 text-sm">แบบทดสอบก่อนเรียน</Link>
                      <Link to="/after" className="block py-4 hover:bg-blue-100 text-sm">แบบทดสอบหลังเรียน</Link>
                    </div>
                  )}
                </div>

                <Link to="/team" onClick={() => setClick(false)}>
                  <li className="text-base py-4 text-gray-800 hover:bg-blue-100">คณะผู้จัดทำ</li>
                </Link>
              </ul>
            </div>
          )}
        </div>

        {/* Hamburger Menu Button (เฉพาะ Mobile) */}
        <button className="block lg:hidden text-3xl" onClick={handleClick}>
          {click ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
