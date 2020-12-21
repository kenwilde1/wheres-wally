import { useState } from "react";

const Header = (props) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [time, setTime] = useState(0);

  const { chars, hasWon } = props;

  const timer = () => {
    setTime(time + 1);
  };

  const toggleTimer = () => {
    setTimerStarted((currentTimer) => !currentTimer);
    setInterval(timer, 1000);
  };

  const renderStartButton = () => {
    return (
      <button className="start-button" onClick={toggleTimer}>
        Start
      </button>
    );
  };

  const renderTimer = () => {
    return <div className="timer">{time} seconds</div>;
  };

  return (
    <div className="header-container">
      <div className="heading">
        <h1>Where's Wally?</h1>
      </div>
      <div className="interact">
        {timerStarted ? renderTimer() : renderStartButton()}
      </div>
      <div className="more-info">
        <ul>
          {chars.map((char) => (
            <li>{char}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Header;
