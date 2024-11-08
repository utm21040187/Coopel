import { EsquemaGeneral } from "./Clientes.Models.js";
import {model}from "mongoose";

export const modeloEmpleado = new model ("Tabla de empleados", EsquemaGeneral)
