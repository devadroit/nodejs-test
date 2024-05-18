const express = require("express");
const cors = require("cors");

const userRoutes = require("../routes/user");
const externalData = require("../routes/external-data");
const dbMongoConnection = require("../database/connection");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT | 3000;

    this.paths = {
      health: "/api/health",
      users: "/api/users",
      externalData: "/api/external-data"
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
    this.app.use(this.paths.health, (req, res) => {
      res.json({ status: "ok", timestamp: new Date().toISOString() });
    });

    this.app.use(this.paths.users, userRoutes);
    this.app.use(this.paths.externalData, externalData);
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
