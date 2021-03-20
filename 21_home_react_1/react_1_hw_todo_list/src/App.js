// instructions: 
// https://github.com/HackYourFuture-CPH/React/blob/master/week1/homework.md#basic-react--props

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './c_header';
import TodoList from './c_todo_list';
import Footer from './c_footer';
import Luxon from './c_luxon_fun';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
        <Luxon />
        <Footer />
      </div>
    );
  }
}

const potato = document.getElementById("root")
ReactDOM.render(<App />, potato);

export default App;