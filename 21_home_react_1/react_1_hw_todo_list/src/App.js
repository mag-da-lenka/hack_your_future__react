// instructions: 
// https://github.com/HackYourFuture-CPH/React/blob/master/week1/homework.md#basic-react--props

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './c_header';
import TodoList from './c_todo_list';
import Footer from './c_footer';
import Luxon from './c_luxon_fun';
import Todolist2 from './c_todo_list_2';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
        <Todolist2 />
        <Luxon />
        <Footer />
      </div>
    );
  }
}

const potato = document.getElementById("root")
ReactDOM.render(<App />, potato);

export default App;