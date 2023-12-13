import "../App.css";
import Sidebar from "./Sidebar";
import List from "./List";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div className="main-content">
        <h1 className="page-title">To-do</h1>
        <List />
      </div>
    </div>
  );
}

export default App;
