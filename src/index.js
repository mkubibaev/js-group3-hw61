import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainContainer from "./containers/MainContainer/MainContainer";
import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.eu/rest/v2';


ReactDOM.render(<MainContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
