import React from 'react';
import { DateTime } from "luxon";

// Luxon  
// https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html
// const locale = "es-ES";
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// var localeDate = DateTime
//   .local(year, month, day)
//   .setLocale(locale)
//   .toLocaleString();

// const now = DateTime.now();
// console.log(now.loc)
// console.log(now.c.year)
// console.log(DateTime.fromISO("2017-05-15")) 
const dt = DateTime.now();

function Header() {
  return (
    <header>
      <h1> : : week 21 : : react-1 : : <br />
           : : homework : : <br />
           : : todo-list exercise : : <br />
           : : today is {dt.toLocaleString(DateTime.DATE_FULL)} : :  <br />
      </h1>
      <h2>: : instructions : : &nbsp;
        <a href="https://github.com/HackYourFuture-CPH/React/blob/master/week1/homework.md#basic-react--props">
          here
           </a>
           &nbsp; : :
      </h2>
    </header>
  );
}

export default Header;