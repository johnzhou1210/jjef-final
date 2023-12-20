function RiddlesTodo ({handleCreateRiddleEntry}) {
    const riddles_endpoint = "https://riddles-api.vercel.app/random";

    function handleGetRiddle() {
        fetch(riddles_endpoint)
            .then(response => response.json())
                .then(jsonData =>  handleCreateRiddleEntry(jsonData))
                    .catch(error => console.error(error));

    }

    return (
        <>
            <button className="interactable" onClick={() => handleGetRiddle()}>
                Add a riddle to solve 
            </button>
        </>
    );
}

export default RiddlesTodo;