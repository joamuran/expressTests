function mostraPizzes(xmlDoc){
              
    let pizzes=xmlDoc.getElementsByTagName("pizza");
    for (pizza of pizzes){
        let nom=pizza.getElementsByTagName("nom")[0].childNodes[0].nodeValue;
        // També seria equivalent:
        // let nom=pizza.getElementsByTagName("nom")[0].firstChild.nodeValue;

        let preu=pizza.getElementsByTagName("preu")[0].childNodes[0].nodeValue;
        let desc=pizza.getElementsByTagName("descripcio")[0].childNodes[0].nodeValue;
        let calories=pizza.getElementsByTagName("calories")[0].childNodes[0].nodeValue;
        let columna=document.createElement("tr");
        let cel_la=document.createElement("td");
        cel_la.innerHTML=nom;
        columna.append(cel_la);
        cel_la=document.createElement("td");
        cel_la.innerHTML=desc;
        columna.append(cel_la);
        cel_la=document.createElement("td");
        cel_la.innerHTML=calories;
        columna.append(cel_la);
        cel_la=document.createElement("td");
        cel_la.innerHTML=preu;
        columna.append(cel_la);

        document.getElementById("pizzesBody").appendChild(columna);


        

    }
    
}

onload=function(){

    let http=new XMLHttpRequest();
    http.open("GET", "http://127.0.0.1:8000/xml/pizzes.xml");
    http.send();
    http.onreadystatechange=function(){
        if (http.readyState == 4) {
            if (http.status == 200) {
                // Obtenim la resposta en format XML amb
                mostraPizzes(http.responseXML);
            }
          }
    };
}