import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList, addEntry } from "../app/userListsSlice";

function List() {
  const dispatch = useDispatch();

  const userLists = useSelector((state) => state.userLists.lists);
  const currListId = useSelector((state) => state.userLists.activeListId);
  const currList = userLists.find((obj) => obj.id === currListId);

  if (!currList) {
    // no lists. Create a list!
    dispatch(addList());
  }

  console.log(currList);

  /* Event to handle what happens when user presses enter while adding a task. */
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      // get the data in the text field
      const entryText = event.target.value;
      // add a new entry to the list.
      dispatch(addEntry({ listId: 0, entry: entryText })); // hello will be replaced with the data of an actual entry.
      console.log("pressed enter");
      // clear input field
      event.target.value = "";
    }
  };

  return (
    <>
      <input
        className="entry-add-input"
        placeholder="Add a task here and press enter..."
        type="text"
        onKeyUp={handleKeyPress}
      ></input>

      <div className="list-content">
        {currList?.data?.map((elem, indx) => (
          <div key={indx} className="list-entry">
            {elem}
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
