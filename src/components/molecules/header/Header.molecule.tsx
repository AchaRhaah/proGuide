import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineArrowRight } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { Avatar } from "../../atoms";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation(); // Get the current location

  const handleChange = () => {
    setMenu(!menu);
  };

  // Dynamically set the header text based on the URL
  const headerText = location.pathname === "/answers" ? "Score" : "Math Quiz";

  return (
    <header
      className={
        "text-gray-600 z-40 body-font sm:bg-white fixed w-full border border-b-2 p-5"
      }
    >
      <div className="container mx-auto flex flex-wrap px-5 py-1 flex-row  md:flex-row justify-between items-center bg-white">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="md:ml-3 ml-0 text-2xl text-primary font-bold font-poppins">
            {" "}
            ProGuide
          </span>
        </a>
        <h2 className="font-bold text-xl ">{headerText}</h2>{" "}
        {/* Render dynamic header text */}
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
