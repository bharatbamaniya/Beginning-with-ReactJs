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
const emojiList = [
  "Smiling",
  "disbelief",
  "sad",
  "takeout box",
  "love",
  "annoyance"
];

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
    console.log(item);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input onChange={inputChangeHandler} />

      <h2>{meaning}</h2>

      <ul>
        {emojiList.map((item, index) => (
          <li
            key={item}
            onClick={() => listItemclickHandler(item)}
            style={{ padding: "1rem" }}
          >
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
