const api = {
    getWeather(zip) {
        var url = `https://api.openweathermap.org/data/2.5/weather?zip=#{zip},us`;
        return fetch(url).then((res) => res.json());
    }
}

module.exports = api;