// by Y + my additions. Removed the default. We only need 2 lines to start: 
import React from 'react';
import ReactDOM from 'react-dom';

// and css if you like
import './index.css';

import { v4 as uuidv4 } from 'uuid'; 
console.log(uuidv4()); console.log(uuidv4())
//different each time


function HelloUser(props) {

    console.log(`HelloUser > props: `, props);


    let result;
    if (props.age < 18) result = "you can't drive";
    else if (!props.age) result = "how old are you ?"; // me!
    else result = "go ahead";

    return (
        <li key={uuidv4()}> result from HelloUser: &nbsp;
        | hi  &nbsp; | {props.name} | &nbsp; {props.age} &nbsp;
            {/* | This is your key: key={uuidv4()}  */}
        | &nbsp; ID = &nbsp; {props.id} &nbsp;
        | &nbsp; RESULT = &nbsp; {result}
        </li>
    );

}



const users = [
    { name: "users arr > younes", age: 27 },
    { name: "users arr > fernando", },
    { name: "users arr > fernando", age: 12 }
];


class SayHiToMultiplePeopleClass extends React.Component {

    render() {

        console.log(`SayHiToMultiplePeopleClass > this.props: `, this.props)

        const multiplePeople = this.props.people;
        console.log(`const multiplePeople = this.props.people: `, this.props.people)
        // people could be potatoes or squirrels ---> see line 87 !!! 

        const result = multiplePeople
            .map(person => {
                return <HelloUser
                    name={person.name}
                    age={person.age}
                />;
            });
        console.log(`result of SayHiToMultiplePeopleClass: `, result)

        return <ul>
            result from SayHiToMultiplePeopleClass, <br />
            which returns the HelloUser(props) function
            <br /><br />
            {result}
        </ul>;

    }

}



const root = document.getElementById('root')

ReactDOM.render(

    <div id="test">

        <h1> : : week 21 : : react-1 : : <br></br> : : class : : <br></br>: : users exercise : : </h1>
        <h2> : : hello squirrels : : parallel world connection test : : </h2>

        <HelloUser name='younes' age={25} id='test for id' />
        <HelloUser name='fernando' age='24' />  <br /><br />

        <SayHiToMultiplePeopleClass people={users} />

    </div>, root);




/*
Notes VID-1 -- REACT is:
declarative (like picking stuff in a menu), not impreative (going to a kitchen in a restaurant and doing it yourself)
component-based - components are buit independently/separately/they don't know about each other
write anywhere / it can be used for mobile apps :) ---------------------
this is not valid js code, this doesn't run in the browser
How come it can run this and produce hello?
It's because before sending this to the browser React with run it through the Babel.
Babel will convert it to an equuivalent code that can run on the browser!
JSX is the extension of JS that allows to  write html in JS and it's handled by Babel !!!
<HelloUser></HelloUser>  is the same as  <HelloUser/>
    THIS IS OUR COMPONENT USED ---> diffeent syntax but it's the same thing in the lines below
    <HelloUser></HelloUser>  ===   <HelloUser/>
if you want to display sth, you just put it as text
if you want to run sth, you put it in curly braces !!!
so the curly brackets will prevent sth like props.name from ending up like a plain text in the browser
*/