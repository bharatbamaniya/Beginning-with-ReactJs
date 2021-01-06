import React, { useState } from "react";
import "./styles.css";

var headingText = "inside outtt";

const emojiDictionary = {
  "😃": "Smiling",
  "😞": "disbelief",
  "😢": "sad",
  "🥡": "takeout box",
  "💕": "love",
  "😒": "annoyance"
};

export default function App() {
  var [inputValue, setinputValue] = useState("");

  function inputChangeHandler(event) {
    console.log(event.target.value);
    setinputValue(event.target.value);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input onChange={inputChangeHandler} />
      {inputValue}
    </div>
  );
}
