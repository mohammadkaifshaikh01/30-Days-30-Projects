import React, { useState } from "react";

function Calculator() {
  const [value, setValue] = useState("");

  const clearDisplay = () => {
    setValue("");
  };

  const appendToDisplay = (element) => {
    setValue(value + element);
  };

  const removeElement = () => {
    setValue(value.slice(0, -1));
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div id="calculator">
      <input type="text" placeholder="0" id="display" value={value} readOnly />
      <div id="working-buttons">
        <button onClick={clearDisplay}>AC</button>
        <button onClick={() => appendToDisplay("%")}>%</button>
        <button onClick={removeElement}>OE</button>
        <button onClick={() => appendToDisplay("/")}>/</button>
        <button onClick={() => appendToDisplay("7")}>7</button>
        <button onClick={() => appendToDisplay("8")}>8</button>
        <button onClick={() => appendToDisplay("9")}>9</button>
        <button onClick={() => appendToDisplay("*")}>X</button>
        <button onClick={() => appendToDisplay("4")}>4</button>
        <button onClick={() => appendToDisplay("5")}>5</button>
        <button onClick={() => appendToDisplay("6")}>6</button>
        <button onClick={() => appendToDisplay("-")}>-</button>
        <button onClick={() => appendToDisplay("1")}>1</button>
        <button onClick={() => appendToDisplay("2")}>2</button>
        <button onClick={() => appendToDisplay("3")}>3</button>
        <button onClick={() => appendToDisplay("+")}>+</button>
        <button onClick={() => appendToDisplay("00")}>00</button>
        <button onClick={() => appendToDisplay("0")}>0</button>
        <button onClick={() => appendToDisplay(".")}>.</button>
        <button className="clear" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
