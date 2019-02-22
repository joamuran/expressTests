const express = require('express')
const path=require('path')
const app=express()
//const cors = require('cors');

const comarques=require("./APIExemples/comarques/comarques.js");

// https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use(express.static(path.join(__dirname, 'public')));


/* Rutes per a l'exemple de les províncies */
app.get("/api/provincies",  function(req, res){
    console.log(comarques.getProvincies());
    res.send(comarques.getProvincies());
})

app.get("/api/comarques/:provincia", function(req, res){
    res.send(comarques.getComarques(req.params.provincia));
})



app.listen(8000);

