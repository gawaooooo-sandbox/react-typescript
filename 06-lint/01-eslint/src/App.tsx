import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const logoAttrs = {
    alt: "logo",
    className: "App-logo",
    src: logo
  };
  const title = "こんにちは React";
  const targets = ["World", "Keyaki", "Yurina"];

  return (
    <div className="App">
      <header className="App-header">
        {/* コメントはこう書く */}
        {
          // 複数行コメント
        }
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img {...logoAttrs} />
        {title && <p>{title}</p>}
        {targets.map((target, index) => (<p key={index}>Hello, {target}!</p>))}
        <p>
                    Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
                    Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
