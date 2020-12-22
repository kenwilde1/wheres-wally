import firebase from "./Firebase";
import { useState } from "react";

const HighScoreForm = ({ score, toggleForm }) => {
  const [name, setName] = useState();

  const updateName = (e) => {
    setName(e.target.value);
  };

  const addScore = (e) => {
    e.preventDefault();

    const db = firebase.firestore();

    db.collection("high-scores").add({
      name: name,
      score: score,
    });

    setName("");
  };

  return (
    <div className="high-score-form">
      <h4> Congratulations! Submit your score</h4>
      <form onSubmit={addScore}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateName}
          value={name}
        />
        <p>Score: {score} seconds(s)</p>
        <div className="form-buttons">
          <button type="submit" onClick={toggleForm}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HighScoreForm;
