import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Falta MONGODB_URI en .env");
    process.exit(1);
  }
  try {
    await mongoose.connect(uri);
    console.log("Conectado a MongoDB");
  } catch (e) {
    console.error("Error conectando a MongoDB:", e.message);
    process.exit(1);
  }
}
