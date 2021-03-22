import React from "react";
import ReactDOM from "react-dom";
import './index.css'; 
import Counter from './counter_v16.js';

// // before destructuring 
// function UserItem(props) {
//   return (
//     <li>
//       My name is {props.name} and I'm {props.age} years old.
//     </li>
//   );
// }

// // before destructuring
// function UserList(props) {
//   return (
//     <ul>
//       {
//         props.users.map(user => {
//           return <UserItem name={user.name} age={user.age} key={user.id} />;
//         })
//       }
//     </ul>
//   );
// }


// after destructuring
function UserItem({name, age}) {
  return (
    <li>
      My name is {name} and I'm {age} years old.
    </li>
  );
}

// after destructuring
function UserList({users}) {
  return (
    <ul>
      {
        users.map(user => {           
          return <UserItem 
          name={user.name} 
          age={user.age} 
          key={user.id} />;
        })
      }
    </ul>
  );
}

const users = [
  {
    id: 0,
    name: "Benjamin",
    age: 32,
  },
  {
    id: 1,
    name: "Peter",
    age: 43
  }
];

ReactDOM.render(
  
  <div>
  <UserList users={users} />
  <Counter/> 
  </div>,

  document.getElementById("root")
);