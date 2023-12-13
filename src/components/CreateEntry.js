import { useState } from 'react';

function CreateEntry() {
    const [text, setText] = useState("");
    const [priority, setPriority] = useState(0);
    const [listNum, setListNum] = useState(0);

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
            body: JSON.stringify(
                {
                    text: text,
                    priority: priority,
                    list_id: listNum 
                }
            ),
        }).then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                setText("");
            })
                .catch(error => console.error(error));
    }

    return (
        <>
            <input 
                className="entry-add-input"
                placeholder="Add a task here"
                type="text"
                value={text}
                onChange={saveText}
            ></input>
            <input 
                className="entry-add-input"
                placeholder="Priority"
                type="number"
                value={priority}
                onChange={savePriority}
            ></input>
            <input 
                className="entry-add-input"
                placeholder="List number"
                type="number"
                value={listNum}
                onChange={saveListNum}
            ></input>
            <button onClick={handleCreateEntry}>Create Entry</button>
        </>
    );
}

export default CreateEntry;