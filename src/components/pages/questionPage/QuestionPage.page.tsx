import { useState, useEffect } from "react";
import { PrimaryLayout, QuestionList } from "../../templates";
import { Question, ProgressBar } from "../../atoms";
import { AnswerSegment } from "../../organisms";
import { ButtonContainer } from "../../molecules";
import { useQuestionContext } from "../../../context/QuestionContext";
import { useNavigate } from "react-router-dom";

function QuestionPage() {
  const { state, dispatch }: any = useQuestionContext(); // Specify the type of context
  const { questions, currentQuestionIndex } = state;
  const currentQuestion = questions[currentQuestionIndex];
  const navigate = useNavigate();

  // Initialize state to store selected answers, defaulting to values from local storage
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>(() => {
    const storedAnswers = localStorage.getItem("selectedAnswers");
    return storedAnswers ? JSON.parse(storedAnswers) : {};
  });

  useEffect(() => {
    const storedAnswers = localStorage.getItem("selectedAnswers");

    if (storedAnswers) {
      const parsedAnswers: { [key: number]: string } =
        JSON.parse(storedAnswers) || {}; // Handle null case
      setSelectedAnswers(parsedAnswers);
    }
  }, []); // Empty dependency array to run only once on component mount

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
    navigate("/answers");
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
            onSelect={(answer: string) => {
              setSelectedAnswers((prevAnswers: { [key: number]: string }) => ({
                ...prevAnswers,
                [currentQuestionIndex]: answer,
              }));
            }}
          />
          <ButtonContainer
            onSubmit={handleSubmitAnswer}
            onPrevious={() => {
              if (currentQuestionIndex > 0) {
                dispatch({ type: "PREVIOUS_QUESTION" });
              }
            }}
            onNext={() => {
              if (currentQuestionIndex < 39) {
                dispatch({ type: "NEXT_QUESTION" });
              }
            }}
          />
          <div className="w-full self-end mt-24 lg:hidden">
            <ProgressBar
              answeredQuestions={Object.keys(selectedAnswers).length}
            />
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
}

export default QuestionPage;
