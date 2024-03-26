var Item = require('./usuarioEstructura');
const {createHash} = require('crypto')
const path = require('path');

var crypto = require('crypto');
var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
var key = 'password';

var cipher = crypto.createCipher(algorithm, key);
// Obtiene todos los objetos Usuario de la base de datos
exports.getItem = function (req, res){
	
	//console.log(item)
	Item.find(
		function(err, item) {
			if (err)
				res.send(err)
					res.json(item); // devuelve todos los Usuarios en JSON		
				}
			);
}

exports.setItem = function (req, res){
    //Creo el objeto Usuario

    var claveHash=createHash('sha256').update(req.body.clave).digest('base64'); 
    // Base 64 convierte las cadenas de bytes en textor
		Item.create(
			{
                
                correo: req.body.correo,
                clave: claveHash,
                nombreCompleto: req.body.nombreCompleto,
                
    
            },

			function(err, item) {
				if (err)
					res.send(err);
				// Obtine y devuelve todas los usuarios tras crear una de ellas

				Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				 	res.json(item);
				});
			});

	}

exports.updateItem = function(req, res){
    var claveHash=createHash('sha256').update(req.body.clave).digest('base64');
	Item.update( {_id : req.body.item_id},
        {
            $set:{
                
                correo: req.body.correo,
                clave: claveHash,
                nombreCompleto: req.body.nombreCompleto,
                

            }
        },

        function(err, item) {
            if (err)
                res.send(err);
        

        Item.find(function(err, item) {
            if (err)
                res.send(err)
            res.json(item);
        });
    });
}

exports.removeItem = function(req, res){

    Item.remove({_id : req.query.item_id}, function (err, item){
        if(err)
            res.send(err);
        //Obtiene  y devuelve todos los usuarios tras borrar una de ellas

        Item.find(function (err, find){
            if(err)
                res.send(err)
            res.json(item);
        });

    });

}

exports.logIn = function (req, res){
    var claveHash=createHash('sha256').update(req.body.clave).digest('base64'); //agarra cualquier tramo de bits y lo convierte en una linea larga de texto de letras y numeros
	
	//console.log(item)
	Item.find({correo: req.body.correo, clave: claveHash },//solicita que el correo tenga esa misma contraseña

    function (err, item) {
        if (err)
            res.send(err)
        if (item.length > 0) {
        
            var usuarioparacifrar = {};
          
            usuarioparacifrar.correo = item[0].correo;
           
            usuarioparacifrar.clave = item[0].clave;
            item[0].clave = cipher.update(JSON.stringify(usuarioparacifrar), 'utf8', 'hex') + cipher.final('hex');

        }
        res.json(item); 
    }
			);
}

exports.verificaParaIndex2 = function (req, res) {
    var decipher = crypto.createDecipher(algorithm, key);
    try {
        var objetousuariodescifrado = decipher.update(req.query.token, 'hex', 'utf8') + decipher.final('utf8');
        objetousuariodescifrado = JSON.parse(objetousuariodescifrado)
        console.log(objetousuariodescifrado)
        // console.log(Item)
        Item.find({ correo: objetousuariodescifrado.correo, clave: objetousuariodescifrado.clave },
            function (err, item) {
                if (err)
                    return (err)

                if (item.length > 0) {

                    res.sendfile(path.join(__dirname + '/index2.html'))
                }
                else {
                    res.send("no andez jakiando")
                }
            }
        );
    }
    catch (error) {
        console.log(error)
        res.send("no te pazes de listillo")
    }

}

exports.verificaParaMisa = function (req, res) {
    var decipher = crypto.createDecipher(algorithm, key);
    try {
        var objetousuariodescifrado = decipher.update(req.query.token, 'hex', 'utf8') + decipher.final('utf8');
        objetousuariodescifrado = JSON.parse(objetousuariodescifrado)
        console.log(objetousuariodescifrado)
        // console.log(Item)
        Item.find({ correo: objetousuariodescifrado.correo, clave: objetousuariodescifrado.clave },
            function (err, item) {
                if (err)
                    return (err)

                if (item.length > 0) {

                    res.sendfile(path.join(__dirname + '/misa.html'))
                }
                else {
                    res.send("no andez jakiando")
                }
            }
        );
    }
    catch (error) {
        console.log(error)
        res.send("no te pazes de listillo")
    }

}

// exports.verificaparaCrear = function (req, res) {
//     var decipher = crypto.createDecipher(algorithm, key);
//     try {
//         var objetousuariodescifrado = decipher.update(req.query.token, 'hex', 'utf8') + decipher.final('utf8');
//         objetousuariodescifrado = JSON.parse(objetousuariodescifrado)
//         console.log(objetousuariodescifrado)
//         // console.log(Item)
//         Item.find({ correo: objetousuariodescifrado.correo, clave: objetousuariodescifrado.clave },
//             function (err, item) {
//                 if (err)
//                     return (err)

