import React from "react";
import { Answer } from "../../atoms";

function AnswerSegment() {
  return (
    <div className="w-full  ">
      <Answer answerType="radio" /> <Answer answerType="radio" />{" "}
      <Answer answerType="radio" />{" "}
    </div>
  );
}

export default AnswerSegment;
