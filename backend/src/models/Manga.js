const mongoose = require("mongoose")

const mangaSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true
    },
    autor: {
      type: String,
      default: "Desconocido"
    },
    estadoLectura: {
      type: String,
      enum: ["Leyendo", "Completado", "Pendiente", "Abandonado"],
      default: "Pendiente"
    },
    capitulosLeidos: {
      type: Number,
      default: 0
    },
    totalCapitulos: {
      type: Number,
      default: 0
    },
    imagen: {
      type: String
    },
    anilistID: {
      type: Number
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Manga", mangaSchema)