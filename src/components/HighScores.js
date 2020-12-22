import firebase from "./Firebase";
import { useEffect, useState } from "react";

const HighScores = ({ toggleScores }) => {
  const [highScores, setHighScores] = useState([]);
  const db = firebase.firestore();

  const getScores = () => {
    const highScoreRef = db.collection("high-scores");
    highScoreRef.get().then((querySnapshot) => {
      querySnapshot.forEach((userDoc) => {
        setHighScores((prevArray) => [...prevArray, userDoc.data()]);
      });
    });
  };

  useEffect(() => {
    getScores();
  }, []);

  useEffect(() => {
    console.log(highScores);
  }, [highScores]);

  return (
    <div className="high-scores">
      <div className="exit-button">
        <button onClick={toggleScores}>
          <i class="fa fa-times"></i>
        </button>
      </div>
      <table>
        <tr>
          <th>
            <strong>Name</strong>
          </th>
          <th>
            <strong>Score</strong>
          </th>
        </tr>
      </table>
      <div className="data">
        <ol className="name-list">
          {highScores
            .sort((a, b) => (a.score > b.score ? 1 : -1))
            .map((score) => (
              <li>
                <p>{score.name}</p>
              </li>
            ))}
        </ol>
        <ul className="score-list">
          {highScores
            .sort((a, b) => (a.score > b.score ? 1 : -1))
            .map((score) => (
              <li>
                <p>{score.score}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default HighScores;
