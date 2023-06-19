require("dotenv").config()
const express = require("express")
const app = express()

const rutaUsuarios = require ("./routes/usuarios")
const rutaProductos = require ("./routes/productos")
const registrar = require ("./middleware/registrar")
const ruteEmpresa = require("./routes/empresa")

app.use(registrar)
app.use(express.json())
app.use("/usuarios",rutaUsuarios)
app.use("/productos",rutaProductos)
app.use("/empresa",ruteEmpresa)

app.listen(process.env.port, ()=>{
    console.log("Servidor Iniciado en puerto 8080...")
})

