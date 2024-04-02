import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Timer: React.FC = () => {
  const duration: number = 180; // 3 minutes in seconds
  const [timeLeft, setTimeLeft] = useState<number>(duration);
  const [isRunning, setIsRunning] = useState<boolean>(true); // Timer starts running when component mounts
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            // Redirect to /answers page when time is up
            navigate("/answers");
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, history]);

  return (
    <div className="">
      <h1
        className={`text-green-500 font-medium border border-green-500 rounded-sm p-2 px-4 ${
          timeLeft <= 60 && "text-red-500 border-red-500"
        }`}
      >
        {Math.floor(timeLeft / 60)}:
        {(timeLeft % 60).toString().padStart(2, "0")}
      </h1>
    </div>
  );
};

export default Timer;
