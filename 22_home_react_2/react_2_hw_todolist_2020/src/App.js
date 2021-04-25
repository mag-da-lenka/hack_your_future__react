// instructions:  https://github.com/HackYourFuture-CPH/React/blob/master/week2/homework.md#basic-react--props

import React from 'react';
import './App.css';

import Header from './c_header';
import ClockClass from './c_clock_class';
import ClockHooks from './c_clock_hooks';
import TimerClass from './c_timer_class';
import TimerHooks1 from './c_timer_hooks1';
import TimerHooks2 from './c_timer_hooks2';
import CounterClass from './c_counter_class';
import CounterHooks from './c_counter_hooks';
import TodoListClass from './c_todolist_class';
import TodoListHooks from './c_todolist_hooks';
import Footer from './c_footer';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />

        <div className="clocks">
          <ClockClass />
          <ClockHooks />
        </div>

        <TimerClass />
        <TimerHooks1 />
        <TimerHooks2 />

        <CounterClass initialValue={666} />
        <CounterHooks initialValue={666} />

        <TodoListClass />
        <TodoListHooks />
        
        <Footer />
      </>
    );
  }
}

export default App;

// const rootsBloodyRoots = document.getElementById("root");
// ReactDOM.render(<App />, rootsBloodyRoots);