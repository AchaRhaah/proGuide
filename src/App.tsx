import { Outlet, createBrowserRouter } from "react-router-dom";
import {
  QuestionPage,
  AnswerPage,
  RegisterPage,
  PreTestPage,
} from "./components/pages";
import { QuestionProvider } from "./context/QuestionContext";
import { AnswerProvider } from "./context/AnswerContext";
import { MathJaxContext } from "better-react-mathjax";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MathJaxContext>
        <AnswerProvider>
          <QuestionProvider>
            <QuestionPage />
          </QuestionProvider>
        </AnswerProvider>
      </MathJaxContext>
    ),
  },
  {
    path: "/answers",
    element: (
      <MathJaxContext>
        <AnswerProvider>
          <QuestionProvider>
            <AnswerPage />
          </QuestionProvider>
        </AnswerProvider>
      </MathJaxContext>
    ),
  },
  { path: "/register", element: <RegisterPage /> },
  { path: "/pretest", element: <PreTestPage /> },
]);
function App() {
  return (
    <div className="h-screen w-screen">
      <Outlet />
    </div>
  );
}

export default App;
