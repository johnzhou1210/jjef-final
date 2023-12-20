function BoredTodo({ handleCreateBoredEntry }) {

    // a random activity will be returned
    const bored_endpoint = "https://www.boredapi.com/api/activity/";

    function handleGetBoredActivity() {
        fetch(bored_endpoint)
            .then(response => response.json())
                .then(jsonData =>  handleCreateBoredEntry(jsonData.activity))
                    .catch(error => console.error(error));
    }

    return (
        <>
            <button className="interactable" onClick={() => handleGetBoredActivity()}>
                Add a random activity to your list
            </button>
        </>
    );
}

export default BoredTodo;
