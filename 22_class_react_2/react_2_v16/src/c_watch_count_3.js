// https://github.com/HackYourFuture-CPH/React/blob/master/week2/lesson-plan.md#counter


import { useEffect, useState } from 'react'

function WatchCount3() {

    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(true)
    const [timeoutTime, setTimeoutTime] = useState(1)

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    useEffect(() => {

        if (isActive) {

            // console.log('timeout is created')
            const timer = setTimeout(() => {
                // console.log('timeout is called')
                setCount(prev => prev + 1);
            }, timeoutTime * 1000);

            return () => {
                // console.log('clean up')
                clearTimeout(timer)
            }
        }
    });

    const pause = (() => {
        setIsActive(false)
    })

    const start = (() => {
        setIsActive(true)
    })

    const handleIsActive = () => {
        if (isActive) {
            pause()
        } else {
            start()
        }
    }


    return (
        <>
            <h1>: : watch count 3 : : </h1>
            <h2>COUNT: {count}</h2>
            <button onClick={decrement}>decrement</button> <br />
            <button onClick={reset}>reset</button> <br />
            <button onClick={handleIsActive}> {isActive ? 'pause' : 'start'} </button>
            <div>
                <label>specify the speed : : in seconds</label> <br/>
                <input
                    value={timeoutTime}
                    type='number'
                    placeholder='speed'
                    onChange={(event) => {
                        const value = event.target.value
                        console.log(typeof value)
                        if (value > 0) {
                            setTimeoutTime(Number(value))
                        }
                    }}
                />
            </div>
            <br />
        </>
    );


}

export default WatchCount3;