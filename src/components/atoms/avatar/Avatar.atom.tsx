import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { Button } from "..";

function Avatar() {
  return (
    <div className="flex items-center gap-4">
      <BsPersonFill className="w-8 h-8 rounded-full" />
      <div className="font-medium dark:text-white">
        <div>Jese Leos</div>
        <Button btnText="End Test" onClick={() => {}} />
      </div>
    </div>
  );
}

export default Avatar;
