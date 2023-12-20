import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../app/listSlice";
import CreateEntry from "../components/CreateEntry";
import Entry from "../components/Entry";
import Riddles from "./Riddles";

function List({ updateListSlice }) {
  const dispatch = useDispatch();
  const currList = useSelector((state) => state.list.data); // returns current list object json

  // useEffect(() => {
  //   updateListSlice();
  // }, []);

  console.log("currlist:");
  console.log(currList);

  return (
    <>
      <CreateEntry updateListSlice={updateListSlice} />
      <Riddles  />

      <div className="list-content">
        {currList != null ? (
          currList.entries.map((elem, key) => (
            <Entry
              key={key}
              completed={elem.completed}
              text={elem.text}
              priority={elem.priority}
              color={elem.color}
              list_id={elem.list_id}
              date_created={elem.date_created}
              entry_id={elem.entry_id}
              updateListSlice={updateListSlice}
            />
          ))
        ) : (
          <div>No lists currently active.</div>
        )}
      </div>
    </>
  );
}

export default List;
