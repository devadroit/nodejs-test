const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT | 3000;

    this.paths = {
      health: "/api/health",
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
  }

  routes() {
    this.app.use(this.paths.health, (req, res) => {
      res.json({ status: "ok", timestamp: new Date().toISOString() });
    });
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
