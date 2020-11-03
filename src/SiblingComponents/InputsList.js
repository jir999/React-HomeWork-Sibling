import React from "react";
import Inputs from "./Inputs";

const InputsList = ({ onInputChange, inputValues, id, onRadioBtnClick }) => {
  const inputsArr = [];

  const handleInputChange = (value, id) => {
    onInputChange(value, id);
  };

  const handleRadioBtnClick = (radioBtnID) => {
    onRadioBtnClick(radioBtnID);
  };

  for (let i = 0; i < inputValues[0].length; i++) {
    inputsArr.push(
      <Inputs
        key={inputValues[0][i].id}
        name="Column 1"
        id={inputValues[0][i].id}
        check={inputValues[0][i].checked}
        value={inputValues[0][i].value}
        onRadioBtnClick={handleRadioBtnClick}
        onChange={handleInputChange}
      />
    );
  }

  for (let j = 0; j < inputValues[1].length; j++) {
    inputsArr.push(
      <Inputs
        key={inputValues[1][j].id}
        name="Column 2"
        id={inputValues[1][j].id}
        check={inputValues[1][j].checked}
        value={inputValues[1][j].value}
        onRadioBtnClick={handleRadioBtnClick}
        onChange={handleInputChange}
      />
    );
  }

  return <div className="lists">{inputsArr}</div>;
};

export default InputsList;
