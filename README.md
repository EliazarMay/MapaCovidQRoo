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
<<<<<<< HEAD
=======

### `Primer avance del proyecto`

Los servicios que utilizamos son los siguientes:

API Gateway: esta API nos permite crear y administrar los datos creando recursos y añadiendo metodos a cada uno, por ejemplo en nuestro caso creímos necesarios el uso de dos métodos, Get para poder hacer uso de los datos y POST para poder enviar los datos, esto lo hacemos mediante un json con los atributos descripción, latitud y longitud, para poder hacer funcionar estos métodos hay otro servicio llamada Lambda que nos permite conectar el codigo con el endpoint.

Lambda: Aquí creamos funciones (código), estas funciones están escritas en javascript (Node.js 12.x) en el código hay un controlador el cual es el método en la función Lambda que procesa eventos cuando se invoca una función, el tiempo de ejecución ejecuta el método del controlador aquí se describe que hará cada uno de los métodos que se muestran en API gateway por ejemplo en el caso del metodo Get describe la estructura del objeto y en el caso de POST debe recibir un json para poder procesarlo, finalmente se almacena en una base de datos no relacional como lo es DynamoDB.

DynamoDB: principalmente permite integrar las funciones de API Gateway y Lambda para poder almacenar datos de manera no relacional, esta funcionalidad aun no la tenemos desarrollada por completo ya que se ve un problema al momento de hacer envío por medio de un formulario con las coordenadas.
>>>>>>> develop
