import React, { useState } from "react";
import "./styles.css";

var headingText = "inside outtt";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var newlikeCounter = likeCounter + 1;
    setLikeCounter(newlikeCounter);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <button onClick={likeClickHandler}> Like Me! </button> {likeCounter}
    </div>
  );
}
