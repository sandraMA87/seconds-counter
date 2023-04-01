import React from "react";

function SecondCounter({ seconds }) {
  return (
    <div className="contador">

      <p>{0}:</p>
      <p>{0}:</p>
      <p>{0}:</p>
      <p>{0}:</p>
      <p>{minutes}:</p>
      <p>{seconds}</p>
    </div>
  );
}

export default SecondCounter;
