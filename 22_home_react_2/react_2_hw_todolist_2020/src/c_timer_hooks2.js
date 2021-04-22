import { useEffect, useState } from 'react'

function TimerHooks2() {

    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(true)
    const [timeoutTime, setTimeoutTime] = useState(1)

    const decrement = () => { setTimer(timer - 1) }
    const reset = () => { setTimer(0) }
    const pause = () => { setIsActive(false) }
    const start = () => { setIsActive(true) }
    const handleIsActive = () => {
        if (isActive) { pause() }
        else { start() }
    }


    useEffect(() => {

        if (isActive) {

            // console.log('timeout is created')
            const timer = setTimeout(() => {
                // console.log('timeout is called')
                setTimer(prev => prev + 1);
            }, timeoutTime * 1000);

            return () => {
                // console.log('clean up')
                clearTimeout(timer)
            }
        }
    });




    return (

        <div className="timer">

            <h1>
                : :  timer : : hooks : :  2 : :  <br />  You've been here for
                <span className="timer-digits"> {timer} </span>
                second(s). <br /><br />
            </h1>

            <div className="btns-rows">
                <button onClick={decrement}>decrement</button> <br />
                <button onClick={reset}>reset</button> <br />
                <button onClick={handleIsActive}> {isActive ? 'pause' : 'start'} </button>
            </div>
            <br />

            <div className="btns-rows">

                <label>specify the speed : : in seconds &nbsp; </label> <br />

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


        </div>
    );


}

export default TimerHooks2;