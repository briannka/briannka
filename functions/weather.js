const fetch = require("node-fetch");
const querystring = require("querystring");

const secretKey = 'a53b81b6e6aaa6c4367dfe55c5001474';

exports.handler = async function(event, context) {
    const { lat, lon } = querystring.parse(event.body);

    const weatherForecastUrl = `https://api.darksky.net/forecast/${secretKey}/${lat},${lon}`;

    const request = fetch(weatherForecastUrl, { headers: { Accept: "application/json" } }).then((response) => ({
        statusCode: 200,
        body: JSON.stringify(response),
    })).catch(error => ({
        statusCode: 404,
        body: `There was an ${error}`
    }))
    return {
        statusCode: 200,
        body: JSON.stringify(request)
    }
};