import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { testCliente } from "./backend/controllers/Clientes.Controllers.js";
import { testProductos } from "./backend/controllers/Productos.Controllers.js";
import { testEmpleado } from "./backend/controllers/Empleados.Controllers.js";
dotenv.config()

mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("Funciona la conexion a la base")
})
.catch((error)=>{
    console.log("No funciona la conexion a la base")
})

const app = express();
app.use((cors));
app.listen(4000,()=>{
    console.log("Se esta escuchando correctamente el servidor local")
})

testCliente()
testProductos()
testEmpleado()