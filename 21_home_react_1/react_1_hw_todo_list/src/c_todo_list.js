import React from 'react';

// DATE FORMATTING

// const unformatted_today = new Date()
// const slightly_formatted_today = new Date('2020/12/31').toDateString()
const year = new Date().getFullYear();
// const months_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const month_name = months_names[new Date().getMonth()];
const month_number = appendLeadingZeroes(new Date().getMonth() + 1);
const days_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  // 0 - 1 - 2 - 3 - 4 - 5 - 6
const day_name = days_names[new Date().getDay()];
const day_number = appendLeadingZeroes(new Date().getDate());
const hours = appendLeadingZeroes(new Date().getHours());
const minutes = appendLeadingZeroes(new Date().getMinutes());
const seconds = appendLeadingZeroes(new Date().getSeconds());
function appendLeadingZeroes(n) { if (n <= 9) { return "0" + n; } return n }
// const myDateFormat_month_number = `${year}/${month_number}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;
// console.log(myDateFormat_month_number); 
// const myDateFormat_month_name = `${year}/${month_name}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;
// console.log(myDateFormat_month_name);
const myDateFormat_month_number1 = `${year + 1}/${month_number}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;
const myDateFormat_month_number2 = `${year + 2}/${month_number}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;
const myDateFormat_month_number3 = `${year + 3}/${month_number}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;
const myDateFormat_month_number4 = `${year + 0}/${appendLeadingZeroes(new Date().getMonth() + 4)}/${16} (${'Bloomsday'})  ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;



const toDoArrOfObj = [
    { nr: 1, task: 'Sing with the cat', date: myDateFormat_month_number1 },
    { nr: 2, task: 'Code for squirrels', date: myDateFormat_month_number2 },
    { nr: 3, task: 'Comb the tail', date: myDateFormat_month_number3 },
    { nr: 4, task: 'Listen to Sepultura', date: myDateFormat_month_number4 }
]; 
// console.log(toDoArrOfObj);

class TodoList extends React.Component {

    render() {

        const toDoArrOfObj_mapped = toDoArrOfObj
            .map((tasks) => {
                return (
                    <ul key={tasks.nr}>
                        <li >
                            {tasks.nr}. {tasks.date}: {tasks.task}
                        </li>
                    </ul>
                );
            });

        // console.log(toDoArrOfObj_mapped);

        return <main>

            <h2>To do list: </h2>
            {toDoArrOfObj_mapped}
            
        </main>;
    }
}

export default TodoList;