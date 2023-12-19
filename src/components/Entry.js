import { useState, useEffect } from "react";

function Entry({
  completed,
  text,
  priority,
  color,
  list_id,
  date_created,
  entry_id,
  updateListSlice,
}) {
  const [entryCompleted, setEntryCompleted] = useState(completed);
  const [entryText, setEntryText] = useState(text);
  const [currentEntryId, setCurrentEntryId] = useState(entry_id);
  const [edit, setEdit] = useState(false);
  const [prevEntry, setPrevEntry] = useState("");

  const update_endpoint = "http://localhost:3001/updateEntry/";

  function updateEntryComplete() {
    fetch(update_endpoint + currentEntryId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !entryCompleted,
      }),
    })
      .then((response) => console.log("Edited entry: " + response.status))
      .then(setEntryCompleted(!entryCompleted))
      .catch((error) => console.error(error));
  }

  function checkCompletedEntry() {
    updateEntryComplete();
  }

  function updateEntryText() {
    fetch(update_endpoint + currentEntryId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: entryText,
      }),
    })
      .then((response) => console.log("Edited entry: " + response.status))
      .catch((error) => console.error(error));
  }

  function modifyEntryText(e) {
    setEntryText(e.target.value);
  }

  function editEntry() {
    setPrevEntry(entryText);
    setEdit(!edit);
    if (entryText.trim() !== prevEntry.trim()) {
      updateEntryText();
    }
  }

  useEffect(() => {
    if (Number.isInteger(list_id)) {
      updateListSlice();
    }
  }, []);

  return (
    <div className="list-entry">
      {currentEntryId === null ||
      entryCompleted === null ||
      entryText === null ? (
        "Loading..."
      ) : (
        <>
          <button onClick={() => checkCompletedEntry()}>
            <div className="checkbox">{!entryCompleted ? "☐" : "☑"}</div>
          </button>
          <div
            className={
              entryCompleted ? "strikethrough entry-text" : "entry-text"
            }
          >
            {edit ? <input value={entryText} onChange={modifyEntryText}></input>: <p>{entryText}</p>}
          </div>
          <button onClick={() => editEntry()}>edit</button>
        </>
      )}
    </div>
  );
}

export default Entry;
