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


const toDoArrOfObj = [
    { nr: append0(1), task: 'sing with the cat', date: dd_1 },
    { nr: append0(2), task: 'code for squirrels', date: dd_2 },
    { nr: append0(3), task: 'comb the tail', date: dd_3 },
    { nr: append0(4), task: 'listen to Sepultura', date: dd_4 }
];

class TodoList extends React.Component {
    render() {
        const toDoArrOfObj_mapped = toDoArrOfObj
            .map((tasks) => {
                return (
                    <ul key={tasks.nr}>
                        <li>
                            {tasks.nr} : :  {tasks.date} : : {tasks.task}
                        </li>
                    </ul>
                );
            });
        return <main>
            <h2>: : &nbsp; to do list &nbsp; : : </h2>
            {toDoArrOfObj_mapped}
        </main>;
    }
}

export default TodoList;