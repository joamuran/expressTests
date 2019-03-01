'use strict'

let comarques = function(){
    this.provincies=["València", "Alacant", "Castelló"];
    this.comarques={
        "València":[{comarca: "El Camp de Túria", capital:"Llíria"},
            {comarca: "El Camp de Morvedre", capital:"Sagunt"},
            {comarca: "La Canal de Navarrés", capital : Enguera"},
            {comarca: "La Costera", capital:"Xàtiva"},
            {comarca: "La Foia de Bunyol", capital:"Xiva"},
            {comarca: "València", capital:"València"},
            {comarca: "L'Horta Nord", capital:"Puçol"},
            {comarca: "L'Horta Oest", capital:"Torrent"},
            {comarca: "L'Horta Sud", capital:"Catarroja"},
            {comarca: "La Plana d'Utiel", capital:"Requena"},
            {comarca: "El Racó d'Ademús", capital:"Ademús"},
            {comarca: "La Ribera Alta", capital:"Alzira"},
            {comarca: "La Ribera Baixa", capital:"Sueca"},
            {comarca: "La Safor", capital:"Gandia"},
            {comarca: "Els Serrans", capital:"Xelva"},
            {comarca: "La Vall d'Albaida", capital:"Ontinyent"},
            {comarca: "La Vall de Cofrents", capital:"Aiora"}], 
        "Alacant":[
            {comarca: "El Comtat", capital:"Cocentaina"},
            {comarca: "L'alcoià", capital:"Alcoi"},
            {comarca: "La Marina Alta", capital:"Dénia"},
            {comarca: "La Marina Baixa", capital:"La Vila Joiosa"},
            {comarca: "L'Alt Vinalopó", capital:"Villena"},
            {comarca: "El Vinalopó Mitjà", capital:"Elda"},
            {comarca: "El Baix Vinalopó", capital:"Elx"},
            {comarca: "L'alacantí", capital:"Alacant"},
            {comarca: "El baix Segura", capital:"Oriola"}
        ],
        "Castelló":[
            {comarca: "L'Alcalatén", capital:"L'Alcora"},
            {comarca: "L'Alt Maestrat", capital:"Albocàsser"},
            {comarca: "El Baix Maestrat", capital:"Vinaròs"},
            {comarca: "La Plana Alta", capital:"Castelló de la Plana"},
            {comarca: "La Plana Baixa", capital:"Borriana"},
            {comarca: "El Ports", capital:"Morella"},
            {comarca: "L'Alt Palànicia", capital:"Sogorb"},
            {comarca: "L'Alt Millars", capital:"Cirat"}
            
        ]
    }
}

comarques.prototype.getProvincies=function(){
    return this.provincies;
};

comarques.prototype.getComarques=function(provincia){
    return this.comarques[provincia];
};

module.exports=new comarques();
