export function postReq() {
    app.post("/city", (req, res) => {
    const searchedCity = req.body.city;
    cityData.city = searchedCity;
    geonames
      .getCity(searchedCity)
      .then( (result) => {
        res.send(JSON.stringify(result));
      })
      .catch(err => {
        const response = null;
        res.status(404).send(JSON.stringify(response));
      });
  });
}