import React from 'react'; //optional
import { useState } from 'react';

function CounterButton(props) {
  const [clickAmount, setClickAmount] = useState(0);

  //handleClick function
  const handleClick = () => {
    setClickAmount(clickAmount + 1);
    props.increaseAnger(0.1);
  };

  return (
    <button onClick={handleClick} className="CounterButton">
      You clicked me {clickAmount} amount of times
    </button>
  );
}

export default CounterButton;
