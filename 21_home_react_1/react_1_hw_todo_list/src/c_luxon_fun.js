import React from 'react';
import { DateTime } from "luxon";

// Luxon  
// https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html 
// https://moment.github.io/luxon/index.html
const locale = "es-ES";
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var localeDate = DateTime
    .local(year, month, day)
    .setLocale(locale)
    .toLocaleString();

const now = DateTime.now();
console.log(now.loc)
console.log(now.c.year)
console.log(DateTime.fromISO("2017-05-15"))

const dt = DateTime.now();
const m_long = {
    month: 'long',
    day: 'numeric'
};

function Luxon() {

    return (
        <div>
            <h2>: : luxon fun : : &nbsp; : : </h2>
            <ul>
                <li>01 : : today is {localeDate} : :</li>
                <li>02 : : today is {now.c.day} {now.c.month} {now.c.year}</li>
                <li>03 : : today is {dt.toLocaleString(DateTime.DATETIME_MED)}</li>
                <li>04 : : today is {dt.setLocale('en-GB').toLocaleString(m_long)}</li>
                <li>05 : : today is {dt.toLocaleString(DateTime.DATE_FULL)}</li>
            </ul>
        </div>
    );
}

export default Luxon;