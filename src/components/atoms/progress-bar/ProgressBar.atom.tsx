import React, { useEffect, useState } from "react";
import { MathJax } from "better-react-mathjax";
interface ProgressBarProps {
  answeredQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ answeredQuestions }) => {
  const percentage: number = (answeredQuestions / 40) * 100;

  return (
    <div className="w-full mt-4">
      <div className="mb-1 text-base font-medium dark:text-white flex justify-end">
        <p>{answeredQuestions}/40 answered</p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div
          className="bg-[#0653fb] h-2.5 rounded-full dark:bg-[#0653fb]"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
