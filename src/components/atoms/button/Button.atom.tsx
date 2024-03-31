import React from "react";

function Button({ btnText }: { btnText: string }) {
  return (
    <button className="out outline-none w-28 h-10 bg-[#0653fb] rounded-xl text-white">
      {btnText}
    </button>
  );
}

export default Button;
