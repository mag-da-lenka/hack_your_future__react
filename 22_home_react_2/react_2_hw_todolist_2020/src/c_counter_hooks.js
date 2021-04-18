import React, { useState } from 'react';

// function CounterHooks(props) {
//     const [count, setCount] = useState(props.initialValue);
//     return (
//         <div className="counter"  >  <h1> : : counter : : hooks : :  {count} : : </h1> <br />
//             <div className="btns-rows">
//                 <button onClick={() => setCount(count + 1)}>increment</button>
//                 <button onClick={() => setCount(count - 1)}>decrement</button>
//                 <button onClick={() => setCount(props.initialValue)}>reset</button>
//             </div>
//         </div>
//     );
// }

// or: 

function CounterHooks(props) {

    const [count, setCount] = useState(props.initialValue);

    const incrementCount = () => setCount(count + 1)
    const decrementCount = () => setCount(count - 1)
    const resetCount = () => setCount(props.initialValue)

    return (
        <div className="counter">
            <h1> : : counter : : hooks : :  {count} : : </h1> <br />
            <div className="btns-rows">
                <button onClick={incrementCount}>increment</button>
                <button onClick={decrementCount}>decrement</button>
                <button onClick={resetCount}>reset</button>
            </div>
        </div>

    );

}

export default CounterHooks;