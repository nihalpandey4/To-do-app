import React from "react";

import ToDoApp from "./ToDoApp";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="App">
        <ToDoApp />
      </div>
    );
  };
}

export default App;
