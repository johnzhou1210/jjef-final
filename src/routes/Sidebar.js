import React, { useState } from "react";
import CreateList from "../components/CreateList";
import DisplayLists from "../components/DisplayLists";
import { Link } from "react-router-dom";

function Sidebar({updateMyLists, updateListSlice}) {
  return (
    <div className="sidebar">

      <Link to="/Riddles"><h2>Go to Riddles</h2></Link>

      <CreateList updateMyLists={updateMyLists} updateListSlice={updateListSlice} />

      <h2>My Lists</h2>

      <div className="sidebar-button">
        <DisplayLists />
      </div>
    </div>
  );
}

export default Sidebar;
