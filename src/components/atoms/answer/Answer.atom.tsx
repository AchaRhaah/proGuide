// Answer.jsx
import React, { useState, useEffect } from "react";
import { MathJax } from "better-react-mathjax";
import { isFilePath } from "../../../lib/functions/isFilePath";

const Answer = ({ option, index, onSelect, selectedOption }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Initialize the isChecked state based on the selected option from props
    setIsChecked(option === selectedOption);
  }, [selectedOption, option]);

  const handleSelectAnswer = () => {
    // Toggle the isChecked state
    setIsChecked(!isChecked);
    // Call onSelect function to pass the selected answer to the parent component
    onSelect(option);
  };

  const optionLetters = ["a", "b", "c", "d"];
  return (
    <div className="flex items-center justify pb-1">
      <input
        type="radio"
        id={`option${index}`}
        name="options"
        value={option}
        checked={isChecked}
        onChange={handleSelectAnswer}
        className="mr-2"
      />
      <p className="">{`${optionLetters[index]}. `}</p>
      <div className="w-2"></div>
      {isFilePath(option) ? (
        <img src={option} className="w-28" />
      ) : (
        <label htmlFor={`option${index}`} className="flex text-sm gap-2">
          <MathJax>{option}</MathJax>
        </label>
      )}
    </div>
  );
};

export default Answer;
