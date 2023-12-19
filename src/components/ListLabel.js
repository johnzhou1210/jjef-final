import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveListId, setData } from "../app/listSlice";
function ListLabel({ list_id }) {
  const currList = useSelector((state) => state.list.data); // returns current list object json
  const currActiveListId = useSelector((state) => state.list.activeListId);
  const dispatch = useDispatch();

  async function updateListSlice() {
    // updates the data in redux by fetching from the database.
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    console.log("in here");
    console.log(list_id);

    fetch("http://localhost:3001/getList/" + list_id, requestOptions)
      .then((response) => response.json())
      .then((resJson) => dispatch(setData(resJson)))
      .catch((error) => console.log("error", error));
  }

  async function switchActiveList() {
    const endpoint = "http://localhost:3001/updateCurrentList/";

    fetch(endpoint + list_id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => console.log(response.status))
      .catch((error) => console.error(error));
    dispatch(setData(null)); // needed or else there is this really weird bug
    dispatch(setActiveListId(list_id));
    updateListSlice();
  }

  useEffect(() => {
    if (Number.isInteger(currActiveListId)) {
      updateListSlice();

    }
  }, []);

  return (
    <div className="list-selection" onClick={switchActiveList}>
      List {list_id}
    </div>
  );
}

export default ListLabel;
