import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import mangaRoutes from "./routes/mangas.js";

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares basicos
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, message: "API manga tracker" });
});

app.use("/api/mangas", mangaRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Algo salio mal en el servidor" });
});

await connectDB();

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
