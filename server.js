<<<<<<< HEAD
var express  = require('express');
var app      = express(); 					// Utilizamos express
var mongoose = require('mongoose'); 				// mongoose para mongodb
var port  	 = process.env.PORT || 8080; 			// Cogemos el puerto 8080


const mongoAtlasUri = 'mongodb+srv://2016467:AtyirC2qHZTrDShY@cluster0.e1e6mxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


try{
    mongoose.connect(mongoAtlasUri, {useNewUrlParser: true, usefiedTopology: true }, ()=>
    console.log("Connected to server"));
} catch (error){
    console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log("Connection error ${err}")); //alerta si hay un error
dbConnection.once("open", () => console.log("Connected to DB")); //si se logra conectar a mongo atlas 


app.configure(function() {
	//app.use(express.static(__dirname + '/')); 		
	app.use(express.logger('dev')); 			// activamos el log en modo 'dev'
	app.use(express.methodOverride());  //si se logra conectar a mongo atlas

});
var bodyParser= require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
require('./routes.js')(app);
app.listen(port);
=======
var express  = require('express');
var app      = express(); 					// Utilizamos express
var mongoose = require('mongoose'); 				// mongoose para mongodb
var port  	 = process.env.PORT || 8080; 			// Cogemos el puerto 8080


const mongoAtlasUri = 'mongodb+srv://2016467:AtyirC2qHZTrDShY@cluster0.e1e6mxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


try{
    mongoose.connect(mongoAtlasUri, {useNewUrlParser: true, usefiedTopology: true }, ()=>
    console.log("Connected to server"));
} catch (error){
    console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log("Connection error ${err}")); //alerta si hay un error
dbConnection.once("open", () => console.log("Connected to DB")); //si se logra conectar a mongo atlas 


app.configure(function() {
	//app.use(express.static(__dirname + '/')); 		
	app.use(express.logger('dev')); 			// activamos el log en modo 'dev'
	app.use(express.methodOverride());  //si se logra conectar a mongo atlas

});
var bodyParser= require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
require('./routes.js')(app);
app.listen(port);
>>>>>>> 29ea02d334301b56c1cebbc581882dd7205a176f
console.log("APP por el puerto " + port);