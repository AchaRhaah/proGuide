import React, { useEffect, useState } from "react";
import compareAnswers from "../../../lib/functions/compareAnswers";
import { useQuestionContext } from "../../../context/QuestionContext";
import { AnswerCard } from "../../molecules";
import { PrimaryLayout } from "../../templates";

function AnswerPage() {
  const { state } = useQuestionContext();
  const { questions } = state;
  const [answers, setAnswers] = useState();
  const [answerAnalysis, setAnswerAnalysis] = useState(null); // Initialize answerAnalysis state as null

  useEffect(() => {
    const storedAnswers = localStorage.getItem("selectedAnswers");
    const parsedAnswers = JSON.parse(storedAnswers);
    setAnswers(parsedAnswers);
    if (parsedAnswers) {
      const analysis = compareAnswers(parsedAnswers, questions);
      setAnswerAnalysis(analysis);
    }
  }, [questions]);

  // Check if answerAnalysis is still null or undefined
  if (!answerAnalysis) {
    return <div>Loading...</div>;
  }

  // Check if answerComparisons is still undefined
  if (!answerAnalysis.answerComparisons) {
    return <div>No answer comparisons found</div>;
  }

  if (!state.questions || state.questions.length === 0) {
    return <div>No questions found</div>;
  }

  return (
    <PrimaryLayout>
      <div className="w-full px-8 ">
        <p className="font-medium text-lg flex  justify-center py-6">
          40 mcq &#8226; attempted {answerAnalysis.totalAnsweredQuestions}{" "}
          &#8226; {answerAnalysis.correctCount} correct
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 pb-2">
          {answerAnalysis.answerComparisons.map((answer, index) => (
            <AnswerCard
              key={index} // Add key prop when mapping over components
              questionNumber={answer.questionIndex + 1}
              question={answer.question}
              correctAnswer={answer.correctAnswer}
              userAnswer={answer.userAnswerOptionIndex}
              isCorrect={answer.isCorrect}
              explanation={answer.explanation}
              correctAnswerOptionIndex={answer.correctAnswerOptionIndex}
            />
          ))}
        </div>
      </div>
    </PrimaryLayout>
  );
}

export default AnswerPage;
