# Comarques

En aquests exemples treballarem sobre una API REST que ens proporciona el servidor amb les comarques del País Valencià ordenades per províncies. També podrem obtenir informació addicional, com la població, una descripció o una imatge representativa.

El servidor respon a les següents peticions:

* `api/provincies` (l'adreça completa seria: `http://127.0.0.1:8000/api/provincies`), que ens retorna un JSON amb les tres províncies.
* `api/comarques/:provincia` (una adreça podría ser `http://127.0.0.1:8000/api/comarques/València`), que ens retorna un JSON amb les comarques de la província indicada i les seues capitals.
* `/api/capitals/:comarca` (una adreça podría ser `http://localhost:8000/api/capitals/Els Serrans`), que ens retorna un text amb la capital de la comarca indicada. Es tracta d'informació redundant, ja que amb `api/comarques/:provincia` obtenim un vector de parells *comarca-capital*, però ens servirà per veure algun exemple on encadenarem diverses peticions.
* `api/poblacio/:comarca` (una adreça podría ser `http://localhost:8000/api/poblacio/La%20Safor`) que ens retorna un text amb la població de la comarca indicada. Si necessitem utilitzar-la com a número, haurem d'eliminar els "." que hi aparéixer i fer la corresponent conversió.
* `api/img/:comarca` (una adreça podría ser `http://localhost:8000/api/img/La%20Ribera%20Alta`) que ens retorna una URL de la Wikipèdia amb una imatge a Internet representativa de la comarca.
* `api/descripcio/:comarca` (una adreça podría ser `http://localhost:8000/api/descripcio/La%20Marina%20Baixa`) que ens retorna la descripció que fa la wikipèdia sobre cada comarca.

A més dels mètodes anteriors, disposeu també de les seues versions *amb retard*, que afigen un xicotet retard aleatori per tal de donar resposta, i que utilitzarem amb alguns exercicis:

* `api/provDelay`, versió amb retard de `api/provincies`.
* `api/comDelay/:provincia`, versió amb retard de `api/comarques/:provincia`.
* `/api/capDelay/:comarca`, versió amb retard de  `/api/capitals/:comarca`
* `api/pobDelay/:comarca`, versió amb retard de  `api/poblacio/:comarca`.
* `api/imgDelay/:comarca`, versió amb retard de `api/img/:comarca`.
* `api/descDelay/:comarca`, versió amb retard de `api/descripcio/:comarca`.

## Exercici 1

* Crea dues llistes desplegables en un formulari, de manera que la primera permeta seleccionar entre les tres províncies, i en el moment en què se'n seleccione una, s'òmpliga, de forma dinàmica la llista desplegable amb les comarques de la província.

## Exercici 2

* Realitza una funció amb javascript per generar una taula amb les capitals de comarca, ordenades per províncies. Pots marcar a quina província pertany cada comarca amb el color de fons de les files. Feu ús de crides AJAX amb l'objecte XMLHttpRequest, i no és necessari que realitzeu cap control de l'asincronía, de moment.

## Exercici 3

El més probable, és que a l'exercici anterior, com que no hem realitzat cap control asíncron, hages vist en algun moment com hi ha files de la taula corresponents a una província que apareixen entrellaçades amb les d'altra. Si ara provem el mateix codi que hem fet, però modificant les crides a l'API per la seua versió amb retard, apreciarem amb més claredat aquesta situació:

![./img/exer2.png](./img/exer2.png)

Per tal de resoldre aquesta situació s'empren diferents tècniques de control de l'asincronía: callbacks amb nom, promeses, generadors, async-await, etc.

Es demana:

### Exercici 3.1.

* Partint del codi anterior, fes ús de la seqüenciació de respostes mitjançant callbacks, de manera que les províncies i les comarques apareguen de forma ordenada en la taula.

### Exercici 3.2.

* Realitza ara la seqüenciació de respostes fent ús del mecanismes de les *Promeses*, i les funcions que aquestes ofereixen per a tal efecte.

## Exercici 4

Anem a generar ara una altra taula, basant-nos en l'exercici 3, que afisca la columna *Població*, amb la població total de cada capital. A més, haurà d'afegir una fila abans de començar a llistar les comarques d'una província, indicant la povíncia de la que es tracta, i una altra fila, en finalitzar, mostrant la suma total de la població de totes les comarques de la província:

![./img/exer4.png](./img/exer4.png)

### Exercici 4.1. 

* Realitza la implementació que resolga el problema anterior mitjançant crides AJAX i funcions de callback.

### Exercici 4.2. 

* Realitza la implementació que resolga el problema anterior fent ús de crides AJAX i promeses.

## Exercici 5

Es demana una pàgina web on es puguen consultar les diferents comarques del País Valencià, amb més detall d'informació.

L'aspecte de la pàgina serà el següent:

![./img/exer5.png](./img/exer5.png)

A la part superior hi haurà un selector on podrem triar les diferents províncies. Quan es canvie de valor, automàticament haurà de carregar a la part de baix a l'esquerra (`#comarques`) les diferents comarques de la província, tot fent ús dels endpoints de l'API `api/provincies` i `api/comarques/:provincia` i `api/img/:provincia`. Com veieu, es veu la imatge representativa de la comarca i el nom d'aquesta.

Per altra banda, quan fem clic sobre alguna de les imatges, del nom de la comarca o del contenidor que conté ambdues, es carregarà tota la informació sobre la comarca (capital, població, descripció i imatge), i es mostrarà al contenidor de la dreta (`#detallComarca`). Cal tindre en compte en aquest cas que les diferents crides per obtenir cadascuna d'aquestes dades han d'haver finalitzat abans de "pintar" aquest contingut.

Les diferents estrucutres de la pàgina són les següents:

**Estructura de la pàgina principal**

```html
<body>

  <div class="container">
    <h1>Informació sobre comarques</h1>

    <form name="provincies_selector">

      <div class="form-group">
        <label for="provincies">Tria la Povíncia</label>
        <select class="form-control" name="provincies" id="provincies"></select>
      </div>
    </form>

      <div id="comarques" class="col-md-6" style="float:left;"></div>
      <div id="detallComarca" class="col-md-6" style="float:left;"></div>
  </div>
  
  <script src="js/comarques.js"></script>
</body>
```

**Estructura dels contenidors d'imatges dins de #comarques**

```html
<div class="col-md-6 divComarca" id="El Comtat">
    <div style="background-image: url(&quot;https://upload.wikimedia.org/wikipedia/commons/a/a5/Senda_hacia_el_Montcabrer.JPG&quot;);" class="col-md-10 col-md-offset-1 imgComarca">
    </div>
    <div style="float: left;">El Comtat</div>
</div>
```

**Estructura del contenidor d'informació general**

```html
<div id="detallComarca" class="col-md-6" style="float:left;">
    <h2>El Comtat</h2>
    <h3>Capital: Cocentaina</h3>
    <p>Població: 27.157</p>
    <p style="font-style: italic;">El Comtat és una comarca central del País Valencià, amb capital a Cocentaina. </p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Senda_hacia_el_Montcabrer.JPG" style="width: 100%; height: auto;">
</div>
```

### Indicacions generals

Es recomana realitzar la implementació amb Javascript del comportament de la pàgina seguint les següents indicacions:

* Crear una classe per a tota l'aplicació, implementant els atributs i mètodes necessaris.
* Utilitzar delegació d'esdeveniments per tal de gestionar aquests de forma dinàmica.
* Realitzar tres implementacions diferents per tractar l'asincronía:
  * Mitjançant crides Ajax i gestionant la sincronía,
  * Mitjançant promeses,
  * Mitjançant async/await.

