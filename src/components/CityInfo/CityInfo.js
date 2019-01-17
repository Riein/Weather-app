import React, {Component} from 'react';

import classes from './CityInfo.module.css';

class CityInfo extends Component {

    state = {
        input: ''
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }

    render() {
    let iconURL = 'https://icons.wxug.com/i/c/j/' + this.props.icon + '.gif';
        return (
        <div className={classes.CityInfo}>
            <h1>Weather in {this.props.city}</h1>
            <p>City: {this.props.city}</p>
            <p>State: {this.props.state}</p>
            <p>Zip: {this.props.zip}</p>
            <p>Temperature (fahrenheit): {this.props.tempf}</p>
            <p>Temperature (celsius): {this.props.tempc}</p>
            <p>Weather: {this.props.weather}</p>
            <img src={iconURL} alt={this.props.icon} />
            <p> </p>
            <input type="text" defaultValue={this.props.zip} onChange={this.handleChange}/>
            <button onClick={() => {
                (this.state.input.length === 5) ?
                this.props.handleCity(this.state.input, this.props.zip) : alert("Input has incorrect length");
            }
            }>Search</button>
        </div>
        )
    }
};

export default CityInfo;