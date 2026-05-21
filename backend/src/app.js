const express = require("express");
const mangasRoutes = require("./routes/manga.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API funcionando");
});

app.use("/mangas", mangasRoutes);

module.exports = app;