import React, { useEffect, useState } from "react";
import compareAnswers, {
  ComparisonResult,
} from "../../../lib/functions/compareAnswers";
import { useQuestionContext } from "../../../context/QuestionContext";
import { AnswerCard } from "../../molecules";
import { PrimaryLayout } from "../../templates";

function AnswerPage() {
  const { state }: any = useQuestionContext();
  const { questions } = state;
  const [answerAnalysis, setAnswerAnalysis] = useState<ComparisonResult | null>(
    null
  );

  useEffect(() => {
    const storedAnswers = localStorage.getItem("selectedAnswers");

    if (storedAnswers && questions) {
      const parsedAnswers = JSON.parse(storedAnswers);
      const analysis = compareAnswers(parsedAnswers, questions);
      setAnswerAnalysis(analysis);
    }
  }, [questions]);

  if (!answerAnalysis) {
    return <div>Loading...</div>;
  }

  if (!answerAnalysis.answerComparisons) {
    return <div>No answer comparisons found</div>;
  }

  if (!questions || questions.length === 0) {
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
          {answerAnalysis.answerComparisons.map((answer: any, index: any) => (
            <AnswerCard
              key={index}
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
