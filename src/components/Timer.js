import { useState, useEffect } from "react";
import HighScoreForm from "./HighScoreForm";

const Timer = ({ isGameOver }) => {
  const [time, setTime] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [formStatus, setFormStatus] = useState(false);

  const toggleForm = () => {
    setFormStatus((formStatus) => !formStatus);
  };

  useEffect(() => {
    let interval;
    !isGameOver
      ? (interval = setInterval(() => {
          setTime((time) => time + 1);
          setHighScore((score) => score + 1);
        }, 1000))
      : clearInterval(interval);
    setTime(0);

    return () => {
      toggleForm();
      clearInterval(interval);
    };
  }, [isGameOver]);

  return (
    <div className="timer">
      <div className="timer-text">{time} seconds.</div>
      {isGameOver && formStatus ? (
        <HighScoreForm score={highScore} toggleForm={toggleForm} />
      ) : (
        console.log(true)
      )}
    </div>
  );
};
export default Timer;
