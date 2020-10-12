var express = require('express');
var mysql = require('mysql');
var empresa = express(); 
var oMyConnection = mysql.createConnection({
  host: '35.226.221.48',
  user: 'test',
  port: "3306",
  password: '123456',
    database: 'make_it_yours'   
});

constructor() ; {
  this.getempresa()
  this.Createempresa()
  this.Updateempresa()
  this.Readempresa()
  this.Deleteempresa()
  this.postempresa()
}

Createempresa = () => {
  this.router.post("/", (Dataempresa, response) => { 
          var sSQLCreate = "INSERT INTO empresa (id_empresa, nombre_de_empresa, foto, descripcion, telefono_celular, direccion_en_link, hora_de_apertura, hora_de_cierre, dias_habiles, last_updated) VALUES (NULL, ";
          sSQLCreate += "'" + Dataempresa.nombre_de_empresa + "', ";
          sSQLCreate += "'" + Dataempresa.foto + "', ";
          sSQLCreate += "'" + Dataempresa.descripcion + "', ";
          sSQLCreate += "'" + Dataempresa.telefono_celular + "', ";
          sSQLCreate += "'" + Dataempresa.direccion_en_link + "', ";
          sSQLCreate += "'" + Dataempresa.hora_de_apertura + "', ";
          sSQLCreate += "'" + Dataempresa.hora_de_cierre + "', ";
          sSQLCreate += "'" + Dataempresa.dias_habiles + "', ";
          sSQLCreate += "NOW())";
            
          oMyConnection.query(sSQLCreate, function(oError, oRows, oCols) {
            if(oError) {
              oResponse.write(JSON.stringify({
                error: true,
                error_object: oError
              }));
              oResponse.end();      
            } else {
              var iIDCreated = oRows.insertId;
              oResponse.write(JSON.stringify({
                error: false,
                idCreated: iIDCreated
              }));
              oResponse.end();      
            }    
          });
        },
    response.send("No se encontró negocio")   
    );
};



function Updateempresa(Dataempresa, oResponse) {
  var sSQLUpdate = "UPDATE empresa SET last_updated = NOW() ";
  if(Dataempresa.hasOwnProperty('nombre_de_empresa')) {
    sSQLUpdate += " AND nombre_de_empresa = '" + Dataempresa.nombre_de_empresa + "' ";
  }
  if(Dataempresa.hasOwnProperty('foto')) {
    sSQLUpdate += " AND foto = '" + Dataempresa.foto + "' ";
  }
  if(Dataempresa.hasOwnProperty('descripcion')) {
    sSQLUpdate += " AND descripcion = '" + Dataempresa.descripcion + "' ";
  }
  if(Dataempresa.hasOwnProperty('telefono_celular')) {
    sSQLUpdate += " AND telefono_celular = '" + Dataempresa.telefono_celular + "' ";
  }
  if(Dataempresa.hasOwnProperty('direccion_en_link')) {
    sSQLUpdate += " AND direccion_en_link = '" + Dataempresa.direccion_en_link + "' ";    
  }    
  sSQLUpdate = " WHERE idempresa = '" + Dataempresa.idempresa + "'";
}
if(Dataempresa.hasOwnProperty('hora_de_apertura')) {
  sSQLUpdate += " AND hora_de_apertura = '" + Dataempresa.hora_de_apertura + "' ";    
}
if(Dataempresa.hasOwnProperty('hora_de_cierre')) {
  sSQLUpdate += " AND hora_de_cierre = '" + Dataempresa.hora_de_cierre + "' ";
}
if(Dataempresa.hasOwnProperty('dias_habiles')) {
  sSQLUpdate += " AND dias_habiles= '" + Dataempresa.dias_habiles + "' ";
sSQLUpdate = " WHERE idempresa = '" + Dataempresa.idempresa + "'";

  oMyConnection.query(sSQLUpdate, function(oErrUpdate, oRowsUpdate, oColsUpdate) {
    if(oErrUpdate) {
      oResponse.write(JSON.stringify({ 
        error: true,
        error_object: oErrUpdate
      }));
      oResponse.end();      
    } else {
      oResponse.write(JSON.stringify({
        error: false
      }));
      oResponse.end();
    }
  });
}
function Readempresa(oResponse) {
  var sSQLRead = "SELECT * FROM empresa";
  oMyConnection.query(sSQLRead, function(oError, oRows, oCols) {
    if(oError) {
      oResponse.write(JSON.stringify({
        error: true,
        error_object: oError
      }));
      oResponse.end();
    } else {
      oResponse.write(JSON.stringify({
        error: false,
        data: oRows
      }));
      oResponse.end();            
    }    
  });    
}

function Deleteempresa(oDataempresa, oResponse) {
  var sSQLDelete = "DELETE FROM empresa WHERE idempresa = '" + oDataempresa.idempresa + "'";
  oMyConnection.query(sSQLDelete, function(oErrDelete, oRowsDelete, oColsDelete) {
    if(oErrDelete) {
      oResponse.write(JSON.stringify({
        error: true,
        error_object: oErrDelete
      }));
      oResponse.end();
    } else {
      oResponse.write(JSON.stringify({
        error: false
      }));
      oResponse.end();      
    }    
  });  
}

getempresa = () => {
  this.router.get("/empresas/salones", (request, response) => {
    (async () => {
      const client = new Client(config);
      const { results, fields } = await client.query(
        `SELECT * FROM empresa where id = ${code}`
      );
      if (results !== []) {
        response.status(200).send(results[0]);
      } else {
        response.status(404).send({
          message: "Negocio no encontrado",
        });
      }
      await client.end();
    })().catch(console.error);
  });
};

empresa.post('/empresas/salones', function(oReq, oRes) {
  var oDataOP = {};
  var sOP = '';
  
  oDataOP = oReq.body.data_op;
  sOP = oReq.body.op;
  
  switch(sOP) {
    
    case 'CREATE':      
     Createempresa(oDataOP, oRes);
    break;
    
    case 'READ':
     Readempresa(oRes);
    break;
    
    case 'UPDATE':
     Updateempresa(oDataOP, oRes);
    break;
    
    case 'DELETE':
     Deleteempresa(oDataOP, oRes);
    break;
    
    default:
     oRes.write(JSON.stringify({ 
       error: true, 
       error_message: 'Debes proveer los datos solicitados' 
     }));
     oRes.end();
    break;
    
  }   
});

empresa.listen(3000, function(oReq, oRes) {
  console.log("Servicios para empresa corriendo en puerto 3000");   
});