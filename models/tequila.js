const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var tequilaSchema = Schema({
    id: Number,
    nombre: String,
    empresa: String,
    tipoAgave: String,
    porcentajeAlcohol: Number,
    estadoOrigen: String,
    precio: Number,
    ml: Number,
    imagen: String
});

module.exports = mongoose.model("Tequila", tequilaSchema);