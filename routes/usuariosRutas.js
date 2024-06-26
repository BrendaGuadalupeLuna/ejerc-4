const ruta=require("express").Router();
const Usuario = require("../clases/UsuarioClase");

ruta.post("/agregarUsuario",(req,res)=>{
    var usuario1 = new Usuario(req.body);
    console.log(usuario1.obtenerDatos);
    if (usuario1.obtenerDatos.nombre == undefined || usuario1.obtenerDatos.celular == undefined || usuario1.obtenerDatos.correo == undefined){
        res.render("error");
    }
    else{
        res.render("usuariosVista", usuario1.obtenerDatos);
    }
});

ruta.get("/agregarUsuario",(req,res)=>{
    res.render("formulario");
});

module.exports=ruta;