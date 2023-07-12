// Import necessary modules
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// Include styles
import "../styles/index.css";

// Define the SimpleCounter component
function SimpleCounter(props){
    return (
        <div className="bigContainer">
            <div className="clock"><i className="fa-regular fa-clock"></i></div>
            <div className="forth">{props.numberFour % 10}</div>
            <div className="third">{props.numberThree % 10}</div>
            <div className="second">{props.numberTwo % 10}</div>
            <div className="first">{props.numberOne % 10}</div>
        </div>
    )
}

// Define propTypes for the SimpleCounter component
SimpleCounter.propTypes = {
    numberOne: PropTypes.number,
    numberTwo: PropTypes.number,
    numberThree: PropTypes.number,
    numberFour: PropTypes.number,
};

let counter = 0;
setInterval(function(){
    const forth = Math.floor(counter/1000)
    const third = Math.floor(counter/100)
    const second = Math.floor(counter/10)
    const first = Math.floor(counter/1);
    console.log(first, second, third, forth)
    counter++

    // Render your React application
    ReactDOM.render(
        <SimpleCounter
            numberOne={first}
            numberTwo={second}
            numberThree={third}
            numberFour={forth}
        />,
        document.querySelector("#app")
    );
}, 1000);
