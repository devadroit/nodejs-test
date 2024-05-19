//const { Router } = require("express");
const express = require("express");
const { getHealth } = require("../controllers/health");

const router = express.Router();

router.get("/", getHealth);

module.exports = (app) => app.use('/api/health', router);
