import React from 'react';


// DATE FORMATTING
function append0(n) { if (n <= 9) { return "0" + n; } return n }
const year = new Date().getFullYear();
const month_number = append0(new Date().getMonth() + 1);
const day_number = append0(new Date().getDate());
const hours = append0(new Date().getHours());
const minutes = append0(new Date().getMinutes());
const seconds = append0(new Date().getSeconds());
const dd_1 = `${year + 1} / ${month_number} / ${day_number}   
              ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;
const dd_2 = `${year + 2} / ${month_number} / ${day_number}   
              ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;
const dd_3 = `${year + 3} / ${month_number} / ${day_number}   
              ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;
const dd_4 = `${year + 0} / ${'06'} / ${16} (${'Bloomsday'})   
              ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;


const todos1 = [
    { nr: append0(1), task: 'sing with the cat', date: dd_1 },
    { nr: append0(2), task: 'code for squirrels', date: dd_2 },
    { nr: append0(3), task: 'comb the tail', date: dd_3 },
    { nr: append0(4), task: 'listen to Sepultura', date: dd_4 }
];

class TodoList1 extends React.Component {
    render() {
        const tasklist1 = todos1
            .map((task) => {
                return (
                    <ul key={task.nr}>
                        <li>
                            {task.nr} : :  {task.date} : : {task.task}
                        </li>
                    </ul>
                );
            });
        return (
            <>
                <h2>: : &nbsp; to do list 1 &nbsp; : : </h2>
                {tasklist1}
            </>
        )
    }
}

export default TodoList1;