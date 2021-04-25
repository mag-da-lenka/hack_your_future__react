import React from 'react';

class TimerClass extends React.Component {

    state = { timer: 0 }

    componentDidMount() {
        this.timer = setInterval(this.increment, 1000);
        // console.log('componentDidMount')
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        // console.log("componentWillUnmount = clearInterval");
    }


    increment = () => {
        const { timer } = this.state;
        this.setState({ timer: timer + 1 });
        console.log("timer ++");
    };
    decrement = () => {
        const { timer } = this.state;
        this.setState({ timer: timer - 1 });
        console.log("timer --");
    };


    forward10 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.increment, 10);
        // console.log("forward10");
    };
    forward666 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.increment, 666);
        // console.log("forward666");
    };
    forward1000 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.increment, 1000);
        // console.log("forward1000");
    };

    back10 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.decrement, 10);
        // console.log("back10");
    };
    back666 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.decrement, 666);
        // console.log("back666");
    };
    back1000 = () => {
        this.stopTimer(); // === clearInterval(this.timer)
        this.timer = setInterval(this.decrement, 1000);
        // console.log("back1000");
    };
    stopTimer = () => {
        clearInterval(this.timer);
        // console.log("stopTimer = clearInterval");
    };
    setToZero = () => {
        this.setState({ timer: 0 });
        // this.stopTimer(); // === clearInterval(this.timer)
        // console.log("setToZero+stop")
    }
    setToZeroAndStop = () => {
        this.setState({ timer: 0 });
        this.stopTimer(); // === clearInterval(this.timer)
        // console.log("setToZero+stop")
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
                    <button onClick={this.forward10}>forward 0.010s</button>
                    <button onClick={this.forward666}>forward 0.666s</button>
                    <button onClick={this.forward1000}>forward 1.000s</button>
                </div>
                <div className="btns-rows">
                <button onClick={this.back10}>back 0.010s</button>
                    <button onClick={this.back666}>back 0.666s</button>
                    <button onClick={this.back10}>back 1.000s</button>
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