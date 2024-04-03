import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import questionsData from "../lib/questionBank/QuestionBank.json";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuestionState {
  questions: Question[];
  currentQuestionIndex: number;
  isLoading: boolean; // Added loading state
}

type QuestionAction =
  | { type: "NEXT_QUESTION" }
  | { type: "PREVIOUS_QUESTION" }
  | { type: "LOAD_QUESTIONS"; payload: Question[] };

// export const QuestionContext = createContext<QuestionContextType | undefined>(
//   undefined
// );
export const QuestionContext = createContext({});

export const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    console.error(
      "QuestionContext not found. Ensure you're using it within QuestionProvider."
    );
    return { state: initialState, dispatch: () => {} }; // Provide a default value
  }
  return context;
};

const initialState: QuestionState = {
  questions: [],
  currentQuestionIndex: 0,
  isLoading: true, // Added loading state
};

const reducer = (
  state: QuestionState,
  action: QuestionAction
): QuestionState => {
  switch (action.type) {
    case "NEXT_QUESTION":
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case "PREVIOUS_QUESTION":
      return { ...state, currentQuestionIndex: state.currentQuestionIndex - 1 };
    case "LOAD_QUESTIONS":
      return { ...state, questions: action.payload, isLoading: false }; // Update loading state
    default:
      return state;
  }
};

export const QuestionProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Check if questionsData is an object
    if (typeof questionsData === "object" && questionsData !== null) {
      // Extract values from the object (arrays of questions)
      const processedQuestionsData: Question[][] = Object.values(questionsData);

      // Flatten the array of arrays into a single array of questions
      const flattenedQuestionsData: Question[] = processedQuestionsData.flat();

      // Dispatch the action to load questions
      dispatch({ type: "LOAD_QUESTIONS", payload: flattenedQuestionsData });
    } else {
      console.error("Invalid questions data format");
    }
  }, []);

  return (
    <QuestionContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
};
