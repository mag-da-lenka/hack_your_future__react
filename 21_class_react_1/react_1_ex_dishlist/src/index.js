import React from "react";
import ReactDOM from "react-dom";
import './index.css';

import { v4 as uuidv4 } from 'uuid';
// the key is my addition b/c the console complained 


function Header() {
  return (
    <h1>
      : : week 21 : : react-1 : : <br />
      : : class : : <br></br>
      : : dishlist exercise : :
    </h1>
  )
}





const arrayOfDishes = ["dish 1", "dish 2", "dish 3"];        // this is props!
//                                                           // passed below in <App/>'s render :: <DishList dishes={arrayOfDishes} />

function DishList(props) {

  console.log(`props: `, props);                             // {dishes: Array(3)}
  console.log(`props.dishes: `, props.dishes);               // (3) ["dish 1", "dish 2", "dish 3"]
  console.log(`props.dishes[1]: `, props.dishes[1])          // dish 2
  console.log(`props.dishes.keys: `, props.dishes.keys);     // ƒ keys() { [native code] } 
  console.log(`props.dishes.length: `, props.dishes.length); // 3
  console.log(`uuidv4()\n` + uuidv4())                       // 18fdb2a8-3a7b-4ffb-b54a-d3ab8ff67ccd 
  console.log(`uuidv4()\n` + uuidv4())                       // another unique key ...

  const dishesComponents = props.dishes.map(dish => {
    return <li key={uuidv4()}> {dish} </li>;
  });

  return <ul> DISH LIST {dishesComponents} </ul>;

}




class Footer extends React.Component {
  render() {
    return <h1> : : footer : : </h1>;
  }
}



class App extends React.Component {

  render() {

    return (

      <>
        <Header /> <br />
        <DishList dishes={arrayOfDishes} /> <br />
        <Footer />
      </>

    );

  }

}

const beetRoot = document.getElementById("beetroot")
ReactDOM.render(<App />, beetRoot);