import React, { createContext, useContext, useEffect, useReducer } from "react";

// Define your context
const AnswerContext = createContext({});

// Define your reducer
const answerReducer = (state, action) => {
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
const AnswerProvider = ({ children }: { children: React.ReactNode }) => {
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
