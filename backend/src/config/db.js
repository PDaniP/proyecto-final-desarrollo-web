import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    console.log("Intentando conectar a MongoDB Atlas...");
    console.log("URI cargada:", Boolean(process.env.MONGODB_URI));

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000
    });

    console.log("MongoDB conectado correctamente");
  } catch (error) {
    console.error("Error al conectar MongoDB:");
    console.error("Nombre:", error.name);
    console.error("Mensaje:", error.message);
    console.error("Código:", error.code);

    process.exit(1);
  }
};

export default conectarDB;