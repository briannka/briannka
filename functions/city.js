const querystring = require("querystring");
const geonames = require('../src/server/geonames');

exports.handler = async function(event, context) {
    const { searchedCity } = querystring.parse(event.body);

    const callGeonames = geonames.getCity(searchedCity).then((result) => {
            return {
                statusCode: 200,
                body: JSON.stringify(result),
            };
        })
        .catch(err => {
            return {
                statusCode: 404,
                body: JSON.stringify(err)
            }
        });
    return {
        statusCode: 200,
        body: JSON.stringify(callGeonames)
    }

};