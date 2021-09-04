const express = require("express");
const app = express();
const path = require("path")
const mainRouter = require("./routers/main.js")

const port = process.env.PORT || 3000

app.listen(port,()=> {console.log(`Servidor corriendo en el puerto ${port}`)})
app.use(express.static(path.join(__dirname, 'public')))//carpeta public

app.get("/",mainRouter)