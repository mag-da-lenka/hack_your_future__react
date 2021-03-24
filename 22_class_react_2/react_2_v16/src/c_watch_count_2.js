// https://github.com/HackYourFuture-CPH/React/blob/master/week2/lesson-plan.md#counter


import { useEffect, useState } from 'react'

function WatchCount2() {

    const [count, setCount] = useState(0);
    const [direction, setDirection] = useState(1)

    const decrement = () => {
        setDirection(- 1)
    }

    const reset = () => {
        setCount(0)
        setDirection(0)
    }

    // const increment = () => {
    //     setDirection(+ 1)
    // }


    useEffect(() => {

        const timer = setTimeout(() => {
            setCount(prev => prev + direction);
        }, 1000);

        return () => {
            clearTimeout(timer)
        }

    });


    return (
        <>
            <h1>: : watch count 2 : : </h1>
            <h2>COUNT: {count}</h2>
            <button onClick={decrement}>decrement</button> <br />
            <button onClick={reset}>reset</button> <br />
            {/* <button onClick={increment}>increment</button> */}
            <br />
        </>
    );


}

export default WatchCount2;