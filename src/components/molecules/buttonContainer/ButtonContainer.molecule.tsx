import React from "react";
import { Button } from "../../atoms";

interface ButtonContainerProps {
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void; // Add onSubmit prop for handling answer submission
}

function ButtonContainer({
  onPrevious,
  onNext,
  onSubmit,
}: ButtonContainerProps) {
  return (
    <div className="flex gap-28 mt-10">
      <Button btnText="Previous" onClick={onPrevious} />
      <Button btnText="Next" onClick={onNext} />
      <Button btnText="Submit" onClicsk={onSubmit} /> Add Submit button
    </div>
  );
}

export default ButtonContainer;
