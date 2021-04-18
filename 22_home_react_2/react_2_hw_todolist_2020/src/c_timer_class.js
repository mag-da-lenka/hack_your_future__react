import React from 'react';

class TimerClass extends React.Component {

    state = { timer: 0 }

    componentDidMount() {
        this.timer = setInterval(this.increment, 1000);
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("componentWillUnmount = clearInterval");
    }


    // //
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


    // //
    stopTimer = () => {
        clearInterval(this.timer);
        console.log("stopTimer = clearInterval");
    };
    //
    forward2000 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.increment, 2000);
        console.log("startSlowTimer2000");
    };
    forward10 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.increment, 10);
        console.log("startFastTimer10");
    };
    //
    back500 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.decrement, 500);
        console.log("startReverseTimer500");
    };
    back10 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.decrement, 10);
        console.log("startReverseTimer10");
    };
    //
    forward1000 = () => {
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
                    : :  timer : : class : :  <br />  You've been here for
                    <span className="timer-digits"> {timer} </span>
                    second(s). <br /><br />
                </h1>
                <div className="btns-rows">
                    <button onClick={this.forward2000}>forward 2.0s</button>
                    <button onClick={this.forward10}>forward 0.010s</button>
                    <button onClick={this.forward1000}>forward 1.0s</button>
                </div>
                <div className="btns-rows">
                    <button onClick={this.back500}>back 0.5s</button>
                    <button onClick={this.back10}>back 0.010s</button>
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

export default TimerClass;