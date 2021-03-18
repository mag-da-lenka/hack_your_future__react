// instructions: 
// https://github.com/HackYourFuture-CPH/React/blob/master/week1/homework.md#basic-react--props

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 

import Header from './c_header';
import TodoList from './c_todo_list';
import Footer from './c_footer';



class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

const rootsBloodyRoots = document.getElementById("root")
ReactDOM.render(<App />, rootsBloodyRoots);

export default App;