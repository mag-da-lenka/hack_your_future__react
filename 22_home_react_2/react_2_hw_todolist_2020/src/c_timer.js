import React from 'react';

class Timer extends React.Component {

    state = { timer: 0 }

    componentDidMount() {
        this.timer = setInterval(this.increment, 1000);
        console.log('componentDidMount')
    }

    increment = () => {
        const { timer } = this.state;
        this.setState({ timer: timer + 1 });
        console.log("timer incrementing");
    };

    decrement = () => {
        const { timer } = this.state;
        this.setState({ timer: timer - 1 });
        console.log("timer decrementing");
    };

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("componentWillUnmount = clearInterval");
    }


    // //
    stopTimer = () => {
        clearInterval(this.timer);
        console.log("stopTimer = clearInterval");
    };
    //
    startSlowTimer2000 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.increment, 2000);
        console.log("startSlowTimer2000");
    };
    startFastTimer10 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.increment, 10);
        console.log("startFastTimer10");
    };
    //
    startReverseTimer500 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.decrement, 500);
        console.log("startReverseTimer500");
    };
    startReverseTimer10 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.decrement, 10);
        console.log("startReverseTimer10");
    };
    //
    restartNormalTimer1000 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.increment, 1000);
        console.log("restartNormalTimer1000");
    };
    //
    setToZero = () => {
        this.setState({ timer: 0 });
        // this.stopTimer(); // === clearInterval(this.timer)
        console.log("setToZero+stop")
    }
    //
    setToZeroAndStop = () => {
        this.setState({ timer: 0 });
        this.stopTimer(); // === clearInterval(this.timer)
        console.log("setToZero+stop")
    }


    render() {

        // console.log('render class Timer')

        const { timer } = this.state;

        return (
            <div className="timer">
                <h1>
                    : :  timer : : <br />  You've been here for
                    <span className="timer-digits"> {timer} </span>
                    second(s). <br />
                </h1>
                <div className="btns-rows">
                    <button onClick={this.startSlowTimer2000}>forward 2.0s</button>
                    <button onClick={this.startFastTimer10}>forward 0.010s</button>
                    <button onClick={this.restartNormalTimer1000}>forward 1.0s</button>
                </div>
                <div className="btns-rows">
                    <button onClick={this.startReverseTimer500}>back 0.5s</button>
                    <button onClick={this.startReverseTimer10}>back 0.010s</button>
                </div>
                <div className="btns-rows">
                    <button onClick={this.stopTimer}> stop </button>
                    <button onClick={this.setToZero}> set to zero</button>
                    <button onClick={this.setToZeroAndStop}> set to 0 + stop</button>
                </div>
            </div>
        );
    }

}

export default Timer;