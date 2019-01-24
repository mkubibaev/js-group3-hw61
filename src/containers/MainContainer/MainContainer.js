import React, {Component} from 'react';
import axios from 'axios';
import Country from "../../components/Country/Country";

const COUNTRIES_URL = '/all?fields=name;alpha3Code';

class MainContainer extends Component {

    state = {
        countries: [],
        selectedCountryCode: null,
    };

    componentDidMount() {

        axios.get(COUNTRIES_URL).then(response => {
            this.setState({countries: response.data});
        });
    }

    countrySelectedHandler = countryCode => {
        this.setState({selectedCountryCode: countryCode});
    };

    render() {
        return (
            <div className="container">
                <ul className="country-list">
                    {this.state.countries.map(country => (
                        <li
                            key={country.name}
                            onClick={() => this.countrySelectedHandler(country.alpha3Code)}
                        >{country.name}</li>
                    ))}
                </ul>
                <Country countryCode={this.state.selectedCountryCode}/>
            </div>
        );
    }
}

export default MainContainer;