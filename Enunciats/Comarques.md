# Comarques

En aquests exemples treballarem sobre una API REST que ens proporciona el servidor amb les comarques del País Valencià ordenades per províncies.

El servidor respon a les següents peticions:

* `api/provincies` (l'adreça completa seria: `http://127.0.0.1:8000/api/provincies`), que ens retorna un JSON amb les tres províncies.
* `api/comarques/:provincia` (una adreça podría ser `http://127.0.0.1:8000/api/comarques/València`), que ens retorna un JSON amb les comarques de la província indicada i les seues capitals.
* `/api/capitals/:comarca` (una adreça podría ser `http://localhost:8000/api/capitals/Els%20Serrans`), que ens retorna un text amb la capital de la comarca indicada. Es tracta d'informació redundant, ja que amb `api/comarques/:provincia` obtenim un vector de parells *comarca-capital*, però ens servirà per veure algun exemple on encadenarem diverses peticions.

## Exercici 1

* Crea dues llistes desplegables en un formulari, de manera que la primera permeta seleccionar entre les tres províncies, i en el moment en què se'n seleccione una, s'òmpliga, de forma dinàmica la llista desplegable amb les comarques de la província.

## Exercici 2

* Realitza una funció amb javascript per generar una taula amb les capitals de comarca, ordenades per províncies. Pots marcar a quina província pertany cada comarca amb el color de fons de les files. Feu ús de crides AJAX amb l'objecte XMLHttpRequest.
* Crea altre script, amb la mateixa base, però ara utilitza la interfície `fetch` per *resoldre* els possibles problemes que hages obtingut en el punt anterior.

