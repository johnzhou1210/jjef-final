import React, { useEffect } from "react";
import "../App.css";
import Sidebar from "./Sidebar";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { setActiveListId, setData, setUserLists } from "../app/listSlice";

function App() {
  const currList = useSelector((state) => state.list.data); // returns current list object json
  const currActiveListId = useSelector((state) => state.list.activeListId);
  const dispatch = useDispatch();

  async function updateListSlice() {
    // updates the data in redux by fetching from the database.
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3001/getList/" + currActiveListId, requestOptions)
      .then((response) => response.json())
      .then((resJson) => dispatch(setData(resJson)))
      .catch((error) => console.log("error", error));
  }

  async function updateMyLists() {
    // updates the data in redux by fetching from the database.
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3001/getAllListIds", requestOptions)
      .then((response) => response.json())
      .then((resJson) => dispatch(setUserLists(resJson)))
      .catch((error) => console.log("error", error));
  }

  async function updateActiveListId() {
    // updates the data in redux by fetching from the database.
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3001/getCurrentList", requestOptions)
      .then((response) => response.json())
      .then((resJson) => dispatch(setActiveListId(resJson)))
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    updateMyLists();
    updateActiveListId();
    
  }, []);


  return (
    <div className="App">
      <Sidebar updateMyLists={updateMyLists} updateListSlice={updateListSlice} />

      <div className="main-content">
        <h1 className="page-title">To-do</h1>

        {currActiveListId === 'no current list' ? (
          <NoActiveListsNotice />
        ) : (
          <List updateListSlice={updateListSlice} />
        )}
      </div>
    </div>
  );
}

function NoActiveListsNotice() {
  return (
    <div className="large-notice">
      There are no active lists. Choose a list on the sidebar or create a new
      one!
    </div>
  );
}

export default App;
