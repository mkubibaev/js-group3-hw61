import React, {Component} from 'react';
import axios from 'axios';

class Country extends Component {
    state = {
        loadedCountry: null,
        borders: []
    };

    componentDidUpdate(prevProps) {
        if (this.props.countryCode) {
            if (prevProps.countryCode !== this.props.countryCode) {
                axios.get('/alpha/' + this.props.countryCode).then(response => {
                    this.setState({loadedCountry: response.data});
                    return Promise.all(response.data.borders.map(border => {
                        return axios.get('/alpha/' + border).then(country => {
                            return country.data.name;
                        })
                    }))
                }).then(borders => {
                    this.setState({borders});
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }

    render() {
        if (!this.state.loadedCountry) return (
            <div className="country-info">
                <p>Choose the country</p>
            </div>
        );

        return (
            <div className="country-info">
                <h1>{this.state.loadedCountry.name}</h1>
                <p>Capital: {this.state.loadedCountry.capital}</p>
                <p>Population: {this.state.loadedCountry.population}</p>

                <strong>borders:</strong>
                <ul>
                {this.state.borders.map((border, index) => (
                    <li key={index}>{border}</li>
                ))}
                </ul>

            </div>
        );
    }
}

export default Country;