import React from "react";
import { PrimaryLayout, QuestionList } from "../../templates";
import { Question, ProgressBar } from "../../atoms";
import { AnswerSegment } from "../../organisms";
import { ButtonContainer } from "../../molecules";
function QuestionPage() {
  // { children }: { children: React.ReactNode }
  return (
    <PrimaryLayout>
      <div className="w-full h-screen flex ">
        <QuestionList />
        <div className="lg:w-[78%] w-full flex flex-col px-10">
          <Question />
          <AnswerSegment />
          <ButtonContainer />
          <ProgressBar />
        </div>
      </div>
    </PrimaryLayout>
  );
}

export default QuestionPage;
