import "../App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div className="main-content">
        <h1 className="page-title">To-do</h1>
        <div className="entry-add-input">
          <label>Add task</label>
          <input type="text" id="new-entry-name" name="new-entry-field"></input>
        </div>
        <div className="list-content"></div>
      </div>
    </div>
  );
}

export default App;
