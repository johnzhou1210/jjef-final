import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveListId, setData, setUserLists } from "../app/listSlice";

function CreateList({ updateMyLists, updateListSlice }) {
  const [lists, setLists] = useState([]);
  const dispatch = useDispatch();
  const userLists = useSelector((state) => state.list.userLists);
  const currActiveListId = useSelector((state) => state.list.activeListId);
  const endpoint = "http://localhost:3001/createList";

  async function handleCreateList() {
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => console.log(response.status))
      .catch((error) => console.error(error));

    // dispatch(setData());
    updateMyLists();

    // switch current list to this list
    // dispatch(setActiveListId(userLists.length + 1));
  }


  return (
    <div>
      <button className="sidebar-button-large" onClick={handleCreateList}>
        Create List
      </button>
    </div>
  );
}

export default CreateList;
