import { useState } from "react";
import Button from "./Button";
export default function FormScores({ selectedPlayer, onChangeScore }) {
  const [score, setScore] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!score) return;
    onChangeScore(score);
    setScore("");
  }
  return (
    <form className="form-scores" onSubmit={handleSubmit}>
      <h2>
        manage score for {selectedPlayer?.name} ({selectedPlayer.score})
      </h2>
      <label>💯 Score </label>
      <input
        type="text"
        value={score}
        onChange={(e) => +e.target.value >= 0 && setScore(+e.target.value)}
      />
      <span
        className="minus-points btn"
        onClick={() => onChangeScore(10, true)}
      >
        - 10 points
      </span>
      <Button>Add Score</Button>
    </form>
  );
}
