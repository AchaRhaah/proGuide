import { Button } from "../../atoms";
import { useQuestionContext } from "../../../context/QuestionContext";

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
  const { state } = useQuestionContext();
  const { currentQuestionIndex } = state;
  return (
    <div className="flex gap-12 mt-10">
      <Button btnText="Previous" onClick={onPrevious} />
      <Button btnText="Next" onClick={onNext} />
      <Button btnText="Submit" onClick={onSubmit} />
      {currentQuestionIndex === 39 && (
        <Button btnText="Submit" onClick={onSubmit} />
      )}{" "}
      {/* Add Submit button */}
    </div>
  );
}

export default ButtonContainer;
