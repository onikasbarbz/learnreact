import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [input, setInput] = useState(""); // Store the input
  const [result, setResult] = useState(""); // Store the result

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Function to handle calculation
  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };
  // Function to clear calculator
  const clearCalculator = () => {
    setInput("");
    setResult("");
  };
  return (
    <div>
      <h1> Calculator</h1>
    <div className="Calculator">
        {/* Display result */}
        <div className = "result">
            <h3>{result ? result : input}</h3>
       </div>

      {/* Buttons for numbers, operators, equal sign, and clear */}
      <div className="keypad">
        {[1, 2, 3, "/", 4, 5, 6, "*", 7, 8, 9, "+", ".", 0, "-", "="].map(
          (value) => (
            <button
              key={value}
              onClick={() =>
                value === "=" ? calculate() : setInput(input + value)
              }>
              {value}
            </button>
          )
        )}
        <button onClick={clearCalculator}>C</button>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
