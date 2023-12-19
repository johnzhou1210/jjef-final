import { useState } from 'react';

function Entry({ completed, text, priority, color, list_id, date_created, entry_id }) {
    const [entryCompleted, setEntryCompleted] = useState(completed);
    const [entryText, setEntryText] = useState(text);
    const [currentEntryId, setCurrentEntryId] = useState(entry_id);

    const update_endpoint = "http://localhost:3001/updateEntry/";

    function updateEntryComplete() {
        fetch(update_endpoint + currentEntryId, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              completed: entryCompleted,
            }),
          })
            .then((response) => console.log("Edited entry: " + response.status))
            .catch((error) => console.error(error));
    }

    function checkCompletedEntry() {
        setEntryCompleted(!entryCompleted);
        updateEntryComplete();
    }

    return (
        <>
            {currentEntryId === null || entryCompleted === null || entryText === null ? "Loading..." : 
                <>
                    <button onClick={() => checkCompletedEntry()}>{!entryCompleted ? "o" : "x"}</button>
                    <p>{entryText}</p>
                </>
            }
        </>
    );
}

export default Entry;