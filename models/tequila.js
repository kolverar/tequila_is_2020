const mongoose = require('mongoose')
const Schema = mongoose.Schema

let tequilaSchema = Schema({

    id: Number,
    nombre: String,
    empresa: String,
    tipoAgave: String,
    porcentajeAlcohol: Number,
    estadoOrigen: String,
    precio: Number,
    imagen: String
});

module.exports = mongoose.model("Tequila", tequilaSchema)