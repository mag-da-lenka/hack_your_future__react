import { useEffect, useState } from 'react'


function Counter({ updateCount, count, label }) {

    return (
        <div>
            <p>
                <button onClick={updateCount}>
                    Count: {count}
                </button>
                &nbsp; {label}
            </p>
        </div>
    )
}



// COMPONENTS RERENDER when STATE UPDATES !!!
function CounterWithEffect() {

    const [count, setCount] = useState(0)
    const updateCount = () => setCount(count + 1)

    // // useEffect will be called whenever the component is rerendered 
    // // the 1st argument is a function: 
    // useEffect(() => {
    //     console.log('the effect has been called', count)
    // })

    // // but you might not want the effect to take place 
    // // every time the component is re-rendered 
    // // so add an empty array as a 2nd argument 
    // // now the effect will be called only ONCE
    // useEffect(() => {
    //     console.log('the effect has been called', count)
    // }, [])


    // // useEffect is useful for making API calls
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }, []) // so here the [] will unspam the API 





    return (
        <Counter
            count={count}
            updateCount={updateCount}
            label="with state + effect"
        />
    )



}


export default CounterWithEffect;