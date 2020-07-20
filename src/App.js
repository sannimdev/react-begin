import React from "react";
import Hello from "./Hello";
import "./App.css";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "red",
    fontSize: 24,
    color: "white",
    padding: "1rem",
  };
  return (
    <>
      {/*ddd */}
      <Hello
      //우와 신기하다
      />
      <div
        //우와 신기해
        style={style}
      >
        {name}
      </div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
