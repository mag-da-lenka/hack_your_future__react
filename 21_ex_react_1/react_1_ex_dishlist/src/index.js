import React from "react";
import ReactDOM from "react-dom";
import './index.css'; 



function Header() {
  return <h1> : : week 21 : : react-1 : : <br></br>
  : : class : : <br></br>
  : : dishlist exercise [header] : : </h1>
}


const arrayOfDishes = ["dish 1", "dish 2", "dish 3"];

function DishList(props) {

  console.log(`props: `, props);
  console.log(`props.dishes: `, props.dishes);                 // ["dish 1", "dish 2", "dish 3"]
  console.log(`props.dishes.length: `, props.dishes.length);   // 3
  console.log(`props.dishes[1]: `, props.dishes[1])            // dish 2

  const dishesComponents = props.dishes.map(dish => {
    return <li key={dish}>
      this is li: {dish} </li>;
    // the key is my addition bc the console complained :)
  });

  return <ul>this is ul: dish list {dishesComponents}</ul>;

}


class Footer extends React.Component {
  render() {
    return <h3>this is footer </h3>;
  }
}

// ----> THE APP !!!
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <DishList dishes={arrayOfDishes} />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("beetroot"));