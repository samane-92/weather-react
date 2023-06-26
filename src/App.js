import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            {" "}
            Samaneh R.
          </a>{" "}
          on{" "}
          <a
            href="https://github.com/samane-92/Plus-Project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
