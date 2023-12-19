import { useState } from 'react';

function Riddles() {
const [riddleData, setRiddleData] = useState(null);
const [shownAnswer, setShowAnswer] = useState(false);
const [riddle, setRiddle] = useState(null);
const [riddleAnswer, setRiddleAnswer] = useState(null);

const riddle_endpoint = "https://riddles-api.vercel.app/random";

function getRiddle() {
    fetch(riddle_endpoint)
            .then(response => response.json())
                .then(jsonData =>  handleCreateRiddle(jsonData))
                    .catch(error => console.error(error));
}

function handleCreateRiddle(riddle) {
    setRiddleData(riddle);
    setRiddle(riddle.riddle);
    setRiddleAnswer(riddle.answer);
    if (riddle !== null){
        console.log(riddle);
    }
  }

function showAnswerNow() {
    setShowAnswer(!shownAnswer);
}

return (
    <>
        <p>Want to solve a riddle</p>
        <button onClick={() => getRiddle()}>Get Riddle</button>
        {riddleData ? riddle : "No riddle yet"}
        {riddleData ? <button onClick={() => showAnswerNow()}>show answer</button> : "No answer yet"}
        {riddleData && shownAnswer ? riddleAnswer : ""}
    </>
);
}

export default Riddles;