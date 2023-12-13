import { useState } from 'react';

function CreateEntry() {
    const [text, setText] = useState("");
    const endpoint = "http://localhost:3001/createEntry";

    function makeText(e) {
        setText(e.target.value);
        //console.log(text);
    }

    async function handleCreateEntry() {
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({text}),
        }).then(response => response.json())
            .then(jsonData => console.log(jsonData))
                .catch(error => console.error(error));
    }

    return (
        <>
            <input value={text} onChange={makeText} required></input>
            <button onClick={handleCreateEntry}>Create entry</button>
        </>
    );
}

export default CreateEntry;