import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import DishList1 from "./c_dishlist1.js"
import DishList2 from "./c_dishlist2.js";


function Header() {
  return (
    <h1>
      : : week 21 : : react-1 : : <br />
      : : class : : <br />
      : : dishlist exercise : :
    </h1>
  )
}

class Footer1 extends React.Component {
  render() {
    return (
      <h1> : : footer [class] : : </h1>
    )
  }
}

function Footer2() {
  return (
    <h1> : : footer [func] : : </h1>
  )
}



const arrayOfDishes1 = [  // props for Dishlist1
  "dish 1",
  "dish 2",
  "dish 3"
];

const arrayOfDishes2 = [  // props for Dishlist2
  {
    id: 1,
    name: "Fried Squirrels",
    description: "medium-rare",
    date: "2020-10-12"
  },
  {
    id: 2,
    name: "Grilled Hamsters",
    description: "with fur",
    date: "2021-03-10"
  },
  {
    id: 3,
    name: "Bloody Mary",
    description: "with chilli",
    date: "2021-06-16"
  }
];


class App extends React.Component {
  render() {
    return (
      <>
        <Header /> <br />
        <DishList1 dishes1={arrayOfDishes1} /> <br />
        <DishList2 dishes2={arrayOfDishes2} /> <br />
        <Footer1 />
        <Footer2 />
      </>
    );
  }
}

const beetRoot = document.getElementById("beetroot")
ReactDOM.render(<App />, beetRoot);