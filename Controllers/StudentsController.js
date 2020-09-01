const { Router } = require("express");

class StudentsController {
  router = Router();

  constructor() {
    this.getStudents();
    this.createStudent()
  }

  getStudents = () => {
    this.router.get("/", (request, response) => {
      //Your code
      response.send("Hello World");
    });
  };

  createStudent = () => {
    this.router.post("/", (request, response) => {
      //Your code
      response.send("Hello World");
    });
  };
}

const studentsRouter = new StudentsController();
module.exports = studentsRouter.router;
