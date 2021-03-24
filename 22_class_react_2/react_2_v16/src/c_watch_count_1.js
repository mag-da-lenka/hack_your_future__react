// https://github.com/HackYourFuture-CPH/React/blob/master/week2/lesson-plan.md#counter


import { useEffect, useState } from 'react'

function WatchCount1() {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1)

    }

    const reset = () => {
        setCount(0)
    }
     

    useEffect(() => {

        const timer = setTimeout(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => {
            clearTimeout(timer)
        }

    });


    return (
        <>
            <h1>: : watch count 1 : : </h1>
            <h2>COUNT: {count}</h2>
            <button onClick={decrement}>decrement</button> <br/>
            <button onClick={reset}>reset</button> <br />
        </>
    );

    
}

export default WatchCount1;





// Now extend it with the following features:

// Add a button that decrements the timer. What is observed?
// Add a button that resets the counter to 0
// Add an text input field an start typing in a long story. What is observed?
// Extra :
// A button that pauses the counter
// Clicking it should change the text so it says start. 
// Clicking the button now should start the timer again and change the text to pause
// Also, the counter should stop immediately. Hint : you need to return a clean up function from useEffect
// An input field that lets you set the speed of the counter. 
// The speed should be reflected immediately on keypress and the counter should pause when entering invalid input.