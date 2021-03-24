import { useState } from 'react'


function Counter({ updateCount, count, label }) {

    return (
        <div>
            <p>
                <button onClick={updateCount}>
                    Count: {count}
                </button>
                &nbsp; {label}
            </p>
        </div>
    )
}


function CounterWithoutState() {

    let count = 0
    const updateCount = () => count + 1

    return (
        <Counter
            count={count}
            updateCount={updateCount}
            label="without state"
        />
    )
}

// COMPONENTS RERENDER when STATE UPDATES !!!
function CounterWithState() {

    const [count, setCount] = useState(0)
    const updateCount = () => setCount(count + 1)

    return (
        <Counter
            count={count}
            updateCount={updateCount}
            label="with state"
        />
    )
}


function Counters() {

    return (
        <div>
            <h1> : : counters : :  </h1>
            <CounterWithState />
            <CounterWithoutState />
        </div>
    );
}

export default Counters;