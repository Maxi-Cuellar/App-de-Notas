const process = require("process"); //requiro el modulo process
const {leerArchivo,guardarTarea,crearTarea,filtrarPorEstado} = require("./funcionesDeTareas");
const tareas = leerArchivo();
const accion = process.argv[2];

switch (accion) {
  case "listar":
    for (let i = 0; i < tareas.length; i++) {
      console.log(`${i + 1}.- ${tareas[i].titulo} -> ${tareas[i].estado}`);
    }
    break;
  case "crear":
    let nuevaTarea = new crearTarea(process.argv[3].trim());
    guardarTarea(nuevaTarea);

    break;
  case "filtrar":
    let tareasFiltradas = filtrarPorEstado(process.argv[3]);
    for (let i = 0; i < tareas.length; i++) {
      console.log(`${i + 1}.- ${tareas[i].titulo} -> ${tareas[i].estado}`);
    }

    break;
  case undefined:
    console.log("**--**--**--**--**");
    console.log("atencion - tenes que pasar una accion");
    console.log("**--**--**--**--**");
    break;
  default:
    console.log("**--**--**--**--**");
    console.log("no entiendo lo que queres hacer");
    console.log("**--**--**--**--**");
    break;
}
