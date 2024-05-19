const express = require("express");
const cors = require("cors");

const userRoutes = require("../routes/user");
const healthRoutes = require("../routes/health");
const externalDataRoutes = require("../routes/external-data");
const dbMongoConnection = require("../database/connection");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT | 3000;

    this.paths = {
      health: "/api/health",
      users: "/api/users",
      externalData: "/api/external-data",
    };

    //Middlewares
    this.middlewares();
    //Rutas
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    //Directorio Public
    this.app.use(express.static("public"));

    // database connection
    dbMongoConnection();
  }

  routes() {
    healthRoutes(this.app);
    userRoutes(this.app);
    externalDataRoutes(this.app);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`
------------------------------------------------------------------
     ------- Servidor Corriendo en el puerto: ${this.port} -----
------------------------------------------------------------------

             `);
    });
  }
}

module.exports = Server;
