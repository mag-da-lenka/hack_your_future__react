import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { v4 as uuidv4 } from 'uuid';


function Header() {
  return <h1> : : week 21 : : react-1 : : <br />
  : : class : : <br></br>
  : : dishlist exercise [header] : : </h1>
}


const arrayOfDishes = ["dish 1", "dish 2", "dish 3"];

function DishList(props) {

  console.log(`props: `, props);
  console.log(`props.dishes: `, props.dishes);
  console.log(`props.dishes[1]: `, props.dishes[1])
  console.log(`props.dishes.keys: `, props.dishes.keys);
  console.log(`props.dishes.length: `, props.dishes.length);
  console.log(uuidv4())
  console.log(uuidv4())
  console.log(uuidv4())


  const dishesComponents = props.dishes.map(dish => {
    return <li key={uuidv4()}>
      this is li: {dish} </li>;
    // the key is my addition b/c the console complained 
  });

  return <ul>
    this is ul: dish list {dishesComponents}
  </ul>;

}


class Footer extends React.Component {
  render() {
    return <h3>
      this is footer : : nothing impressive here
      </h3>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header /> <br />
        <DishList dishes={arrayOfDishes} /> <br />
        <Footer />
      </div>
    );
  }
}

const beetRoot = document.getElementById("beetroot")

ReactDOM.render(
  <App />,
  beetRoot
);