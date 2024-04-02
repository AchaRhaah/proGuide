import React, { createContext, useContext, useEffect, useReducer } from "react";

// Define the action type
type AnswerAction = {
  type: "SELECT_ANSWER";
  questionId: string;
  answer: string;
};

// Define your context
const AnswerContext = createContext<{
  answers: Record<string, string>;
  dispatch: React.Dispatch<AnswerAction>;
}>({
  answers: {},
  dispatch: () => {},
});

// Define your reducer
const answerReducer = (state: Record<string, string>, action: AnswerAction) => {
  switch (action.type) {
    case "SELECT_ANSWER":
      return { ...state, [action.questionId]: action.answer };
    default:
      return state;
  }
};

// Custom hook to use the context
const useAnswerContext = () => {
  const context = useContext(AnswerContext);
  if (!context) {
    throw new Error("useAnswerContext must be used within an AnswerProvider");
  }
  return context;
};

// Provider component
const AnswerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [answers, dispatch] = useReducer(answerReducer, {});

  // Load previously saved answers from localStorage on component mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem("answers");
    if (savedAnswers) {
      dispatch({ type: "LOAD_ANSWERS", answers: JSON.parse(savedAnswers) });
    }
  }, []);

  // Save selected answer to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [answers]);

  return (
    <AnswerContext.Provider value={{ answers, dispatch }}>
      {children}
    </AnswerContext.Provider>
  );
};

export { AnswerProvider, useAnswerContext };
