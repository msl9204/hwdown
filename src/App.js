import React from "react";
import lion from "./lion.png";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={lion} className="App-logo" alt="logo" />
                <p>
                    <strong>Whirling Lion</strong>
                </p>
                <a
                    className="App-link"
                    href="https://tahiti.mju.ac.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go Tahiti
                </a>
            </header>
        </div>
    );
}

export default App;
