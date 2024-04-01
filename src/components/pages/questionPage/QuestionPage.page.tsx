import React, { useState, useEffect } from "react";
import { PrimaryLayout, QuestionList } from "../../templates";
import { Question, ProgressBar } from "../../atoms";
import { AnswerSegment } from "../../organisms";
import { ButtonContainer } from "../../molecules";
import { useQuestionContext } from "../../../context/QuestionContext";

function QuestionPage() {
  const { state, dispatch } = useQuestionContext();
  const { questions, currentQuestionIndex } = state;
  const currentQuestion = questions[currentQuestionIndex];

  // Initialize state to store selected answers, defaulting to values from local storage
  const [selectedAnswers, setSelectedAnswers] = useState(() => {
    const storedAnswers = localStorage.getItem("selectedAnswers");
    return storedAnswers ? JSON.parse(storedAnswers) : {};
  });

  // Function to handle selection of answer
  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answer,
    }));
  };

  // Store selected answers in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
  }, [selectedAnswers]);

  // Function to handle submission of answer
  const handleSubmitAnswer = () => {
    dispatch({
      type: "SUBMIT_ANSWER",
      payload: {
        questionIndex: currentQuestionIndex,
        answer: selectedAnswers[currentQuestionIndex],
      },
    });
  };

  if (state.isLoading) {
    return <div>Loading...</div>;
  }

  if (!state.questions || state.questions.length === 0) {
    return <div>No questions found</div>;
  }

  return (
    <PrimaryLayout>
      <div className="w-full h-screen flex">
        <QuestionList />
        <div className="lg:w-[78%] w-full flex flex-col px-10">
          <Question
            question={currentQuestion.question}
            image={currentQuestion.image}
            index={currentQuestionIndex}
          />
          <h4>Answers:</h4>
          <AnswerSegment
            options={currentQuestion.options}
            selectedOption={selectedAnswers[currentQuestionIndex]}
            onSelect={handleSelectAnswer}
          />
          <ButtonContainer
            onSubmit={handleSubmitAnswer}
            onPrevious={() => {
              if (currentQuestionIndex > 0) {
                dispatch({ type: "PREVIOUS_QUESTION" });
              }
            }}
            onNext={() => dispatch({ type: "NEXT_QUESTION" })}
          />
        </div>
      </div>
    </PrimaryLayout>
  );
}

export default QuestionPage;
