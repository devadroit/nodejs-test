const axios = require("axios");

const getWeatherFromCity = async (city) => {
  // I stole this token from openweathermap, there a easiest way to have access to their API without a lot of problems.
  const _url = `https://openweathermap.org/data/2.5/find?q=${city}&sort=population&appid=439d4b804bc8187953eb36d2a8c26a02`;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: _url,
  };

  return await axios
    .request(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};
exports.getWeatherFromCity = getWeatherFromCity;
