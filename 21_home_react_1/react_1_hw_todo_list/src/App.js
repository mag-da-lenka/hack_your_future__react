// instructions: 
// https://github.com/HackYourFuture-CPH/React/blob/master/week1/homework.md#basic-react--props

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './c_header';
import TodoList1 from './c_todo_list_1';
import Todolist2 from './c_todo_list_2';
import {Todolist3} from './c_todo_list_3';
import Todolist4 from './c_todo_list_4';
import Luxon from './c_luxon_fun';
import Footer from './c_footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList1 />
        <Todolist2 />
        <Todolist3 todos3={todos3} />
        <Todolist4 />
        <Luxon />
        <Footer />
      </div>
    );
  }
}

// for version 3
const todos3 = [
  {
    description: 'go for a walk',
    deadline: 'asap',
    id: 332746
  },
  {
    description: 'go for a another walk',
    deadline: 'asap tomorrow',
    id: 332246
  }
]

const potato = document.getElementById("root")
ReactDOM.render(<App />, potato);

export default App;