const express = require("express");
const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
  res.send("Mi aplicación web sistema-deportivo está funcionando");
});

app.get("/saludo", (req, res) => {
  res.send("Bienvenido al sistema deportivo.");
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});