import React from 'react';
import CounterFunc from './c_counter_func.js';
import CounterClass from './c_counter_class.js';
import './App.css';



const FirstName = (props) => {
  // console.log(props)
  return (
    <div>
      My first name is {props.firstname}
    </div>
  )
}

class SecondName extends React.Component {
  render() {
    return (
      <div>
        My surname is {this.props.surname}
      </div>
    )
  }
}


const squirrelFirstNamesArray = [
  "Squirrel Magda 1",
  "Squirrel Magda 2",
  "Squirrel Magda 3"
]

const SquirrelFirstName = (props) => {
  // console.log(props)
  return (
    <div>
      My squirrel first name is {props.squirrel_first_name}
    </div>
  )
}


const squirrelSuramesArray = [
  "Squirrel Voigt 1",
  "Squirrel Voigt 2",
  "Squirrel Voigt 3"
]

const SquirrelSurname = (props) => {
  // console.log(props)
  return (
    <div>
      My squirrel surname is {props.squirrel_surname}
    </div>
  )
}



function App() {

  return (

    <div>

      <h1>Hello React World !</h1>

      <h2> : : props : : names exercise : : </h2>

      <FirstName firstname="Magda" />
      <SecondName surname="Voigt" /> <br />

      <SquirrelFirstName squirrel_first_name="Squirrel Magda" />
      <SquirrelSurname squirrel_surname="Squirrel Voigt" /> <br />

      {squirrelFirstNamesArray
        .map(squirrel_first_name => {
          return (
            <SquirrelFirstName
              key={squirrel_first_name}
              squirrel_first_name={squirrel_first_name}
            />
          )
        })
      } <br />

      {squirrelSuramesArray
        .map(squirrel_surname => {
          return (
            <SquirrelSurname
              key={squirrel_surname}
              squirrel_surname={squirrel_surname}
            />
          )
        })
      } <br />

      <h2>: : state: components can be updated independently : :</h2>

      <CounterFunc countFrom={0} />
      <CounterFunc countFrom={0} />

      <CounterClass countFrom={0} />
      <CounterClass countFrom={0} />


    </div>

  );
}





export default App;