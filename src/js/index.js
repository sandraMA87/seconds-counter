//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import SecondCounter from "./component/SecondCounter.jsx";

let seconds = 0;

setInterval(()=> {
   seconds++
ReactDOM.render( 
    <SecondCounter seconds={seconds} />, document.querySelector("#app"));
}, 1000);
