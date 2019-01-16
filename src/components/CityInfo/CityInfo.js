import React from 'react';

import classes from './CityInfo.module.css';

const CityInfo = (props) => {
    let iconURL = 'https://icons.wxug.com/i/c/j/' + props.icon + '.gif';
    return (
    <div className={classes.CityInfo}>
        <h1>Weather in {props.city}</h1>
        <p>City: {props.city}</p>
        <p>State: {props.state}</p>
        <p>Zip: {props.zip}</p>
        <p>Temperature (fahrenheit): {props.tempf}</p>
        <p>Temperature (celsius): {props.tempc}</p>
        <p>Weather: {props.weather}</p>
        <img src={iconURL} alt={props.icon} />
    </div>
    )
};

export default CityInfo;