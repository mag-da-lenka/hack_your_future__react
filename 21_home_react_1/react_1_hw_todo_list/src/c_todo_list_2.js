import React from "react";
import { v4 as uuidv4 } from 'uuid';



function append0(n) { if (n <= 9) { return "0" + n; } return n }

const todos2 = [
  {
    nr: append0(5),
    task: 'jump with the dog',
    date: '20201020'
  },
  {
    nr: append0(6),
    task: 'code for fame',
    date: '20201021'
  },
  {
    nr: append0(7),
    task: 'dance',
    date: '20201022'
  },
  {
    nr: append0(8),
    task: 'listen to Sepultura',
    date: '20201022'
  }
];


const EachTask = ({ nr, task, date }) => {
  return (
    <li>
      {nr} : : {date} : : {task}
    </li>
  );
};


const Todolist2 = () => {

  return (
    <>
      <h2>: : to do list 2 : : </h2>
      {todos2.map((aTask) => {
        return (
          <div key={uuidv4()}>
            <ul>
              <EachTask
                nr={aTask.nr}
                task={aTask.task}
                date={aTask.date} />
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Todolist2;