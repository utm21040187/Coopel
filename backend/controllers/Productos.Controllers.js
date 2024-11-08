import { modeloProductos } from "../models/Productos.Models.js";

modeloProductos.create({
    Name:"uvas",
    Precio: 654,
    Categoria: "frutas"
})
export const testProductos = ()=>{
    console.log("Funciona el controlador Productos")
}