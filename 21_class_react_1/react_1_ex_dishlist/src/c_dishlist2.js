import React from "react";
import { v4 as uuidv4 } from 'uuid';


function DishName({ name }) {
  return (
    <h3
      style={{ margin: 0, padding: 0, color: "rgb(194, 165, 181)" }}>
      Dish name: {name}
    </h3>
  )
}

function EachDish({ name, description, date }) {
  return (
    <>
      <DishName name={name} />
      Description: {description} <br />
      Date: {date} <br />
    </>
  );
}

function DishList2(props) {

  console.log(`\nVERSION 2\n `);
  console.log(`props: `, props);                               // {dishes: Array(3)}
  console.log(`props.dishes2: `, props.dishes2);               // (3) [{…}, {…}, {…}]
  console.log(`props.dishes2[1]: `, props.dishes2[1])          // {id: 2, name: "Grilled Hamsters", description: "with fur", date: "2021-03-10"}
  console.log(`props.dishes2.keys: `, props.dishes2.keys);     // ƒ keys() { [native code] } 
  console.log(`props.dishes2.length: `, props.dishes2.length); // 3
  console.log(`uuidv4()\n` + uuidv4())                         // 18fdb2a8-3a7b-4ffb-b54a-d3ab8ff67ccd 
  console.log(`uuidv4()\n` + uuidv4())                         // another unique key ...

  return (
    <ul key={uuidv4()}> DISH LIST 2 <br /> <br />
      {
        props.dishes2.map((aDish) => {
          return (
            <li key={uuidv4()}>
              <EachDish {...aDish} /> <br />
            </li>
          )
        })
      }
    </ul>
  );
}

export default DishList2