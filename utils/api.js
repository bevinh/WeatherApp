let config = require('./config.js');

const api = {
    getWeather(zip) {
        var url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${config.apiKey}`;
        console.log(url);
        return fetch(url).then((res) => res.json());
    }
}

module.exports = api;