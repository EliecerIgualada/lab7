const mongoose=require("mongoose")

const MongoConnect=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/BD_prueba")
    .then (()=>{console.log("Se conectó a la BD")})
    .catch((error)=>{console.log(error)})
}
module.exports = MongoConnect