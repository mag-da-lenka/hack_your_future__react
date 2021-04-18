import React from 'react';

// DATE FORMATTING
const year = new Date().getFullYear();
const month_number = appendLeadingZeroes(new Date().getMonth() + 1);
const days_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  // 0 - 1 - 2 - 3 - 4 - 5 - 6
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


const randomtasks = [
    { "nr": 101, "description": 'Sing with the cat', "date": myDateFormat_month_number1, completed: false },
    { "nr": 102, "description": 'Code for squirrels', "date": myDateFormat_month_number2, completed: false },
    { "nr": 103, "description": 'Comb the tail', "date": myDateFormat_month_number3, completed: false },
    { "nr": 104, "description": 'Listen to Sepultura', "date": myDateFormat_month_number4, completed: false },
    { "nr": 105, "description": 'Swim, bike and hike', "date": myDateFormat_month_number4, completed: false },
    { "nr": 106, "description": 'Celebrate being 50', "date": myDateFormat_month_number4, completed: false },
    { "nr": 107, "description": 'Have a pizza and nuts', "date": myDateFormat_month_number4, completed: false }
];



const SingleTask = ({ todo, checkTask, deleteTask }) => (

    <li>
        {/* nr description date */}
        <div style={{ textDecoration: todo.completed ? "line-through rgb(228, 228, 228)" : "none" }}
            className="list-width">
            {todo.nr}. {todo.description} <br /> &nbsp; &nbsp; &nbsp;
            {todo.date}
        </div>

        {/* checkbox */}
        <label className="container"> &nbsp;
            <input className="checkmark"
                type="checkbox"
                checked={todo.completed}
                onChange={checkTask} />
            <span className="checkmark"> </span>
        </label>
        
        {/* delete button */}
        <button className="del_item_btn" onClick={deleteTask}>
            delete
        </button>

    </li>

);



class TaskListHooks extends React.Component {

    state = {
        tasks: [
            { "nr": 1, "description": 'Sing with the cat', "date": myDateFormat_month_number1, completed: false },
            { "nr": 2, "description": 'Code for squirrels', "date": myDateFormat_month_number2, completed: false },
            { "nr": 3, "description": 'Comb the tail', "date": myDateFormat_month_number3, completed: false },
            { "nr": 4, "description": 'Listen to Sepultura', "date": myDateFormat_month_number4, completed: false },
            { "nr": 5, "description": 'Swim, bike and hike', "date": myDateFormat_month_number4, completed: false },
            { "nr": 6, "description": 'Celebrate being 50', "date": myDateFormat_month_number4, completed: false },
            { "nr": 7, "description": 'Have a pizza and nuts', "date": myDateFormat_month_number4, completed: false },
            { "nr": 666, "description": 'Close the laptop and scream "React is hell." ', "date": myDateFormat_month_number4, completed: false }
        ]
    };

    addTask = () => {
        let newTodo = randomtasks[Math.floor(Math.random() * randomtasks.length)]
        this.setState({
            tasks:
                [...this.state.tasks,
                    newTodo]
        });
    }

    checkTask = (currentIndex) => {
        this.setState({
            tasks: this.state.tasks.map((todo, index) => {
                if (currentIndex === index) {
                    return {
                        nr: todo.nr,
                        description: todo.description,
                        date: todo.date,
                        completed: !todo.completed,
                    };
                }
                else {
                    return todo;
                }
            })
        })
    }

    deleteTask = (currentIndex) => {
        this.setState({
            tasks: this.state.tasks
                .filter((_todo, index) => currentIndex !== index)
        })
    }


    render() {

        const notasks = !this.state.tasks.length

        return (

            <div>

                <div className="add_item_btn_div" >
                    <h2 className="list-top"> add random tasks : : hooks [to be]  </h2>
                    <button onClick={this.addTask} className="add_item_btn">+</button>
                </div>

                {notasks ?
                    (<h3 className="no-tasks">!!!! no tasks !!1!1oneoneone</h3>)
                    :
                    (<ul>

                        {this.state.tasks.map((todo, index) =>
                            <SingleTask
                                key={index}
                                todo={todo}
                                checkTask={() => this.checkTask(index)}
                                deleteTask={() => this.deleteTask(index)}
                            />)}
                    </ul>)
                }
                <br />

            </div>
        );


    }








};

export default TaskListHooks;