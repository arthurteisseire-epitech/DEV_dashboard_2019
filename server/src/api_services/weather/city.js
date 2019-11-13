const axios = require('axios');

const ROOT_URL = 'https://api.openweathermap.org/data/2.5/weather';

module.exports = (req, res) => {

    const params = {
        appid: process.env.WEATHER_API_KEY,
        q: req.query.cityname
    };

    return axios.get(ROOT_URL, {params: params})
        .then((response) => {
            res.json(response.data);
        }).catch((error) => {
            console.log(error);
        });
};
