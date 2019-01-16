import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import CityInfo from '../../components/CityInfo/CityInfo';

class WeatherContent extends Component {
    state = { 
        cities: {
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
     }

   async componentDidMount() {
        let zipcode1 = this.state.cities.city_info_1.zipcode;
        let zipcode2 = this.state.cities.city_info_2.zipcode;

        const dataRes1 = await fetch("http://api.wunderground.com/api/" + process.env.REACT_APP_WEATHER_API_KEY +"/geolookup/conditions/q/"+ zipcode1 +".json");
        const data1 = await dataRes1.json();

        const dataRes2 = await fetch("http://api.wunderground.com/api/" + process.env.REACT_APP_WEATHER_API_KEY +"/geolookup/conditions/q/"+ zipcode2 +".json");
        const data2 = await dataRes2.json();

        this.setState({cities: {
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
        }});
    }

    render() {
        return (
            <Aux>
                <CityInfo 
                    city={this.state.cities.city_info_1.city}
                    state={this.state.cities.city_info_1.state}
                    zip={this.state.cities.city_info_1.zipcode}
                    tempf={this.state.cities.city_info_1.temp_f}
                    tempc={this.state.cities.city_info_1.temp_c}
                    weather={this.state.cities.city_info_1.weather}
                    icon={this.state.cities.city_info_1.icon}
                />
                <CityInfo 
                    city={this.state.cities.city_info_2.city}
                    state={this.state.cities.city_info_2.state}
                    zip={this.state.cities.city_info_2.zipcode}
                    tempf={this.state.cities.city_info_2.temp_f}
                    tempc={this.state.cities.city_info_2.temp_c}
                    weather={this.state.cities.city_info_2.weather}
                    icon={this.state.cities.city_info_2.icon}
                />
            </Aux>
        );
    }
}

export default WeatherContent;