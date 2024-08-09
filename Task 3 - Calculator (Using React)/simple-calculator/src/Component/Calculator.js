import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      calculateResult();
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      let result = eval(input);
      if (result === Infinity || result === -Infinity) {
        alert("Error: Division by zero");
        setInput("");
      } else if (isNaN(result)) {
        alert("Error: Invalid calculation");
        setInput("");
      } else {
        setInput(result.toString());
        addToHistory(`${input} = ${result}`);
      }
    } catch (error) {
      alert("Error: Invalid input");
      setInput("");
    }
  };

  const addToHistory = (operation) => {
    setHistory([operation, ...history]);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="calculator">
      <button className="history-button" onClick={toggleHistory}>
        History
      </button>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("AC")}>AC</button>
        <button onClick={() => handleButtonClick("DEL")}>DEL</button>
        <button onClick={() => handleButtonClick("%")}>%</button>
        <button onClick={() => handleButtonClick("/")}>/</button>

        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>

        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>

        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick("00")}>00</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
      </div>

        {showHistory && (
          <div className="history">
            <h3>History</h3>
            <ul>
              {history.length === 0 ? (
                <li>No history</li>
              ) : (
                history.map((item, index) => <li key={index}>{item}</li>)
              )}
            </ul>
          </div>
        )}
      </div>
  );
};

export default Calculator;
