import { useNavigate } from "react-router-dom";

const PreTestPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4">Pre-Test Information</h2>
        <p className="text-lg mb-4">
          Welcome to the test! Before you begin, please take note of the
          following:
        </p>
        <ul className="text-left mb-4">
          <li className="mb-2">Ensure you are in a quiet environment.</li>
          <li className="mb-2">
            Keep all necessary materials such as pens, papers, or calculators
            ready.
          </li>
          <li className="mb-2">Do not use any external aids or resources.</li>
          <li className="mb-2">Read each question carefully.</li>
          <li className="mb-2">Manage your time wisely.</li>
          <li className="mb-2">Double-check your answers if time allows.</li>
        </ul>
        <button
          onClick={() => navigate("/test")}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Start Test
        </button>
      </div>
    </div>
  );
};

export default PreTestPage;
