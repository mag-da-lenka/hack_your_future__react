import React, { useState, useEffect } from 'react';

const TimerHooks1 = () => {

    const [timer, setTimer] = useState(0);

    const increment = () => { setTimer(prev => prev + 1) }
    const decrement = () => { setTimer(prev => prev - 1) }

    const forward10 = () => { setInterval(() => increment(), 10); }
    const forward666 = () => { setInterval(() => increment(), 666); }
    const forward1000 = () => { setInterval(() => increment(), 1000); }

    const back10 = () => { setInterval(() => decrement(), 10); }
    const back666 = () => { setInterval(() => decrement(), 666); }
    const back1000 = () => { setInterval(() => decrement(), 1000); }

    const stop = () => { setTimer(false) }
    const setToZero = () => { setTimer(0) }
    const setToZeroAndStop = () => { setTimer(0) }


    useEffect(() => {

        let timer =
            setInterval(() => { setTimer(prev => prev + 1); }, 1000);

        return () => {
            clearInterval(timer)
        }

    });


    return (
        <div className="timer">
            <h1>
                : :  timer : : hooks : :  1 : :  <br />  You've been here for
                <span className="timer-digits"> {timer} </span>
                second(s). <br /><br />
            </h1>
            <div className="btns-rows">
                <button onClick={forward10}>forward 0.010s</button>
                <button onClick={forward666}>forward 0.666s</button>
                <button onClick={forward1000}>forward 1.000s</button>
            </div>
            <div className="btns-rows">
                <button onClick={back10}>back 0.010s</button>
                <button onClick={back666}>back 0.666s</button>
                <button onClick={back1000}>back 1.0000s</button>
            </div>
            <div className="btns-rows">
                <button onClick={stop}> stop </button>
                <button onClick={setToZero}> set to zero</button>
                <button onClick={setToZeroAndStop}> set to 0 + stop</button>
            </div>
        </div>
    );

}

export default TimerHooks1;