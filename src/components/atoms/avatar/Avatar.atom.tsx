import React from "react";
import { BsPersonFill } from "react-icons/bs";

function Avatar() {
  return (
    <div className="flex items-center gap-4">
      <BsPersonFill className="w-8 h-8 rounded-full" />
      <div className="font-medium dark:text-white">
        <div>Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Joined in August 2014
        </div>
      </div>
    </div>
  );
}

export default Avatar;
