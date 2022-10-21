import React from "react";
import "./Inputs.scss";

const Inputs = ({ props }: any) => {
  const { setLength } = props;
  return (
    <div id="main_inputs">
      <div className="main_inputs_input">
        <input
          onChange={(e) => setLength(e.target.value)}
          min="0"
          max="16"
          defaultValue="6"
          type="range"
        />
      </div>

      <label className="main_inputs_checkbox">
        Include Uppercase Letters
        <input type="checkbox" />
        <span className="main_inputs_checkbox_custom"></span>
      </label>
      <label className="main_inputs_checkbox">
        Include Lowercase Letters
        <input type="checkbox" />
        <span className="main_inputs_checkbox_custom"></span>
      </label>
      <label className="main_inputs_checkbox">
        Include Numbers
        <input type="checkbox" />
        <span className="main_inputs_checkbox_custom"></span>
      </label>
      <label className="main_inputs_checkbox">
        Include Symbols
        <input type="checkbox" />
        <span className="main_inputs_checkbox_custom"></span>
      </label>
    </div>
  );
};

export default Inputs;
