//new
import React, { useEffect, useState } from "react";

//import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../app/listSlice";
import CreateEntry from "../components/CreateEntry";

function List() {
  const dispatch = useDispatch();
  const currList = useSelector((state) => state.list.data); // returns current list object json
  const currListId = 1; // this is only temporary, replace this once set current get and update current list are implemented in frontend

  async function updateListSlice() {
    // updates the data in redux by fetching from the database.
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    //old
    //fetch("http://localhost:3001/getList/" + currListId, requestOptions)
    //.then((response) => response.json())
    //  .then((resJson) => dispatch(setData(resJson)))
    //    .catch((error) => console.log("error", error));

    //new
      fetch("http://localhost:3001/getList/" + filteredListId, requestOptions)
          .then((response) => response.json())
          .then((resJson) => dispatch(setData(resJson)))
          .catch((error) => console.log("error", error));

  }

    //new
    const [filteredListId, setFilteredListId] = useState(null);


    //new
    useEffect(() => {
        const fetchData = async () => {
            let entries = [];

            // Fetch data based on the filteredListId
            const listResponse = await fetch(`http://localhost:3001/getList/${filteredListId}`);
            const listData = await listResponse.json();
            entries = listData.entries || [];

            // Dispatch the entries to Redux store
            dispatch(setData({ entries }));
        };

        fetchData().catch((error) => console.error("Error fetching data:", error));
    }, [filteredListId]);



    useEffect(() => {
        updateListSlice();
  }, []);

    console.log("currlist:", currList); // Log the current state

    //new
    console.log("Filter value:", filteredListId); // Log the filtered list ID

    //new
    console.log("Filtered entries:", currList?.entries.filter((entry) => entry.list_id === filteredListId)); // Log the filtered entries

  console.log("currlist:");
  console.log(currList);

    //new updated
    return (
        <>
            {/* Input for filtering */}
            <label htmlFor="filterListId">Filter by List ID: </label>
            <input
                type="number"
                placeholder="Enter List ID"
                value={filteredListId || ""}
                onChange={(e) => setFilteredListId(e.target.value)}
            />

            {/* Component for creating new entries */}
            <CreateEntry updateListSlice={updateListSlice} />

            {/* Displaying the list content */}
            <div className="list-content">
                {currList !== null ? (
                    currList.entries
                        .filter((entry) => (
                            filteredListId === null || filteredListId === 0 ? true : entry.list_id == filteredListId
                        ))
                        .map((elem, indx) => (
                            <div key={indx} className="list-entry">
                                {elem.text}
                            </div>
                        ))
                ) : (
                    <div>List is null</div>
                )}
            </div>
        </>
    );
}

export default List;
