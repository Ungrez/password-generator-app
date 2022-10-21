import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Inputs from "./Inputs";
import "./App.scss";

const App = () => {
  const [length, setLength] = useState<number>(6);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [lowercase, setLowercase] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<boolean>(false);

  return (
    <section id="main">
      <p>Password Generator</p>
      <div id="main_password">
        <p>Hsdas23d</p>
        <ContentCopyIcon />
      </div>
      <div id="main_properties">
        <div id="main_properties_aboutLength">
          <p>Character Length</p>
          <p>{length}</p>
        </div>
        <Inputs props={{ setLength }} />
        <div id="main_properties_strength">
          <p>Strength</p>
          <div id="main_properties_strenth_container">
            <p>Medium</p>
            <div className="main_strenth_container_safe"></div>
            <div className="main_strenth_container_safe"></div>
            <div className="main_strenth_container_safe"></div>
          </div>
        </div>
        <button>
          <p>Generate</p>
          <ArrowForwardIcon />
        </button>
      </div>
    </section>
  );
};

export default App;
