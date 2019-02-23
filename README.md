# expressTests

Aquest repositori proporciona un senzill servidor web basat en el framework Express per a nodejs.

La seua utilitat és purament didàctica, per tal de testejar exemples amb AJAX i APIS REST.

## Instal·lació

Per tal de treballar amb el servidor, necessitarem abans que res disposar dels paquets `nodejs` i `npm`, el gestor de paquets de node.

Una vegada tinguem aquests paquets, hem d'instal·lar les dependències necessàries per al servidor. Per a aixòm ens ubiquem en la carpeta `server`, i executem:

```bash
$ npm install
```

Amb açò instal·larem les dependències necessàries (*Expressjs*) per posar en marxa el nostre servidor.

Una vegada hem fet la instal·lació, tindrem una nova carpeta anomenada `node_modules` amb totes les dependències descarregades.

Per tal de fer funcionar el servidor, només haurem de fer:

```
$ npm start
```

Un veada iniciat, ens indicarà l'adreça i el port pel que podem accedir al contingut del servidor:

```
$ npm start

> server@1.0.0 start /srv/svn/github/expressTests/server
> nodejs .

Servidor funcionant pel port 8000

Podeu accedir per les següents adreces:
	127.0.0.1:8000
	192.168.20.127:8000

```

El servidor disposa d'una carpeta `public`, on s'ubicaran els diferents documents (ja siguen HTML, JSON, etc.) que seran servits per aquest. A més, el servidor ofereix una API REST per proporcionar informació per als diferents exercicis.

Aquest servidor està pensat perquè pugueu treballa la part client, pel que, en principi, no farà falta modificar o afegir pàgines dins la carpeta `public`. Els exercicis es poden crear en qualsevol carpeta i *atacar* al servidor a través de les adreces que aquest us indique. El mateix servidor ja incorpora l'opció de deshabilitar les comprovacions d'origens creuats ([Cross Origin o CORS](https://es.wikipedia.org/wiki/Intercambio_de_recursos_de_origen_cruzado)), pel que permet accedir des d'altres llocs que no siguen el mateix servidor.

Al la carpeta *Enunciats* podeu trobar els diferents enunciats d'exemples i exercicis que us permetrà fer el servidor.
