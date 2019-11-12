// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from 'axios'

let appid = '5513d12e678b081b98774d41aad8e9ba'

export default function ApiWeatherGetInfoFromCity(cityname) {
    return axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ cityname + '&appid=' + appid, {
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log('pas super : ' + error);
    });
}