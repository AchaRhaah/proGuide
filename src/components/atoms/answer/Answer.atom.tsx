import React from "react";

function Answer({ answerType }: { answerType: "radio" | "checkbox" }) {
  return (
    <div className=" flex text-[1.1rem] pb-4 gap-2 text-[#7c89a3] text-sm">
      <input type={answerType} />
      <p>Geod</p>
    </div>
  );
}

export default Answer;
