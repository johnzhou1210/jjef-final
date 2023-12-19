import React, { useState } from "react";
import CreateList from "../components/CreateList";
import DisplayLists from "../components/DisplayLists";

function Sidebar({updateMyLists, updateListSlice}) {
  return (
    <div className="sidebar">
      <CreateList updateMyLists={updateMyLists} updateListSlice={updateListSlice} />

      <h2>My Lists</h2>

      <div className="sidebar-button">
        <DisplayLists />
      </div>
    </div>
  );
}

export default Sidebar;
