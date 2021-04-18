import React, { useState, useEffect } from 'react';

const TimerHooks = (props) => {

    const [timer, setTimer] = useState(props.initialValue);

    useEffect(() => {

        // "componentDidMount"
        const timerDefault =
            setInterval(() => {
                setTimer(currentValue => currentValue + 1)
            }, 1000);


        // "componentWillUnmount"
        return () => {
            clearInterval(timerDefault);
        };


    }, []); // empty array === run effect only once  



    const stopTimer = () => { clearInterval(timer); };

    // I'm lost now ;( bc I can't redo what I managed when I used class 
    // ...and they said hooks were easier...


    return (
        <div className="timer">
            <h1>
                : :  timer : : hooks : :  <br />  You've been here for
                <span className="timer-digits"> {timer} </span>
                second(s). <br /><br />
            </h1>
            
            {/* ;( hooooooow? */}
            <div className="btns-rows">
                <button>forward 2.0s</button>
                <button>forward 0.010s</button>
                <button>forward 1.0s</button>
            </div>
            <div className="btns-rows">
                <button>back 0.5s</button>
                <button>back 0.010s</button>
            </div>
            <div className="btns-rows">
                <button onClick={stopTimer}> stop </button>
                <button> set to zero</button>
                <button> set to 0 + stop</button>
            </div>
        </div>

    );
}

export default TimerHooks;