//                 if (item.length > 0) {

//                     res.sendfile(path.join(__dirname + '/camisa.html'))
//                 }
//                 else {
//                     res.send("no andez jakiando")
//                 }
//             }
//         );
//     }
//     catch (error) {
//         console.log(error)
//         res.send("no te pazes de listillo")
//     }

// }

// exports.verificaparaVotar = function (req, res) {
//     var decipher = crypto.createDecipher(algorithm, key);
//     try {
//         var objetousuariodescifrado = decipher.update(req.query.token, 'hex', 'utf8') + decipher.final('utf8');
//         objetousuariodescifrado = JSON.parse(objetousuariodescifrado)
//         console.log(objetousuariodescifrado)
//         // console.log(Item)
//         Item.find({ correo: objetousuariodescifrado.correo, clave: objetousuariodescifrado.clave },
//             function (err, item) {
//                 if (err)
//                     return (err)

//                 if (item.length > 0) {

//                     res.sendfile(path.join(__dirname + '/carrusel.html'))
//                 }
//                 else {
//                     res.send("no andez jakiando")
//                 }
//             }
//         );
//     }
//     catch (error) {
//         console.log(error)
//         res.send("no te pazes de listillo")
//     }

// }

// exports.verificaparaReporteFinal = function (req, res) {
//     var decipher = crypto.createDecipher(algorithm, key);
//     try {
//         var objetousuariodescifrado = decipher.update(req.query.token, 'hex', 'utf8') + decipher.final('utf8');
//         objetousuariodescifrado = JSON.parse(objetousuariodescifrado)
//         console.log(objetousuariodescifrado)
//         // console.log(Item)
//         Item.find({ correo: objetousuariodescifrado.correo, clave: objetousuariodescifrado.clave },
//             function (err, item) {
//                 if (err)
//                     return (err)

//                 if (item.length > 0) {

//                     res.sendfile(path.join(__dirname + '/reportefinal.html'))
//                 }
//                 else {
//                     res.send("no andez jakiando")
//                 }
//             }
//         );
//     }
//     catch (error) {
//         console.log(error)
//         res.send("no te pazes de listillo")
//     }

// }

// exports.verificaparaCambiarDatos = function (req, res) {
//     var decipher = crypto.createDecipher(algorithm, key);
//     try {
//         var objetousuariodescifrado = decipher.update(req.query.token, 'hex', 'utf8') + decipher.final('utf8');
//         objetousuariodescifrado = JSON.parse(objetousuariodescifrado)
//         console.log(objetousuariodescifrado)
//         // console.log(Item)
//         Item.find({ correo: objetousuariodescifrado.correo, clave: objetousuariodescifrado.clave },
//             function (err, item) {
//                 if (err)
//                     return (err)

//                 if (item.length > 0) {

//                     res.sendfile(path.join(__dirname + '/perfilUsuario.html'))
//                 }
//                 else {
//                     res.send("no andez jakiando")
//                 }
//             }
//         );
//     }
//     catch (error) {
//         console.log(error)
//         res.send("no te pazes de listillo")
//     }

// }

exports.verifica = function (correo, clave) {
   
    // console.log(Item)
    Item.find({ correo: correo, clave: clave },
        function (err, item) {
            if (err)
                return err
            if (item.length > 0) {
                return true
            }
            else {
                return false
            }
           
        }
    );
}



// exports.updateClave = function (req, res) {
   
//     var claveHash = createHash('sha256').update(req.body.clave).digest('base64');
//     var clavehashnueva = createHash('sha256').update(req.body.nuevaclave).digest('base64');
//     console.log(req.body)
//     Item.find({ _id: req.body.item_id, clave: claveHash },
//         function (err, item) {
//             if (err)
//                 res.send(err)
//             if (item.length > 0) {
//                 console.log('si lo encontro')
//                 Item.update({ _id: req.body.item_id },
//                     {
//                         $set: {
//                             clave: clavehashnueva,
//                             clave: req.body.foto
//                         }
//                     },
//                     function (err, item) {
//                         if (err)
//                             res.send(err);
//                         // Obtine y devuelve todas las personas tras crear una de ellas
//                         Item.find({ _id: req.body.item_id }, function (err, item) {
//                             if (err)
//                                 res.send(err)
//                             res.json(item);
//                         });
//                     });


//             }
//             else {

//                 res.json(item);

//             }
//         }
//     );



// }




