

function peticioAjax(tipus, url, async, callback){
  // Funció pròpia que rep una URL, realitza una petició AJAX 
  // del tipus indicat sobre aquesta, de forma asíncrona 
  // (async=true) o síncrona (async=false) i passa el resultat 
  // a una funció de callback.

  // Construïm l'objecte XMLHttpRequest

  let peticioHttp=null;
      
  if(window.XMLHttpRequest) {
    peticioHttp = new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    peticioHttp = new
        ActiveXObject("Microsoft.XMLHTTP");
  }

  // Preparem el canvi d'estat
  peticioHttp.onreadystatechange = function () {
    if(peticioHttp.readyState == 4) {
      if(peticioHttp.status == 200) {
        // Una vegada hem rebut la resposta, 
        // la passarem a la funció de callback.        
        callback(peticioHttp.responseText);
      }
    }
  };
   
    peticioHttp.open(tipus, url, async);
  peticioHttp.send();
  
  
};

function init() {
    /*Funció inicial: Carrega el select de les províncies */
    peticioAjax("GET", "http://localhost:8000/api/provincies", true, function(dades){
      // La nostrafunció ens torna les dades en format pla
      // Caldrà convetir-jo a JSON
      let provincies=JSON.parse(dades);
      for (provincia of provincies){
        let opt=document.createElement("option");
        opt.value=provincia;
        opt.innerHTML=provincia;
        // Diferència entre append i appendChild: https://rpubs.com/raulUbiqum/append
        document.getElementById("provincies").appendChild(opt);
      }
    });


    // Delegació d'events
    document.getElementById("provincies").addEventListener("change", function(ev){
      let provincia=ev.target.value;

      peticioAjax("GET", "http://localhost:8000/api/comarques/"+provincia, true, function(dades){
        document.getElementById("comarques").innerHTML="";

        let comarques=JSON.parse(dades);
        for (comarca of comarques){
          let opt=document.createElement("option");
          opt.value=comarca.comarca;
          opt.innerHTML=comarca.comarca;
          // Diferència entre append i appendChild: https://rpubs.com/raulUbiqum/append
          document.getElementById("comarques").appendChild(opt);
        }


      });


      
    })

}


onload = init;