import React from "react";
import { Answer } from "../../atoms";
import { isFilePath } from "../../../lib/functions/isFilePath";

interface AnswerSegmentProps {
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
}

function AnswerSegment({
  options,
  selectedOption,
  onSelect,
}: AnswerSegmentProps) {
  return (
    <div className={"w-full grid grid-cols-2"}>
      {options.map((option, index) => (
        <Answer
          key={index}
          option={option}
          index={index}
          selectedOption={selectedOption}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default AnswerSegment;
