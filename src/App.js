import React from "react";

import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Moscow" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            Samaneh R.
          </a>{" "}
          on{" "}
          <a
            href="https://github.com/samane-92/Plus-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
