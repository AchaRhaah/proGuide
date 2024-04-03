import React, { useState } from "react";
import { isFilePath } from "../../../lib/functions/isFilePath";
import { MathJax } from "better-react-mathjax";
import { Button } from "../../atoms";
interface Props {
  questionNumber: number;
  question: string;
  correctAnswer: string;
  isCorrect: boolean;
  explanation?: string;
  userAnswer: any;
  correctAnswerOptionIndex: number;
}
function AnswerCard({
  questionNumber,
  question,
  correctAnswer,
  userAnswer,
  isCorrect,
  correctAnswerOptionIndex,
  explanation,
}: Props) {
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };
  const choices = ["A", "B", "C", "D"];
  return (
    <div
      className={`sh shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 py-8 rounded-lg text-sm flex flex-col gap-1 ${
        isCorrect ? "border border-primary" : "border border-red-400"
      }`}
    >
      <h1 className="text-lg text-primary font-semibold">
        Question {questionNumber}:{" "}
        <span className={`${isCorrect ? "" : "text-red-400"}`}>
          {isCorrect ? "Correct" : "Incorrect"}
        </span>
      </h1>
      <MathJax>
        <p className="font-medium py-2">{question}</p>
      </MathJax>
      <p className="text-primary">
        correct Answer: {choices[correctAnswerOptionIndex]}
      </p>
      {!isFilePath(correctAnswer) && <MathJax>{correctAnswer}</MathJax>}

      {isFilePath(correctAnswer) && (
        <img src={correctAnswer} className="w-28" />
      )}
      <p className="font-bold text-lg">
        given answer: {choices[userAnswer - 1]}
      </p>
      {explanation && (
        <Button onClick={toggleExplanation} btnText="See Explanation" />
      )}
      {showExplanation && (
        <p className="py-2">
          <span className="font-medium">Explanation:</span> {explanation}
        </p>
      )}
    </div>
  );
}

export default AnswerCard;
