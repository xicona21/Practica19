// Importamos Express
const express = require("express");

// Importamos Mongoose
const mongoose = require('mongoose');

// Importamos el router para las personas
const personsRoutes = require("./routes/persons");

// Cargamos las variables de entorno de nuestro archivo .env
require('dotenv').config();

// Configuramos Mongoose para que utilice las Promesas de JavaScript
mongoose.Promise = global.Promise;

// Creamos una instancia de la aplicación Express
const app = express();

// Configuramos el puerto en el que escucharemos peticiones
const port = process.env.PORT || 3000;

// Configuramos el motor de vistas para que sea EJS
app.set("view engine", 'ejs');

// Configuramos Express para poder recibir datos desde formularios HTML
app.use(express.urlencoded({extended:false}));

// Montamos el router de personas
app.use(personsRoutes);

// Conectamos con la base de datos de MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Conexión"))
.catch((error) => console.error(error));

// Levantamos el servidor en el puerto especificado
app.listen(port,() => console.log(`Servidor escuchando en el puerto ${port}`));