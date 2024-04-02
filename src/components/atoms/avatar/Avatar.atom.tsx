import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { Button } from "..";
import { Link, useLocation } from "react-router-dom";

function Avatar() {
  const location = useLocation(); // Get the current location

  return (
    <div className="flex items-center gap-4">
      <BsPersonFill className="w-8 h-8 rounded-full" />
      <div className="font-medium dark:text-white">
        <div>Jese Leos</div>
        {/* {location.pathname !== "/answers" && (
          <Link
            className="out outline-none w-28 h-10 bg-primary rounded-xl text-white hover:bg-[#0654fba8]"
            to="/answers"
          >
            <Button btnText="End Test" onClick={() => {}} />
          </Link>
        )} */}
      </div>
    </div>
  );
}

export default Avatar;
