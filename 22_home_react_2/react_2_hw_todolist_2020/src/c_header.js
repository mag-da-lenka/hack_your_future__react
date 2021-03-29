import React from 'react';

// DATE FORMATTING
const year = new Date().getFullYear();
const months_names = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const month_name = months_names[new Date().getMonth()];
const days_names = ["Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday"];
const day_name = days_names[new Date().getDay()];
const day_number = appendLeadingZeroes(new Date().getDate());
const hours = appendLeadingZeroes(new Date().getHours());
const minutes = appendLeadingZeroes(new Date().getMinutes());
const seconds = appendLeadingZeroes(new Date().getSeconds());
function appendLeadingZeroes(n) { if (n <= 9) { return "0" + n; } return n }
const myDateFormat_month_name_line1 = `${day_name}, ${day_number} ${month_name} ${year}`;
const myDateFormat_month_name_line2 = `${hours}:${minutes}:${seconds} GMT+0100`;

function Header() {
  return (
    <header>
      <h1>React-2 homework /Magda</h1> <br />
      <p className="header-date">   Today is &nbsp;
        {myDateFormat_month_name_line1}<br /><br />
        {myDateFormat_month_name_line2}
      </p>
      <p className="header-date"> instructions:
        <a href="https://github.com/HackYourFuture-CPH/React/blob/master/week2/homework.md">
          here
        </a>
      </p>
    </header>
  );
}

export default Header;