import express from 'express';
import mangasRoutes from './routes/mangas.routes.js';
import usersRoutes from './routes/users.routes.js';
import mangaListRoutes from './routes/mangaList.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", usersRoutes);
app.use("/manga-list", mangaListRoutes);
app.use("/mangas", mangasRoutes);



app.get("/", (req, res) => {
    res.send("API funcionando");
});




module.exports = app;