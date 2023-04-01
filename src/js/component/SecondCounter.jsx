import React from "react";

function SecondCounter({ seconds }) {
  
  const horas = Math.floor(seconds / 3600).toString().padStart(2, "0");
  const minutos = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  const segundos = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="contador">&#x23F3;
      <div className="">{horas[0]}</div>
      <div className="">{horas[1]}:</div>
      <div className="">{minutos[0]}</div>
      <div className="">{minutos[1]}:</div>
      <div className="">{segundos[0]}</div>
      <div className="">{segundos[1]}</div>
    </div>
  );
};

export default SecondCounter;
