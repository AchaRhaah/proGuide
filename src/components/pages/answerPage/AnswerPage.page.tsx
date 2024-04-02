import React, { useEffect, useState } from "react";
import compareAnswers from "../../../lib/functions/compareAnswers";
import { useQuestionContext } from "../../../context/QuestionContext";
import { PrimaryLayout } from "../../templates";
function AnswerPage() {
  const { state } = useQuestionContext();
  const { questions } = state;
  //   console.log(questions);
  const [answers, setAnswers] = useState();
  useEffect(() => {
    const storedAnswers = localStorage.getItem("selectedAnswers");
    setAnswers(JSON.parse(storedAnswers));
  }, []);
  console.log(compareAnswers(answers, questions));
  return (
    <PrimaryLayout>
      <h2 className="font-bold">Score</h2>
    </PrimaryLayout>
  );
}

export default AnswerPage;
