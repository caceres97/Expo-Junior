const { Router } = require("express");
const { Client } = require("@mysql.js/mysql");
class VolunteeringpsController {
  router = Router();
  config = {
    host: "179.51.60.189",
    port: "3306",
    user: "root",
    password: "dRJkHctJyq1tdB",
    database: "wordpress",
  }
  constructor() {
    this.getvolunteeringps();
    //this.createvolunteeringps();
  };

}

  getvolunteeringps = () => {
    this.router.get("/:code", (request, response) => {
      (async () => {
        //Aplicamos la configuracion
        const client = new Client(config);
        //Metemos el resultado en variables
        const { results, fields } = await client.query(
          `SELECT * FROM volunteeringps where id = ${code}`
        );
    
        if (results !== []) {
          response.status(200).send(results[0]);
        } else {
          
          response.status(404).send({
            message: "programa de voluntariado no encontrado",
          });
        }
        await client.end();
      })().catch(console.error);
    });
}

const volunteeringpsRouter = new VolunteeringpsController();
module.exports = volunteeringpsRouter.router;
