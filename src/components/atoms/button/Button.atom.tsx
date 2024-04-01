import React from "react";

function Button({
  btnText,
  onClick,
}: {
  btnText: string;
  onClick: () => void;
}) {
  return (
    <button
      className="out outline-none w-28 h-10 bg-[#0653fb] rounded-xl text-white"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}

export default Button;
