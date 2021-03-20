import React, { useState } from 'react'

const CounterFunc = (props) => {

    // HOOKS!
    const [myCount, setMyCount] = useState(props.countFrom)
    const [name, setName] = useState('Magdalena')
    //the 'Magdalena' parameter is the initial state

    return (

        <div>

            : : change name : : &nbsp;
            <button onClick={() => setName('Stefania')} >
                change name
            </button>  &nbsp;
            <span>{name}</span>
            <br />


            : : counter (function based) : :  &nbsp;
            <button onClick={() => setMyCount(myCount + 1)}>
                {myCount}
            </button>

        </div>

    )
}

export default CounterFunc;