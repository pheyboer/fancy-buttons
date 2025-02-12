import React from 'react'; //optional
import { useState } from 'react';

function TextRepeaterButton(props) {
  const [repititions, setRepititions] = useState(1);

  const textArray = [];
  for (let i = 0; i < repititions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  }

  //handleClick function
  const handleClick = () => {
    setRepititions(repititions + 1);
    props.increaseAnger(0.1);
  };

  return (
    <button onClick={handleClick} className="TextRepeaterButton">
      {textArray}
    </button>
  );
}

export default TextRepeaterButton;
