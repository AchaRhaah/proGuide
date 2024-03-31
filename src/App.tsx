import { Outlet, createBrowserRouter } from "react-router-dom";
import { QuestionPage } from "./components/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <QuestionPage />,
  },
]);
function App() {
  return (
    <div className="h-screen w-screen">
      <Outlet />
    </div>
  );
}

export default App;
