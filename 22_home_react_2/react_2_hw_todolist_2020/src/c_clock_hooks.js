import React from 'react';

const ClockHooks = () => {

    const [date, setDate] = React.useState(new Date());

    function tick() {
        setDate(new Date());
    }

    React.useEffect(() => {

        let ticktock = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(ticktock);
        };
        
    });

    return (
        <div className="clock">
            <h2> clock : : hooks </h2> <br />
            {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeStringhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString */}
            {date.toLocaleTimeString('ko-KR')}<br />
            {date.toLocaleTimeString('en-US', { timeZone: 'UTC', timeZoneName: 'short' })}<br />
            {date.toLocaleTimeString('ar-EG')}<br /> 
            {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} <br />
            {date.toLocaleTimeString('en-GB')}<br />
            {date.toLocaleTimeString(['ban', 'id'])}<br />
            {date.toLocaleTimeString('en-US', { hour12: false })}<br />
            {/* <span>&nbsp; {date.toLocaleTimeString('en-US')}</span><br /> */}
        </div>
    );

}

export default ClockHooks