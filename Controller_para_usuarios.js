var express = require('express');
var mysql = require('mysql');
var oApp = express(); 
var oMyConnection = mysql.createConnection({
   host: '127.0.0.1',
   user: 'root',
   password: '1234',
     database: 'usuarios'   
});


function CreateUser(DataUser, oResponse) {  
  var sSQLCreate = "INSERT INTO User (id_User, nombre, apellido, correo_electrónico, contraseña, last_updated) VALUES (NULL, ";
  sSQLCreate += "'" + DataUser.nombre + "', ";
  sSQLCreate += "'" + DataUser.apellido + "', ";
  sSQLCreate += "'" + DataUser.correo_electrónico + "', ";
  sSQLCreate += "'" + DataUser.contraseña + "', ";
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
}

function UpdateUser(DataUser, oResponse) {
  var sSQLUpdate = "UPDATE User SET last_updated = NOW() ";
  if(DataUser.hasOwnProperty('nombre')) {
    sSQLUpdate += " AND nombre = '" + DataUser.nombre + "' ";
  }
  if(DataUser.hasOwnProperty('apellido')) {
    sSQLUpdate += " AND apellido = '" + DataUser.apellido + "' ";
  }
  if(DataUser.hasOwnProperty('correo_electrónico')) {
    sSQLUpdate += " AND correo_electrónico = '" + DataUser.correo_electrónico + "' ";
  }
  if(DataUser.hasOwnProperty('contraseña')) {
    sSQLUpdate += " AND contraseña = '" + DataUser.contraseña + "' ";    
  }    
  sSQLUpdate = " WHERE idUser = '" + DataUser.idUser + "'";

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

function ReadUser(oResponse) {
    var sSQLRead = "SELECT * FROM User";
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
  
oApp.post('/User', function(oReq, oRes) {
    var oDataOP = {};
    var sOP = '';
    
    oDataOP = oReq.body.data_op;
    sOP = oReq.body.op;
    
    switch(sOP) {
      
      case 'CREATE':      
       CreateUser(oDataOP, oRes);
      break;
      
      case 'READ':
       ReadUser(oRes);
      break;
      
      case 'UPDATE':
       UpdateUser(oDataOP, oRes);
      break;
      
      case 'DELETE':
       DeleteUser(oDataOP, oRes);
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