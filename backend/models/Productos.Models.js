import {Schema, model} from "mongoose";

const EsquemaProductos = new Schema({
    Name:{
        type:String
    },
    Precio:{
        type:Number
    },
    Categoria:{
        type:String
    }
})
export const modeloProductos = new model("Tabla productos",EsquemaProductos)