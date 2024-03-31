import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineArrowRight } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";
import { Avatar } from "../../atoms";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <header className="text-gray-600 z-40 body-font sm:bg-white fixed w-full border border-b-2">
      <div className="container mx-auto flex flex-wrap p-5 flex-row  md:flex-row justify-between items-center bg-white">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="md:ml-3 ml-0 text-2xl text-primary font-bold font-poppins">
            {" "}
            ProGuide
          </span>
        </a>
        <div className="md:hidden flex">
          {menu ? (
            <RxCross1
              onClick={handleChange}
              className="text-2xl mr-8 font-bold"
            />
          ) : (
            <AiOutlineMenu
              onClick={handleChange}
              className="text-2xl mr-8 font-bold"
            />
          )}
        </div>
        <h2 className="font-bold text-xl ">Math Quiz</h2>
        <Avatar />
        <nav
          className={`cursor-pointer ${
            menu ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex md-none flex-col absolute bg-[#ffffff] left-0 top-16 text-center pt-2 pb-4 gap-3 w-full h-fit transition-transform duration-300`}
        >
          <Link
            smooth={true}
            to=""
            duration={500}
            spy={true}
            className="mr-5 hover-text-gray-900"
          >
            First Link
          </Link>
          <Link
            smooth={true}
            to=""
            duration={500}
            spy={true}
            className="mr-5 hover-text-gray-900"
          >
            Second Link
          </Link>
          <Link
            smooth={true}
            to=""
            duration={500}
            spy={true}
            className="mr-5 hover-text-gray-900"
          >
            Third Link
          </Link>
          <Link
            smooth={true}
            to=""
            duration={500}
            spy={true}
            className="mr-5 hover-text-gray-900"
          >
            Fourth Link
          </Link>
          <button
            className="inline-flex items-center w-[8rem] bg-gray-100 border-0 py-2 gap-2 self-center px-3 focus:outline-none hover-bg-gray-200 rounded
text-base mt-4 md:mt-0"
          >
            Button
            <AiOutlineArrowRight />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
