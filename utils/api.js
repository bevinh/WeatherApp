let config = require('./config.js');

const api = {
    getLocation(zip){
      var url = `https://api.wunderground.com/api/182a876baa46c3cf/geolookup/q/${zip}.json`
       return fetch(url).then((res) => res.json());
    },
    getWeather(state, city) {

        var url = `https://api.wunderground.com/api/${config.apiKey}/conditions/q/${state}/${city}.json`;

        return fetch(url).then((res) => res.json());

    }
}

module.exports = api;