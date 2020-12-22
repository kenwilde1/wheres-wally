import { useState } from "react";
import Timer from "./Timer";
import MoreInfo from "./MoreInfo";
import HighScores from "./HighScores";

const Header = ({ chars, isGameOver }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [moreClicked, setMoreClicked] = useState(false);
  const [scoresClicked, setScoresClicked] = useState(false);

  const toggleTimer = () => {
    setTimerStarted((currentTimer) => !currentTimer);
  };

  const toggleMore = () => {
    setMoreClicked((moreClicked) => !moreClicked);
  };

  const toggleScores = () => {
    setScoresClicked((scoresClicked) => !scoresClicked);
  };

  const renderStartButton = () => {
    return (
      <button className="start-button" onClick={toggleTimer}>
        Start
      </button>
    );
  };

  const renderMoreInfo = () => {
    return <button onClick={toggleMore}>Track Characters..</button>;
  };

  return (
    <div className="header-container">
      <div className="heading">
        <h1>Where's Wally?</h1>
      </div>
      <div className="interact">
        {timerStarted ? <Timer isGameOver={isGameOver} /> : renderStartButton()}
        <button onClick={toggleScores}>High Scores</button>
        {scoresClicked ? (
          <HighScores toggleScores={toggleScores} />
        ) : (
          console.log(true)
        )}
      </div>
      <div className="more-info-container">
        {moreClicked ? (
          <MoreInfo chars={chars} toggleMore={toggleMore} />
        ) : (
          renderMoreInfo()
        )}
      </div>
    </div>
  );
};
export default Header;
