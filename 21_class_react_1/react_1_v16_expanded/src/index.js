import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { v4 as uuidv4 } from 'uuid';
import Counter from './counter_expanded.js';

function UserItemExpanded({ fullname, address, age, height, languages }) {

  return (
    // this is a fragment <> </> 
    <>
      <h1>Name: {fullname}</h1>
      <h3>Address: {address}</h3>
      <h3>Age: {age}</h3>
      <h3>Height: {height}</h3>
      <h3>Spoken languages:
        <ul>
          {languages.map((language) =>
            <li key={uuidv4()}>
              {language}
            </li>)}
        </ul>
      </h3>
      <br />
    </>

  )

}

function UserList(props) {
  return (

    <ul key={uuidv4()}>
      <h1>
        React 1 [class] <br /> ex : :  User Item Expanded
      </h1> <br />
      {
        props.users.map(user => {
          return <UserItemExpanded
            fullname={user.fullname}
            address={user.address}
            age={user.age}
            height={user.height}
            languages={user.languages}
          />;
        })
      }
    </ul>
  );
}

const users = [
  {
    fullname: 'testy mc testy face',
    address: 'test alley',
    age: 35,
    height: 185,
    languages: ['danish', 'arabic']
  },
  {
    fullname: 'Ahmad Hansen',
    address: 'test alley 2',
    age: 89,
    height: 167,
    languages: ['english', 'polish']
  },
  {
    fullname: 'Peter Petersen',
    address: 'alley 2',
    age: 19,
    height: 176,
    languages: ['english', 'danish']
  }
];


ReactDOM.render(
  <div>
    <UserList users={users} /> <br /> <br />
    <Counter />
  </div>,
  document.getElementById("root")
);