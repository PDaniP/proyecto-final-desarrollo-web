import mongoose from "mongoose";

// esquema simple para una entrada de la coleccion
const mangaSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true, trim: true },
    autor: { type: String, default: "", trim: true },
    editorial: { type: String, default: "", trim: true },
    tomosTengo: { type: Number, default: 0, min: 0 },
    tomosTotal: { type: Number, default: 0, min: 0 },
    estado: {
      type: String,
      enum: ["quiero_leer", "leyendo", "completado", "pausado", "dropeado"],
      default: "leyendo",
    },
    notas: { type: String, default: "" },
    portadaUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

export const Manga = mongoose.model("Manga", mangaSchema);
