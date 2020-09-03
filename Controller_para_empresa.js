var express = require('express');
var mysql = require('mysql');
var oApp = express(); 
var oMyConnection = mysql.createConnection({
   host: '127.0.0.1',
   user: 'root',
   port: "3306",
   password: '1234',
     database: 'negocios'   
});

function Createnegocio(Datanegocio, oResponse) {  
  var sSQLCreate = "INSERT INTO negocio (id_negocio, nombre_del_negocio, servicio_o_producto, teléfono, correo_electrónico, contraseña, dirección, last_updated) VALUES (NULL, ";
  sSQLCreate += "'" + Datanegocio.nombre_del_negocio + "', ";
  sSQLCreate += "'" + Datanegocio.servicio_o_producto + "', ";
  sSQLCreate += "'" + Datanegocio.teléfono + "', ";
  sSQLCreate += "'" + Datanegocio.correo_electrónico + "', ";
  sSQLCreate += "'" + Datanegocio.contraseña + "', ";
  sSQLCreate += "'" + Datanegocio.dirección + "', ";
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

function Updatenegocio(Datanegocio, oResponse) {
  var sSQLUpdate = "UPDATE negocio SET last_updated = NOW() ";
  if(Datanegocio.hasOwnProperty('nombre_del_negocio')) {
    sSQLUpdate += " AND nombre_del_negocio = '" + Datanegocio.nombre_del_negocio + "' ";
  }
  if(Datanegocio.hasOwnProperty('servicio_o_producto')) {
    sSQLUpdate += " AND servicio_o_producto = '" + Datanegocio.servicio_o_producto + "' ";
  }
  if(Datanegocio.hasOwnProperty('teléfono')) {
    sSQLUpdate += " AND teléfono = '" + Datanegocio.teléfono + "' ";
  }
  if(Datanegocio.hasOwnProperty('correo_electrónico')) {
    sSQLUpdate += " AND correo_electrónico = '" + Datanegocio.correo_electrónico + "' ";
  }
  if(Datanegocio.hasOwnProperty('contraseña')) {
    sSQLUpdate += " AND contraseña = '" + Datanegocio.contraseña + "' ";    
  }    
  sSQLUpdate = " WHERE idnegocio = '" + Datanegocio.idnegocio + "'";
}
if(Datanegocio.hasOwnProperty('dirección')) {
  sSQLUpdate += " AND dirección = '" + Datanegocio.dirección + "' ";    
    
sSQLUpdate = " WHERE idnegocio = '" + Datanegocio.idnegocio + "'";
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
function Readnegocio(oResponse) {
  var sSQLRead = "SELECT * FROM negocio";
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

oApp.post('/negocio', function(oReq, oRes) {
  var oDataOP = {};
  var sOP = '';
  
  oDataOP = oReq.body.data_op;
  sOP = oReq.body.op;
  
  switch(sOP) {
    
    case 'CREATE':      
     Createnegocio(oDataOP, oRes);
    break;
    
    case 'READ':
     Readnegocio(oRes);
    break;
    
    case 'UPDATE':
     Updatenegocio(oDataOP, oRes);
    break;
    
    case 'DELETE':
     Deletenegocio(oDataOP, oRes);
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