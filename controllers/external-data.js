const { response, request } = require("express");

const { handleHttpError } = require("../utils/handleHttpError");
const { getWeatherFromCity } = require("../utils/getWeatherFromCity");

const getExternalData = async (req = request, res = response) => {
  try {
    const { city } = req.query;
    if (city == null) throw new Error("City is required.");

    const weatherResp = await getWeatherFromCity(city);
    const weather = weatherResp.list[0];
    const resp = {
      city: weather.name,
      temperature: (weather.main.temp - 273.15).toFixed(2),
      weather: weather.weather[0].main,
    };

    res.json(resp);
  } catch (error) {
    handleHttpError(res, error.message);
  }
};

module.exports = {
  getExternalData,
};
