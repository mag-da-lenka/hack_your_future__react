import React, { useState } from "react";


function Counter() {

    const [counterState, setCounterState] = useState(666);

    const increment = () => {
        setCounterState(prev => prev + 1)
    };

    return (
        <button onClick={increment}>
            {counterState}
        </button>
    )
}

export default Counter;