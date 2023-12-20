function RiddlesTodo({ handleCreateRiddleEntry }) {
  const riddles_endpoint = "https://riddles-api.vercel.app/random";

  function handleGetRiddle() {
    fetch(riddles_endpoint)
      .then((response) => response.json())
      .then((jsonData) =>
        handleCreateRiddleEntry(
          jsonData.riddle.substring(0, 100) +
            (jsonData.riddle.length >= 100 ? "..." : "")
        )
      )
      .catch((error) => console.error(error));
  }

  async function handleGetRiddle() {
    try {
      let response = await fetch(riddles_endpoint);
      let jsonData = await response.json();
      let riddle = jsonData.riddle;
      // Call handleCreateRiddleEntry with the shortened riddle
      while (riddle.length > 120) {
        response = await fetch(riddles_endpoint);
        jsonData = await response.json();
        riddle = jsonData.riddle;
      }
      handleCreateRiddleEntry(riddle);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error(error);
    }
  }

  return (
    <>
      <button className="interactable" onClick={() => handleGetRiddle()}>
        Feeling smart?
      </button>
    </>
  );
}

export default RiddlesTodo;
