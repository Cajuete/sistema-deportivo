const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Bienvenido al Sistema Deportivo Boliviano ');
});


app.get('/info', (req, res) => {
    res.send('Sistema web para la gestión de entradas y su tienda de productos deportivos y administración de socios.');
});


app.get('/contacto', (req, res) => {
    res.send('Contacto: soport@sistemadeportivo.com | Teléfono: +591 62988469');
});

app.get('/entradas', (req, res) => {
    res.send('Módulo de venta y gestión de entradas para partidos de fútbol');
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});