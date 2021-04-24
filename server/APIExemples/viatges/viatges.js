'use strict'

let usuaris = function(){
    this.usuaris=[
        {usuari:{
            nom: "Luke",
            password: "",
            cognoms: "Skywalker",
            viatges: [
                {
                    "destino": "Tatoonie", 
                    "foto": "tatoonie.jpg", 
                    "descripcion": "Un planeta desértico, pero con mucha marcha.",
                    "puntuación": 5
                },
                {
                    "destino": "Yavin 4", 
                    "foto": "yavin4.jpg", 
                    "descripcion": "Un planeta con muchos árboles, y la base secreta de la alianza rebelde.",
                    "puntuación": 4
                },
                {
                    "destino": "Dagobah", 
                    "foto": "dagobah.jpeg", 
                    "descripcion": "Lo único bueno es que vive Yoda aquí.. Por lo demás... un lodazal digno de las ciénagas de Shrek",
                    "puntuación": 2
                },
                {
                    "destino": "Endor", 
                    "foto": "endor.jpeg", 
                    "descripcion": "Un sitio chulo, con árboles enormes, habitados por los Ewoks",
                    "puntuación": 4
                },
                {
                    "destino": "Arch-To", 
                    "foto": "archto.jpg", 
                    "descripcion": "Buen sitio para un retiro espiritual",
                    "puntuación": 4
                }
            ]
        }},
        {usuari:{
            nom: "Leia",
            password: "",
            cognoms: "Organa",
            viatges: null
        }},
    ]
};

usuaris.prototype.validaUsuari=function(username, password){
    console.log(username, password);
    for (let user of this.usuaris){
        if (user.usuari.nom==username && user.usuari.password==password){
            let ret={
                usuario: {
                    nombre: user.usuari.nom,
                    apellidos: user.usuari.cognoms
                }, 
                viajes: user.usuari.viatges
            };
            return (ret);
            
        }
    };
    // Si arribem aci sense trobar l'usuari, tornem null
    return {
        usuario: null,
        viajes: null
    };
};


//let a=new usuaris();
//a.validaUsuari("Pep", "Pep");

module.exports=new usuaris();
