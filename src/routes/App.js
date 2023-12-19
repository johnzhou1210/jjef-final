import "../App.css";
import Sidebar from "./Sidebar";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../app/listSlice";

function App() {
  const currList = useSelector((state) => state.list.data); // returns current list object json
  const currListId = 1; // this is only temporary, replace this once set current get and update
  const dispatch = useDispatch();

  async function updateListSlice() {
    // updates the data in redux by fetching from the database.
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3001/getList/" + currListId, requestOptions)
      .then((response) => response.json())
      .then((resJson) => dispatch(setData(resJson)))
      .catch((error) => console.log("error", error));
  }


  return (
    <div className="App">
      <Sidebar />

      <div className="main-content">
        <h1 className="page-title">To-do</h1>

        {false ? <NoActiveListsNotice /> : <List updateListSlice={updateListSlice} />}
      </div>
    </div>
  );
}

function NoActiveListsNotice() {
  return (
    <div className="large-notice">
      There are no active lists. Choose a list on the sidebar or create a new one!
    </div>
  );
}

export default App;
