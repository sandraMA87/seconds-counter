//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondCounter from "./component/SecondCounter.jsx";
import MinutesCounter from "./component/MinutesCounter.jsx";
import HoursCounter from "./component/HoursCounter.jsx";

let seconds = 0;
let minutes = 0;
let hours = 0;
//render your react application
setInterval(()=> {

    seconds++

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
ReactDOM.render( <div>
    <SecondCounter seconds={seconds} />
    <MinutesCounter minutes={minutes} />
    <HoursCounter hours={hours} />
</div>, document.querySelector("#app"));
}, 1000);
