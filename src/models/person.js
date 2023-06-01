const express = require("express"); // Importa la librería Express
const router = express.Router(); // Crea una instancia del enrutador de Express
const mongoose = require("mongoose"); // Importa la librería Mongoose para conectarse a MongoDB
let Person = require('../models/persons'); // Importa el modelo 'Person' para interactuar con la base de datos

// Manejador de la ruta GET '/gente'
router.get('/gente', async (req, res) => {
    const Persons = await Person.find({}); // Busca todos los documentos en la colección 'Person'
    res.json(Persons); // Envia los documentos encontrados como respuesta en formato JSON
})
