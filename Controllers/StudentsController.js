const { Router } = require("express");
const { Client } = require("@mysql.js/mysql");

class StudentsController {
  //Crear el origen de las rutas
  router = Router();
  config = {
    host: "34.74.160.208",
    port: "3306",
    user: "root",
    password: "dRJkHctJyq1tdB",
    database: "wordpress",
  };

  //Hace reales las rutas
  constructor() {
    this.getStudents();
    this.createStudent()
  }

  //Se crea la funcion
  getStudents = () => {
    //Se le asigna un verbe a la ruta
    this.router.get("/", (request, response) => {
      (async () => {
        //Aplicamos la configuracion
        const client = new Client(config);
        //Metemos el resultado en variables
        const { results, fields } = await client.query(
          `SELECT * FROM alumnos where id = ${code}`
        );
    
        /*
          1. Evaluar si el resultado es vacio
          2. De acuerdo al resultado regresamos una respuesta
        */
        if (results !== []) {
          //Como solo queremos el primer registro mandamos el 0
          response.status(200).send(results[0]);
        } else {
          //Como no viene nada, le decimos al frontend que no encontramos nada
          response.status(404).send({
            message: "Alumno no encontrado",
          });
        }
        await client.end();
      })().catch(console.error);
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

/ -> Raiz Principal

/students -> Primer nivel
/students/juniors/grades?age=2020 -> Segundo nivel


/businesses -> Primer nivel
