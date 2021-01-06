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
var emojiList = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;

    var outputMeaning = emojiDictionary[userInput];

    if (outputMeaning === undefined) {
      outputMeaning = "we don't have this in our database";
    }
    setMeaning(outputMeaning);
  }

  function listItemclickHandler(item) {
    setMeaning(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input onChange={inputChangeHandler} />

      <h2>{meaning}</h2>

      <h3>emoji we know</h3>
      {emojiList.map((item, index) => (
        <span
          key={item}
          onClick={() => listItemclickHandler(item)}
          style={{ fontSize: "2rem", padding: "1rem" }}
        >
          {" "}
          {item}{" "}
        </span>
      ))}
    </div>
  );
}
