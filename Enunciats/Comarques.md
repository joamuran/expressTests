# Comarques

En aquests exemples treballarem sobre una API REST que ens proporciona el servidor amb les comarques del País Valencià ordenades per províncies.

El servidor respon a les següents peticions:

* `api/provincies` (l'adreça completa seria: `http://127.0.0.1:8000/api/provincies`), que ens retorna un JSON amb les tres províncies.
* `api/comarques/:provincia` (una adreça podría ser `http://127.0.0.1:8000/api/comarques/València`), que ens retorna un JSON amb les comarques de la província indicada i les seues capitals.

## Exercici 1

* Crea dues llistes desplegables en un formulari, de manera que la primera permeta seleccionar entre les tres províncies, i en el moment en què se'n seleccione una, s'òmpliga, de forma dinàmica la llista desplegable amb les comarques de la província.
