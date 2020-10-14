const { Router, response } = require("express");

class VolunteeringpsController {
  router = Router();

  config = {
    host: "192.168.1.179",
    port: "3306",
    user: "pomaadmin",
    password: "Sup3r@te",
    database: "wordpress",
  };

  constructor() {
    this.getvolunteeringps();
    this.createvolunteeringps();
  }


  getvolunteeringps = () => {
    this.router.get("/:code", (request, response) => {
      // var code = request.params.code;
      //var volunteeringps = {};
      //var statusCode = 200;
      (async () => {

        const client = new Client(config);

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
  };

  createvolunteeringps = () => {
    this.router.post("/volumteeringps", (request, response) => {
      var volunteeringps = request.body;
      var statusCode = 200;

      (async () => {
        const client = new Client(config);
        const { result, fields } = await client.query(
          `INSERT INTO volunteeringps (name, contact)
      VALUES ("${volunteeringps.name}", "${volunteeringps.contact}"`);
        response.status(statusCode).send({
          message: "Programa de voluntariado agregado con exito"
        });
        await client.end();
      })().catch(console.error);
    });
  };
}

const volunteeringpsRouter = new VolunteeringpsController();
module.exports = volunteeringpsRouter.router;
