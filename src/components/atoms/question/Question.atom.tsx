import { MathJax } from "better-react-mathjax";
import React from "react";
import { Timer } from "..";
function Question({
  question,
  image,
  index,
}: {
  question: string;
  image: string;
  index: number;
}) {
  return (
    <div className="w-full py-6 flex justify-between">
      <div>
        <h3 className=" font-medium text-sm text-[#133466] ">
          Q {index + 1}. <MathJax>{question}</MathJax>
        </h3>
        {image !== "" && <img src={image} alt={question} />}
      </div>
      <Timer />
      {/* <div>
        <p className="t text-green-500 font-medium border border-green-500 rounded-sm p-2 px-4">
          5:30
        </p>
      </div> */}
      {/* <hr className="mt-8" /> */}
    </div>
  );
}

export default Question;
