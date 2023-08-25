require('dotenv').config();
const host = process.env.HOST;
const port = process.env.PORT;

const express = require("express")
const server = express()
const routes = require("./routes")

server.use(express.json())
server.use('/teste', routes)


server.listen(port, host, () => {
    console.log(`Servidor inicializado em http://${host}:${port}`);
});