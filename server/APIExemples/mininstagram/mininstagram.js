'use strict'

let usuaris = function(){
    this.usuaris=[
        {usuari:{
            nom: "Pep",
            password: "Pep",
            fotoPerfil: "http://127.0.0.1:8000/mininstagram/img/pepe.png",
            fotos: ["http://127.0.0.1:8000/mininstagram/xml/fotopepe_1.xml", "http://127.0.0.1:8000/mininstagram/xml/fotopepe_2.xml"]
        }},
        {usuari:{
            nom: "Paco",
            password: "Paco",
            fotoPerfil: "http://127.0.0.1:8000/mininstagram/img/paco.png",
            fotos: ["http://127.0.0.1:8000/mininstagram/xml/fotopaco_1.xml", "http://127.0.0.1:8000/mininstagram/xml/fotopaco_2.xml"]
        }},
        {usuari:{
            nom: "Maria",
            password: "Maria",
            fotoPerfil: "http://127.0.0.1:8000/mininstagram/img/maria.png",
            fotos: ["http://127.0.0.1:8000/mininstagram/xml/fotomaria_1.xml", "http://127.0.0.1:8000/mininstagram/xml/fotomaria_2.xml"]
        }},
        {usuari:{
            nom: "Raquel",
            password: "Raquel",
            fotoPerfil: "http://127.0.0.1:8000/mininstagram/img/raquel.png",
            fotos: ["http://127.0.0.1:8000/mininstagram/xml/fotoraquel_1.xml"]
        }},
    ]
};

usuaris.prototype.validaUsuari=function(username, password){
    for (let user of this.usuaris){
        if (user.usuari.nom==username && user.usuari.password==password){
            let ret={
                usuari: {
                    nom: user.usuari.nom,
                    fotoPerfil: user.usuari.fotoPerfil
                }, 
                fotos: user.usuari.fotos
            };
            return (ret);
            
        }
    };
    // Si arribem aci sense trobar l'usuari, tornem null
    return {
        usuari: null,
        fotos: null
    };
};


//let a=new usuaris();
//a.validaUsuari("Pep", "Pep");

module.exports=new usuaris();
