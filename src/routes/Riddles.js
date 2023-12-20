import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Riddles() {
  const [riddleData, setRiddleData] = useState(null);
  const [shownAnswer, setShowAnswer] = useState(false);
  const [riddle, setRiddle] = useState(null);
  const [riddleAnswer, setRiddleAnswer] = useState(null);

  const riddle_endpoint = "https://riddles-api.vercel.app/random";

  function getRiddle() {
    fetch(riddle_endpoint)
      .then((response) => response.json())
      .then((jsonData) => handleCreateRiddle(jsonData))
      .catch((error) => console.error(error));
  }

  function handleCreateRiddle(riddle) {
    setRiddleData(riddle);
    setRiddle(riddle.riddle);
    setRiddleAnswer(riddle.answer);
    if (riddle !== null) {
      console.log(riddle);
    }
  }

  function showAnswerNow() {
    setShowAnswer(!shownAnswer);
  }

  return (
    <div>
      <div className="sidebar">
        <Link to="/">
          <h2>Go to Todo</h2>
        </Link>
      </div>

      <div className="Riddles">
        <h1>Want to solve a riddle?</h1>
        <button
          className="interactable riddle-button"
          onClick={() => getRiddle()}
        >
          Get Riddle
        </button>

        <div className="riddle-content riddle-question">{riddleData ? riddle : ""}</div>

        <div>
          {riddleData ? (
            <button
              className="interactable riddle-button"
              onClick={() => showAnswerNow()}
            >
              {shownAnswer ? "Hide answer" : "Show answer"}
            </button>
          ) : (
            ""
          )}
        </div>
        
        <div className="interactable riddle-content">
          {riddleData && shownAnswer ? riddleAnswer : ""}
        </div>

      </div>
    </div>
  );
}

export default Riddles;
