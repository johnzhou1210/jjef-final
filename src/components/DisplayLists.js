import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData, setUserLists } from "../app/listSlice";
import ListLabel from "./ListLabel";

function DisplayLists() {
  const myLists = useSelector((state) => state.list.userLists); // returns current list array


  
    const sortedArr = [...myLists].sort((a, b) => {
      if (a.list_id < b.list_id) {
        return -1;
      }
      if (a.list_id > b.list_id) {
        return 1;
      }
      return 0;
    });

  return (
    <>
      {myLists.length > 0 ? (
        sortedArr.map((elem, key) => (
          <ListLabel key={key} list_id={elem.list_id} />
        ))
      ) : (
        <div></div>
      )}
    </>
  );
}

export default DisplayLists;
