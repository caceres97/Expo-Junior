const { Router, response } = require ("express");

class VolunteersController {
    router = Router ();

    constructor() {
        this.getsVolunteers();
        this.createVolunteer()
}

getsVolunteers = () => {
    this.router.get("/", (request, response) => {
    response.send("helloworld");
  });
 };

 createVolunteers = () => {
    this.router("/", (request, response) => {
    response.send("helloworld");
  });
 };
}

const VolunteersRouter = new VolunteersControllers();
module.exports = VolunteersRouter.router;