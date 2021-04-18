import React from 'react';

class CounterClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: this.props.initialValue }; // previously ---> value: 0 
    }

    increment = () => {
        const currentValue = this.state.value; console.log("counter incrementing ");
        this.setState({ value: currentValue + 1 });
    };
    decrement = () => {
        const currentValue = this.state.value; console.log("counter decrementing");
        if (currentValue === 0) { alert("you can't decrement") }
        else { this.setState({ value: currentValue - 1 }); }
    };
    reset = () => {
        this.setState({ value: this.props.initialValue }); console.log("counter reset");
    };

    render() {
        return (
            <div className="counter">
                <h1> : : counter : :  class : : {this.state.value} : : </h1> <br/>
                {console.log(this.state.value)} 
                <div className="btns-rows">
                    <button onClick={this.increment}>increment</button>
                    <button onClick={this.decrement}>decrement</button>
                    <button onClick={this.reset}>reset</button>
                </div>

            </div>
        );
    }

}

export default CounterClass;