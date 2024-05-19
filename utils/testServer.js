require('dotenv').config();

const express = require("express");
const supertest = require("supertest");
const dbMongoConnection = require("../database/connection");

function testServer(route) {
  const app = express();
  app.use(express.json());
  dbMongoConnection();
  route(app);
  return supertest(app);
}

module.exports = testServer;
