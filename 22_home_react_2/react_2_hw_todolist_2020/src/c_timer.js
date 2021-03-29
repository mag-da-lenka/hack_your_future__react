import React from 'react';

class Timer extends React.Component {

    state = { counter: 0 }

    componentDidMount() {
        this.timer = setInterval(this.increment, 1000);
        // console.log('component DID mount, yaaay! ')
    }

    increment = () => {
        const { counter } = this.state;
        this.setState({ counter: counter + 1 });
        // console.log("incrementing timer");
    };

    decrement = () => {
        const { counter } = this.state;
        this.setState({ counter: counter - 1 });
        // console.log("decrementing timer");
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    stopTimer = () => { clearInterval(this.timer); };
    startTimer = () => { this.timer = setInterval(this.increment, 2000); };
    reverseTimer = () => { this.timer = setInterval(this.decrement, 500); };
    normalTimer = () => { this.timer = setInterval(this.increment, 1000); };



    render() {

        // console.log('render, yaaaaay! ')

        const { counter } = this.state;

        return (

            <div className="timer">
                <h1> : :  I'm a timer : :  <br />
                    You've been here for
                    <span className="timer-digits">
                        {counter}
                    </span>
                        seconds. <br />
                        : : always press stop  <br /> <b>before</b> trying other buttons here : :
                </h1>

                <div className="three-columns">
                    <p> </p>
                </div>

                <div className="btns-rows">
                    <button onClick={this.startTimer}>twice slower</button>
                    <button onClick={this.reverseTimer}>go back</button>
                    <button onClick={this.normalTimer}>normal flow</button>
                </div>

                <div className="btns-rows">
                    <button onClick={this.stopTimer}> stop </button>
                </div>


            </div>

        );
    }

}

export default Timer;