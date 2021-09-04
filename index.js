// comandos usados
/**
 * npm init
 * npm install
 * code . //abrir el proyecto en vs code
 * 
 * crear el archivo index.js
 * 
 * instalacion de express 
 * npm install express --save
 */
import  Express  from "express";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
const puerto=3000;




//GET
app.get("/",(req,res)=>{
    res.send("Hola mundo GET")
})

//GET con parametros 
app.get("/inicio/:id/:nombre",(req,res)=>{
    //extrayendo un parametro
    res.send(req.params.nombre);
    //consultando todos los parametros que trae la peticion
    //res.send(req.params)
})

//POST

app.post("/registrar",(req,res)=>{

    res.send(req.body);
    res.sendStatus(200);
})





//va al final
app.listen(puerto,()=>console.log("Servidor en línea"));
