import { useState } from "react";
import BoredTodo from "./BoredTodo";

function CreateEntry({ updateListSlice }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState(null);
  const [listNum, setListNum] = useState(null);

  const endpoint = "http://localhost:3001/createEntry";

  function saveText(e) {
    setText(e.target.value);
  }

  function savePriority(e) {
    setPriority(e.target.value);
  }

  function saveListNum(e) {
    setListNum(e.target.value);
  }

  console.log("here is the type");
  console.log(typeof updateListSlice);

  async function handleCreateEntry() {
    if (text.trim() === "") {
      alert("Enter a task!");
      return;
    }

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        priority: Number(priority == null ? 0 : priority),
        list_id: Number(listNum == null ? 1 : listNum),
      }),
    })
      .then((response) => console.log(response.status))
      .then(setText(""))
      .catch((error) => console.error(error));

    updateListSlice();
  }

  function handleCreateBoredEntry(activity) {
    setText(activity);
    setPriority(Number(priority == null ? 0 : priority));
    setListNum(Number(listNum === null ? 1 : listNum));
  }

  return (
    <div className="entry-add-input">
      <BoredTodo handleCreateBoredEntry={handleCreateBoredEntry} />

      <div className="input-field">
        <input
          className="entry-taskname-input"
          placeholder="Add a task here"
          type="text"
          value={text}
          onChange={saveText}
        ></input>
      </div>

      <div className="input-field">
        <input
          className="entry-priority-input"
          placeholder="Priority"
          type="number"
          value={priority}
          onChange={savePriority}
        ></input>
      </div>

      <div className="input-field">
        <input
          className="entry-listid-input"
          placeholder="List number"
          type="number"
          value={listNum}
          onChange={saveListNum}
        ></input>
      </div>
      <button onClick={handleCreateEntry}>Create!</button>
    </div>
  );
}

export default CreateEntry;
