import { modeloEmpleado } from "../models/Empleados.Modesl.js";

modeloEmpleado.create({
    Name:"Javi",
    Apepat:"Gonzalez",
    Edad:21,
    Correo:"jambo@gmail.com"
})

export const testEmpleado = ()=>{
    console.log("Dunciona el controlador de empleados")
}