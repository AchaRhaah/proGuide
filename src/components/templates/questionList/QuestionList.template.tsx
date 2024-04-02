import { useState, useEffect } from "react";
import { ProgressBar } from "../../atoms";
import { useQuestionContext } from "../../../context/QuestionContext";

function QuestionList() {
  const { state }: any = useQuestionContext();
  const { currentQuestionIndex, questions } = state;
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [
    "Algebra",
    "Mechanics",
    "Quadratic Equations",
    "Differentiation",
    "Integration", // Fixed typo
  ];

  useEffect(() => {
    // Update the selected category when the current question index changes
    if (currentQuestionIndex !== undefined && currentQuestionIndex !== -1) {
      const currentQuestion = questions[currentQuestionIndex];
      setSelectedCategory(currentQuestion.category);
    }
  }, [currentQuestionIndex, questions]);

  // Handle null case for parsedAnswers
  const storedAnswers = localStorage.getItem("selectedAnswers") || "";
  const parsedAnswers = JSON.parse(storedAnswers);
  const answeredQuestions = parsedAnswers
    ? Object.keys(parsedAnswers).length
    : 0;

  return (
    <div className="h-full w-[22%] top-0 left-0 z-10 bg-white overflow-y-auto border-r-2 border-gray-100 px-8 border hidden lg:flex flex-col ">
      <div className="h-full  w-full flex flex-col items-center px-6">
        <h1 className="text-xl font-semibold my-2">Categories</h1>
        <p className="text-sm my-2">
          This test contains the following categories
        </p>
        <ul className="gap-1 flex flex-col mt-6 text-primary font-medium text-sm">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`py-2 px-1 rounded-lg ${
                categories[index] === selectedCategory ? "bg-[#f0f4ff]" : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
        <ProgressBar answeredQuestions={answeredQuestions} />
      </div>
    </div>
  );
}

export default QuestionList;
