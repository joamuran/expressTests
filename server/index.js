const express = require('express')
const os = require('os');
const path=require('path')
const body_parser = require('body-parser');
const app=express()


function getIpAddresses(){
    let ifaces = os.networkInterfaces();
    let ret=[];
    

    Object.keys(ifaces).forEach(function (ifname) {
    
    ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family ) {
        return;
        }
        ret.push(iface.address);
        });
    });
    return ret;

}

// Llibrería per a les comarques
const comarques=require("./APIExemples/comarques/comarques.js");

// Habilitem CORS
// https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Incloem el middleware body_parser per tractar peticions POST
// https://programacion.net/articulo/gestionar_parametros_post_con_node_js_1186
app.use(body_parser.urlencoded({extended:true}));

/* Middleware per al servidor de pàgines estàtiques */
app.use(express.static(path.join(__dirname, 'public')));


/* Middlewares per a peticions REST */

/* Rutes per a l'exemple de les províncies */
app.get("/api/provincies",  function(req, res){
    res.send(comarques.getProvincies());
})

app.get("/api/comarques/:provincia", function(req, res){
    res.send(comarques.getComarques(req.params.provincia));
})

app.post("/api/ecoserver",  function(req, res){
    console.log(req.body);
    console.log("req.body");

    res.send({message:req.body.text});
})


let defaultPort=8000;
let ips=getIpAddresses();

console.log("Servidor funcionant pel port "+defaultPort);
console.log("\nPodeu accedir per les següents adreces:");
for (ip of ips){
    console.log("\t"+ip+":"+defaultPort);
}
console.log("\n");

app.listen(defaultPort);

