const mongoose = require("mongoose"); // Importa la librería Mongoose para definir esquemas y modelos

// Define el esquema del modelo 'Person'
let PersonSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String,
});

// Exporta el modelo 'Person' para que pueda ser utilizado en otras partes de la aplicación
module.exports = mongoose.model('Persons', PersonSchema);