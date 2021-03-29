import React from "react";
import { v4 as uuidv4 } from 'uuid';
// import { useState } from 'react'

function Todo4({ description, deadline, id }) {
    return (
        <li> ID: {id} : :
        DESCR: {description} : :
        DEADLINE: {deadline}
        </li>
    )
}

export function Todolist4() {

    // const [todos4, setTodos4] = useState([])

    return (
        <>
            <h2>: : &nbsp; to do list 4 &nbsp; : : </h2>
            <ul>
                {todos4.map((task) => (
                    <Todo4
                        key={uuidv4()}
                        id={task.id}
                        description={task.description}
                        deadline={task.deadline}
                    />
                ))}
            </ul>
        </>
    )
}


const todos4 = [
    {
        description: 'catch squirrels',
        deadline: 'asap',
        id: 312746
    },
    {
        description: 'catch more squirrels',
        deadline: 'asap tomorrow',
        id: 132246
    }
]

export default Todolist4;