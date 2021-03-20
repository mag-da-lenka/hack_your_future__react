import React from 'react'

class CounterClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            myCount: props.countFrom,
        }

        // BIND CAN SAVE YOUR LIFE in case of problems
        // this.updateCount = this.updateCount.bind(this)

    }

    updateCount() {

        // destructuring: 
        const { myCount } = this.state

        this.setState({
            myCount: myCount + 1,
        })

    }




    render() {

        

        const { myCount } = this.state

        return (
            <div> 
                <span> : : counter class based : : &nbsp; </span>
                <button onClick={() => this.updateCount()}>
                    {myCount}
                </button>
            </div>
        )
    }
}





export default CounterClass