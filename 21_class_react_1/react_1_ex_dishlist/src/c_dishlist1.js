import React from "react";
import { v4 as uuidv4 } from 'uuid';


function DishList1(props) {

    console.log(`\nVERSION 1\n `);
    console.log(`props: `, props);                               // {dishes: Array(3)}
    console.log(`props.dishes1: `, props.dishes1);               // (3) ["dish 1", "dish 2", "dish 3"]
    console.log(`props.dishes1[1]: `, props.dishes1[1])          // dish 2
    console.log(`props.dishes1.keys: `, props.dishes1.keys);     // ƒ keys() { [native code] } 
    console.log(`props.dishes1.length: `, props.dishes1.length); // 3
    console.log(`uuidv4()\n` + uuidv4())                         // 18fdb2a8-3a7b-4ffb-b54a-d3ab8ff67ccd 
    console.log(`uuidv4()\n` + uuidv4())                         // another unique key ...

    const dishesComponents1 = props.dishes1 // === arrayOfDishes1
        .map((dish) => {
            return (
                <li key={uuidv4()}>
                    {dish}
                </li>
            )
        });

    return (
        <ul> DISH LIST 1 <br /><br />
            {dishesComponents1}
        </ul>
    )

}

export default DishList1