import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// DATE FORMATTING
const year = new Date().getFullYear();
const month_number = appendLeadingZeroes(new Date().getMonth() + 1);
const days_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Frnray", "Saturday"];  // 0 - 1 - 2 - 3 - 4 - 5 - 6
const day_name = days_names[new Date().getDay()];
const day_number = appendLeadingZeroes(new Date().getDate());
const hours = appendLeadingZeroes(new Date().getHours());
const minutes = appendLeadingZeroes(new Date().getMinutes());
const seconds = appendLeadingZeroes(new Date().getSeconds());
function appendLeadingZeroes(n) { if (n <= 9) { return "0" + n; } return n }
const myDateFormat_month_number1 = `${year + 1}/${month_number}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds}`;
const myDateFormat_month_number2 = `${year + 2}/${month_number}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds}`;
const myDateFormat_month_number3 = `${year + 3}/${month_number}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds}`;
const myDateFormat_month_number4 = `${year + 10}/${appendLeadingZeroes(new Date().getMonth() + 4)}/${16} (${'Bloomsday'})  ${hours}:${minutes}:${seconds}`;

const todos = [
    { "nr": 1, "description": 'Sing with the cat', "date": myDateFormat_month_number1 },
    { "nr": 2, "description": 'Code for squirrels', "date": myDateFormat_month_number2 },
    { "nr": 3, "description": 'Comb the tail', "date": myDateFormat_month_number3 },
    { "nr": 4, "description": 'Listen to Sepultura', "date": myDateFormat_month_number4 },
    { "nr": 5, "description": 'Swim, bike and hike', "date": myDateFormat_month_number4 },
    { "nr": 6, "description": 'Celebrate being 50', "date": myDateFormat_month_number4 },
    { "nr": 7, "description": 'Have a pizza and nuts', "date": myDateFormat_month_number4 },
    { "nr": 666, "description": 'Close the laptop and scream "React is hell." ', "date": myDateFormat_month_number4 }
];

const randomtasks = [
    { "nr": 101, "description": 'Sing with the cat', "date": myDateFormat_month_number1 },
    { "nr": 102, "description": 'Code for squirrels', "date": myDateFormat_month_number2 },
    { "nr": 103, "description": 'Comb the tail', "date": myDateFormat_month_number3 },
    { "nr": 104, "description": 'Listen to Sepultura', "date": myDateFormat_month_number4 },
    { "nr": 105, "description": 'Swim, bike and hike', "date": myDateFormat_month_number4 },
    { "nr": 106, "description": 'Celebrate being 50', "date": myDateFormat_month_number4 },
    { "nr": 107, "description": 'Have a pizza and nuts', "date": myDateFormat_month_number4 }
];


function SingleTask({ nr, description, date, deleteTask }) {

    const [checked, setChecked] = useState(false);
    const checkTask = () => { setChecked(true); };
   

    return (

        <li >

            {/* nr description date */}
            <div className="list-width">
                <div
                    style={{ textDecoration: checked ? "line-through rgb(228, 228, 228)" : "none" }}
                    className={checked ? "checked" : "not-checked"}
                >   {nr}: {description} <br /> &nbsp; &nbsp; &nbsp;
                    {date}
                </div>
            </div>

            {/* checkbox */}
            <label className="container"> &nbsp;
            <input className="checkmark"
                    type="checkbox"
                    onChange={checkTask} 
                    />
                    
                <span className="checkmark"> </span>
            </label>

            {/* delete button */}
            <button className="del_item_btn" onClick={() => deleteTask(nr)}>
                delete
            </button>

        </li>
    );
}



function TodoListFunc({ todos }) {

    const [defaultTodos, updateDefaultTodos] = useState(todos);

    const addTask = () => {
        let newTodo =
            randomtasks[Math.floor(Math.random() * randomtasks.length)]
        const updatedTodosPlus = defaultTodos
            .concat(newTodo);
        updateDefaultTodos(updatedTodosPlus);
    };

    const deleteTask = (nr) => {
        const updatedTodosMinus = defaultTodos
            .filter((todo) => todo.nr !== nr);
        updateDefaultTodos(updatedTodosMinus);
    };

    return (
        <>
            <div className="add_item_btn_div">
                <h2 className="list-top"> add random tasks : : hooks </h2>
                <button onClick={addTask} className="add_item_btn">+</button>
            </div>

            <ul>
                {!defaultTodos.length
                    ?
                    <h3 className="no-tasks">!!!! no tasks !!1!1oneoneone</h3>
                    :
                    defaultTodos.map((todo) => (
                        <SingleTask
                            key={uuidv4()}
                            nr={todo.nr}
                            description={todo.description}
                            date={todo.date}
                            deleteTask={deleteTask}
                        />
                    ))
                }
            </ul>
        </>
    );
}


function TodoListHooks() {
    return (
        <>
            <TodoListFunc todos={todos} />
        </>
    );
}

export default TodoListHooks;