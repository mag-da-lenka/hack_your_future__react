import React from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo3({ description, deadline, id }) {
    return (
        <li> ID: {id} : :
        DESCR: {description} : :
        DEADLINE: {deadline}
        </li>
    )
}

// NAMED EXPORT !!! 
// if the export word is used like in the line below >>>
// you can skip line 33 but the import in App has to have curly brackets! 
export function Todolist3({ todos3 }) {
    return (
        <>
            <h2>: : &nbsp; to do list 3 &nbsp; : : </h2>
            <ul>
                {todos3.map((task) => (
                    <Todo3
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

// export default Todolist3;