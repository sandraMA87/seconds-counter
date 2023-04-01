import React from "react";

function SecondCounter({ seconds }) {
  
  const horas = Math.floor(seconds / 3600).toString().padStart(2, "0");
  const minutos = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  const segundos = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="contador">&#x23F3;
      <div className="contador-horas">{horas}:</div>
      <div className="contador-minutos">{minutos}:</div>
      <div className="contador-segundos">{segundos}</div>
      <div className="calendario">
    </div>
    </div>
  );
};

export default SecondCounter;
