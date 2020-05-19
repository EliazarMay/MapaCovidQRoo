### `Lista de para ejecutar la página`
### `npm init`
Cuando se clone el proyecto desde github es necesario instalar las dependecias
### `npm install swr`
Instalar la liberia SWR para poder hacer uso de los datos de un json

### `npm i leaflet`
Instalar la liberia leaflet para el mapa

### `npm install leaflet react react-dom`
Liberia para el mapa con react

### `npm start`
Comandos necesarios para el proyecto

### `Primer avance del proyecto`
Creación de la aplicación web utilizando react
React es una liberia que nos permite utilizar otras más compatibles como lo son Leaflet.js

Leaflet.js nos permite hacer uso de mapas interactivos, es simple y trabaja de una manera eficiente en la mayoria de
las plataformas, se le pueden añador plugins para fácilitar el uso y contiene bastante documentación.

En la ubicacion src/App.js se encuentran las funciones con las coordenadas centradas hacia
cancun en donde se ubicara cada vez que se actualice el mapa, tambien se encutra en uso la libreria SWR que nos
permitira hacer llamadas a la información que se construira con base en un archivo json.

La etiqueta Marker nos permite hacer uso de puntos especificos y la etiqueta Map nos permite mantener centrado el lugar en
el municipio de Benito Juárez

En la ubicación /public estaran la imagenes con formato svg para detallar lugares expecificos y no áreas
