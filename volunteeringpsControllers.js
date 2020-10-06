const { Router, response } = require ("express");

class VolunteeringpsController {
    router = Router();

    constructor() {
        this.getvolunteeringps();
        //this.createvolunteeringps();
}


getvolunteeringps = () => {
    this.router.get("/volunteeringps/:code", (request, response) => {
      var code = request.params.code;
      var volunteeringps = {};
      var statusCode = 200;

      if (code == "07GESA") {
        volunteeringps = {
          "name": "Glasswing internacional",
          "contacto": "nloucel@glasswing.org",
        };
      } else if (code == "01TESA") {
        volunteeringps = {
        "name": "TECHO El Salvador",
        "contacto": "erick.hernandez@techo.org",
        };
      } else if (code == "07FDSESA") {
        volunteeringps = {
          "name": "Fabrica de sonrisas",
          "contacto": "fds.es.info@gmail.com",
      };
      } else if (code == "90FTESA") {
      volunteeringps = {
        "name": "Fusate",
        "contacto": "info@fusate.org",
      };
      } else if (code == "20LDIESA") {
      volunteeringps = {
        "name": "Fusate",
        "contacto": "kromero@ldielsalvador.org",
      };
     } else {
      volunteeringps = {
        "name": "Not found",
      };
      statusCode = 404;

      response.status(200).send(volunteeringps)
  };
});
     
};
}

const volunteeringpsRouter = new VolunteeringpsController();
module.exports = volunteeringpsRouter.router;