import React, { useState } from "react";
import { ProgressBar } from "../../atoms";
import questionsData from "../../../lib/questionBank/QuestionBank.json";

function QuestionList() {
  const categoriesName = Object.keys(questionsData);

  const [selectedCategory, setSelectedCategory] = useState(categoriesName[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="h-full w-[22%] top-0 left-0 z-10 bg-white overflow-y-auto border-r-2 border-gray-100 px-8 border hidden lg:flex flex-col ">
      <div className="h-full  w-full flex flex-col items-center px-6">
        <h1 className="text-xl font-semibold my-2">Categories</h1>
        <p className="text-sm my-2">
          This test contains the following categories
        </p>
        <ul className="gap-1 flex flex-col mt-6 text-primary font-medium">
          {categoriesName.map((category, index) => (
            <li
              key={index}
              className={`py-2 px-1 rounded-lg ${
                selectedCategory === category ? "bg-[#f0f4ff]" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <ProgressBar />
      </div>
    </div>
  );
}

export default QuestionList;
