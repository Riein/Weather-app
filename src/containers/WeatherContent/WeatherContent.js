import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import CityInfo from '../../components/CityInfo/CityInfo';
import classes from './WeatherContent.module.css';

class WeatherContent extends Component {
    state = { 
        city_info_1: {
            zipcode: 90210,
            city: '',
            state: '',
            temp_f: '',
            temp_c: '',
            weather: '',
            icon: ''
        },
        city_info_2: {
            zipcode: 60605,
            city: '',
            state: '',
            temp_f: '',
            temp_c: '',
            weather: '',
            icon: ''
        }
     }

   async componentDidMount() {
        let zipcode1 = this.state.city_info_1.zipcode;
        let zipcode2 = this.state.city_info_2.zipcode;

        const dataRes1 = await fetch("http://api.wunderground.com/api/" + process.env.REACT_APP_WEATHER_API_KEY +"/geolookup/conditions/q/"+ zipcode1 +".json");
        const data1 = await dataRes1.json();

        const dataRes2 = await fetch("http://api.wunderground.com/api/" + process.env.REACT_APP_WEATHER_API_KEY +"/geolookup/conditions/q/"+ zipcode2 +".json");
        const data2 = await dataRes2.json();

        this.setState({
            city_info_1: {
                city: data1['location']['city'],
                state: data1['location']['state'],
                zipcode: data1['location']['zip'],
                temp_f: data1['current_observation']['temp_f'],
                temp_c: data1['current_observation']['temp_c'],
                weather: data1['current_observation']['weather'],
                icon: data1['current_observation']['icon']
            },
            city_info_2: {
                city: data2['location']['city'],
                state: data2['location']['state'],
                zipcode: data2['location']['zip'],
                temp_f: data2['current_observation']['temp_f'],
                temp_c: data2['current_observation']['temp_c'],
                weather: data2['current_observation']['weather'],
                icon: data2['current_observation']['icon']
            },
        });
    }

    handleNewCity = (newZip, oldZip) => {
        let c = (oldZip === this.state.city_info_1.zipcode) ? 'city_info_1' : 'city_info_2';
        
        fetch("http://api.wunderground.com/api/" + process.env.REACT_APP_WEATHER_API_KEY +"/geolookup/conditions/q/"+ newZip +".json")
        .then((response) => response.json())
        .then((data) => {

            let newCity = {
                city: data['location']['city'],
                state: data['location']['state'],
                zipcode: data['location']['zip'],
                temp_f: data['current_observation']['temp_f'],
                temp_c: data['current_observation']['temp_c'],
                weather: data['current_observation']['weather'],
                icon: data['current_observation']['icon']
            }
            let obj = {};
            obj[c] = newCity;

            this.setState(obj);
        }).catch((err) => alert("Request failed: Please input a correct zipcode!"));

    }

    render() {
        return (
            <Aux className={classes.WeatherContent}>
                <div className={classes.Container}>
                <CityInfo 
                    city={this.state.city_info_1.city}
                    state={this.state.city_info_1.state}
                    zip={this.state.city_info_1.zipcode}
                    tempf={this.state.city_info_1.temp_f}
                    tempc={this.state.city_info_1.temp_c}
                    weather={this.state.city_info_1.weather}
                    icon={this.state.city_info_1.icon}
                    handleCity={this.handleNewCity}
                />
                <CityInfo 
                    city={this.state.city_info_2.city}
                    state={this.state.city_info_2.state}
                    zip={this.state.city_info_2.zipcode}
                    tempf={this.state.city_info_2.temp_f}
                    tempc={this.state.city_info_2.temp_c}
                    weather={this.state.city_info_2.weather}
                    icon={this.state.city_info_2.icon}
                    handleCity={this.handleNewCity}
                />
                </div>
            </Aux>
        );
    }
}

export default WeatherContent;