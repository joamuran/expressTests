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

app.get("/api/provDelay",  function(req, res){
    // Afig un retard deliberat i aleatori
    setTimeout(function(){
        res.send(comarques.getProvincies());
    }, 1+(Math.random()*500));
})

/* Middlewares per al servidor d'eco GET i POST */

app.get("/api/comarques/:provincia", function(req, res){
    res.send(comarques.getComarques(req.params.provincia));
})

app.get("/api/comDelay/:provincia", function(req, res){
    setTimeout(function(){
        res.send(comarques.getComarques(req.params.provincia));
    }, 1+(Math.random()*500));
})

app.get("/api/capitals/:comarca", function(req, res){
    res.send(comarques.getCapital(req.params.comarca));
})

app.get("/api/capDelay/:comarca", function(req, res){
    setTimeout(function(){
        res.send(comarques.getCapital(req.params.comarca));    
    }, 1+(Math.random()*500));
})

/* Obtenció de la població */
app.get("/api/poblacio/:comarca", function(req, res){
    res.send(comarques.getPoblacio(req.params.comarca));
})

app.get("/api/pobDelay/:comarca", function(req, res){
    setTimeout(function(){
        res.send(comarques.getPoblacio(req.params.comarca));    
    }, 1+(Math.random()*500));
})


/* Obtenció de la imatge */
app.get("/api/img/:comarca", function(req, res){
    res.send(comarques.getImg(req.params.comarca));
})

app.get("/api/imgDelay/:comarca", function(req, res){
    setTimeout(function(){
        res.send(comarques.getImg(req.params.comarca));    
    }, 1+(Math.random()*500));
})


/* Obtenció de la descripció */
app.get("/api/descripcio/:comarca", function(req, res){
    res.send(comarques.getDesc(req.params.comarca));
})

app.get("/api/descDelay/:comarca", function(req, res){
    setTimeout(function(){
        res.send(comarques.getDesc(req.params.comarca));    
    }, 1+(Math.random()*500));
})

// Ruta per buscar una comarca per les lletres inicials
app.get("/api/buscacomarca/:lletra",  function(req, res){
    res.send(comarques.buscaComarca(req.params.lletra));
})


// Servidor d'eco
app.post("/api/ecoserver",  function(req, res){
    console.log(req.body);
    console.log("req.body");

    res.send({message:req.body.text});
})

// Retorna la pròpia petició
app.get("/api/get", function(req, res){
	let resp={args: req.args,
	headers: req.headers, 
	origin: req.origin,
	url: req.url}
	res.send(resp);
});



/* Middleware per a Mininstagram */

const mininstagram=require("./APIExemples/mininstagram/mininstagram.js");

app.post("/api/validaInsta",  function(req, res){
    let user=req.body.user;
    let password=req.body.password;

    res.send(mininstagram.validaUsuari(user, password));
    //console.log(user + " "+ password);

})

/* Middleware per a MisViajes  */

const viatges=require("./APIExemples/viatges/viatges.js");

app.post("/api/viatges",  function(req, res){
    let user=req.body.username;
    let password=req.body.password;

    res.send(viatges.validaUsuari(user, password));
    //console.log(user + " "+ password);

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

