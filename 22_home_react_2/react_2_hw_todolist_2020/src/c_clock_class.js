import React from 'react';

// // DATE FORMATTING
// const year = new Date().getFullYear();
// const months_names = ['January', 'February', 'March', 'April', 'May',
//     'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const month_name = months_names[new Date().getMonth()];
// const days_names = ["Sunday", "Monday", "Tuesday",
//     "Wednesday", "Thursday", "Friday", "Saturday"];
// const day_name = days_names[new Date().getDay()];
// const day_number = appendLeadingZeroes(new Date().getDate());
// const hours = appendLeadingZeroes(new Date().getHours());
// const minutes = appendLeadingZeroes(new Date().getMinutes());
// const seconds = appendLeadingZeroes(new Date().getSeconds());
// function appendLeadingZeroes(n) { if (n <= 9) { return "0" + n; } return n }
// let myDateFormat_month_name_line1 = `${day_name}, ${day_number} ${month_name} ${year}`;
// let myDateFormat_month_name_line2 = `${hours}:${minutes}:${seconds} GMT+0100`;



class ClockClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div className="clock">
                <h2> clock : : class </h2> <br />
                {/* Time <br /><br /> */}
                {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeStringhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString */}
                {this.state.date.toLocaleTimeString('ko-KR')}<br /> 
                {this.state.date.toLocaleTimeString('en-US', { timeZone: 'UTC', timeZoneName: 'short' })}<br />
                {this.state.date.toLocaleTimeString('ar-EG')}<br />
                {this.state.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} <br />
                {this.state.date.toLocaleTimeString('en-GB')}<br />
                {this.state.date.toLocaleTimeString(['ban', 'id'])}<br />
                {this.state.date.toLocaleTimeString('en-US', { hour12: false })}<br />
                {/* <span>&nbsp; {this.state.date.toLocaleTimeString('en-US')}</span><br /> */}
            </div>
        );
    }

}

// console.log(new Date().toString())
// console.log(new Date().toLocaleTimeString())


export default ClockClass