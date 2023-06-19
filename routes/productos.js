const express = require ("express")
const router = express.Router()
const valida_campos_producto = require("../middleware/valida_campos_produco")

var {productos} = require("../models/producto");

//9 Middleware
router.use(express.json())

//7
router.get("/",(req,res)=>{
    return res.status(200).json(productos)
})


//8
router.get("/:id_producto",(req,res)=>{
const id_producto = req.params.id_producto
const filtro = productos.filter((producto)=>producto.id_producto==id_producto)
if (filtro.length >0)
    return res.json(filtro)
else 
    return res.status(404).json({status:"NO ENCONTRADO"})
})

//9
router.post("/", valida_campos_producto, (req,res)=>{
 var body = req.body
 body.id=productos.length +1 
 productos.push(body)
 return res.status(201).json(body)

})

//12
router.get("/marca/:Marca",(req,res)=>{
    const Marca = req.params.Marca
    const filtro_marca=productos.filter((producto)=>producto.Marca==Marca)
    if (filtro_marca.length>0)
        return res.json(filtro_marca)
    else
        return res.status(404).json({status:"No Se Encontró Ninguna Marca"})
})

//13
router.get("/precio_mayor/:costo",(req,res)=>{
    const costo = req.params.costo
    const filtro_costo = productos.filter((producto)=>producto.costo>=costo)
    if (filtro_costo.length > 0)
        return res.json(filtro_costo)
    else 
    return res.status(404).json({status: "Escriba correctamente el precio"})
})

//14
router.get("/precio_menor/:costo",(req,res)=>{
    const costo = parseFloat(req.params.costo)
    const filtro_costo = productos.filter((producto)=>producto.costo<=costo)
    if (filtro_costo.length > 0)
        return res.json(filtro_costo)
    else 
    return res.status(404).json({status: "Escriba correctamente el precio"})
})
//put 
//delete
module.exports=router