import React from "react";
import "./Inputs.scss";

const Inputs = () => {
  return (
    <div id="main_inputs">
      <div className="main_inputs_input">
        <input type="range" />
      </div>
      <div className="main_inputs_input">
        <input type="checkbox" name="Include Uppercase Letters" />
        <label>Include Uppercase Letters</label>
      </div>
      <div className="main_inputs_input">
        <input type="checkbox" name="Include Lowercase Letters" />
        <label>Include Lowercase Letters</label>
      </div>
      <div className="main_inputs_input">
        <input type="checkbox" name="Include Numbers" />
        <label>Include Numbers</label>
      </div>
      <div className="main_inputs_input">
        <input type="checkbox" name="Include Symbols" />
        <label>Include Symbols</label>
      </div>
    </div>
  );
};

export default Inputs;
