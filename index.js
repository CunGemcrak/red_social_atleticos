import express  from "express";
import  {conexion}  from "./cliente/src/mysql_coneexion.js";


const app = express();
const puerto = 8000;

app.listen(puerto, function (){  console.log('Aplicacion iniciada puerto '+'http://localhost:'+puerto);}); //inicio

// configuracion ejs
app.set('views', './cliente/vista')
app.set('view engine', 'ejs')



//configuracion archivos statics 
app.use(express.static('./cliente/vista'))
app.use(express.static('./cliente/src'))//javascript
app.use(express.static('./cliente/css'))
app.use(express.static('./cliente/scripts'))




//renderizar vistas

app.get('/',function(req, res){ // en la ruta inicial recibes el calball
   
    res.render('index',{titulo:"hola", parrafo:"Este es mi parrafo"})
})