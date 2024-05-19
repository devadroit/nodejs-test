const { response, request } = require("express");

const { handleHttpError } = require("../utils/handleHttpError");

const getHealth = async (req = request, res = response) => {
  try {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  } catch (error) {
    handleHttpError(res, error.message);
  }
};

module.exports = {
  getHealth,
};
