import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../app/listSlice";

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

  const dispatch = useDispatch();
  const update_endpoint = "http://localhost:3001/updateEntry/";

  const delete_endpoint = "http://localhost:3001/deleteEntry/";

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

  function deleteEntry() {
    fetch(delete_endpoint + currentEntryId, {
      method: "DELETE",
    })
      .then((response) => console.log("Deleted entry: " + entryText))
      .catch((error) => console.error(error));
    dispatch(setData(null)); // needed or else there is this really weird bug
    updateListSlice();
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
            <div className="checkbox interactable">{!entryCompleted ? "☐" : "☑"}</div>
          </button>
          <div
            className={
              entryCompleted ? "strikethrough entry-text" : "entry-text"
            }
          >
            {edit ? (
              <p>
                <input
                  className="entry-text"
                  value={entryText}
                  onChange={modifyEntryText}
                />
              </p>
            ) : (
              <p>{entryText}</p>
            )}
          </div>
          <div className="entry-buttons">
            <button className="list-entry-button interactable" onClick={() => editEntry()}>
              {edit ? "OK" : "Edit"}
            </button>
            <button className="list-entry-button interactable" onClick={() => deleteEntry()}>
            ❌
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Entry;
