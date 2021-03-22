import React, { useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(666);

    const increment = () => {
        setCounter((prev) => prev + 1)
    };

    const reset = () => {
        setCounter(666)
    };

    const double = () => {
        setCounter((prev) => prev * 2)
    };

    return (
        <div>
            <h1>React 1 [class] <br /> ex : :  Counter Expanded </h1> <br />
            <h2>{counter}</h2> <br />
            <button onClick={increment}> increment </button> <br />
            <button onClick={double}> double </button> <br />
            <button onClick={reset}> reset </button>
        </div>
    )
}

export default Counter;