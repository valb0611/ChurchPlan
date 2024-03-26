<<<<<<< HEAD

var Item = require('./misaEstructura');

// Controlador para obtener todos los objetos 'misa' de la base de datos
exports.getItem = function (req, res){
    // Busca todos los objetos 'misa' en la base de datos
    Item.find(function(err, item) {
        if (err)
            res.send(err);
        // Devuelve todos los objetos 'misa' en formato JSON
        res.json(item);
    });
}

// Controlador para agregar un nuevo objeto 'misa' a la base de datos
exports.setItem = function (req, res){
    console.log(req.body);
    // Crea un nuevo objeto 'misa' con los datos proporcionados en el cuerpo de la solicitud (req.body)
    Item.create(req.body, function(err, item) {
        if (err)
            res.send(err);
        // Devuelve todos los objetos 'misa' tras agregar uno nuevo
        Item.find(function(err, item) {
            if (err)
                res.send(err);
            res.json(item);
        });
    });
}

// Controlador para actualizar un objeto 'misa' existente en la base de datos
exports.updateItem = function(req, res){
    // Actualiza el objeto 'misa' con el ID especificado en req.body.item_id con los nuevos datos proporcionados
    Item.update( {_id : req.body.item_id},
        {
            $set: req.body // Actualiza todos los campos con los nuevos valores proporcionados en req.body
        },
        function(err, item) {
            if (err)
                res.send(err);
            // Devuelve todos los objetos 'misa' tras actualizar uno existente
            Item.find(function(err, item) {
                if (err)
                    res.send(err);
                res.json(item);
            });
        }
    );
}

// Controlador para eliminar un objeto 'misa' de la base de datos
exports.removeItem = function(req, res){
    // Elimina el objeto 'misa' con el ID especificado en req.query.item_id
    Item.remove({_id : req.query.item_id}, function (err, item){
        if(err)
            res.send(err);
        // Devuelve todos los objetos 'misa' tras eliminar uno
        Item.find(function (err, item) {
            if(err)
                res.send(err);
            res.json(item);
        });
    });
};
=======
var Item = require('./misaEstructura');


// Obtiene todos los objetos misa de la base de datos
exports.getItem = function (req, res){
	
	//console.log(item)
	Item.find(
		function(err, item) {
			if (err)
				res.send(err)
					res.json(item); // devuelve todos los usuarios en JSON		
				}
			);
}

exports.setItem = function (req, res){
    console.log(req.body)
    //Creo el objeto misa
		Item.create(
			{
                organizador: req.body.organizador,
                lectura1 : req.body.lectura1,
                lectura2 : req.body.lectura2,
                salmo : req.body.salmo,
                evangelio : req.body.evangelio,
                miembrosCoro1 : req.body.miembrosCoro1,
                miembrosCoro2 : req.body.miembrosCoro2,
                miembrosCoro3 : req.body.miembrosCoro3,
                miembrosCoro4 : req.body.miembrosCoro4,
                miembrosCoro5 : req.body.miembrosCoro5,
                cancion1 : req.body.cancion1,
                cancion2 : req.body.cancion2,
                cancion3 : req.body.cancion3,
                cancion4 : req.body.cancion4,
                cancion5 : req.body.cancion5,
                cancion6 : req.body.cancion6,
                cancion7 : req.body.cancion7,
                cancion8 : req.body.cancion8,
                cancion9 : req.body.cancion9,
                monaguillo1 : req.body.monaguillo1,
                monaguillo2 : req.body.monaguillo2,
                monaguillo3 : req.body.monaguillo3,
                monaguillo4 : req.body.monaguillo4,
                fecha: req.body.fecha,
                hora: req.body.hora,

    
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
  
	Item.update( {_id : req.body.item_id},
        {
            $set:{
                
                organizador: req.body.organizador,
                lectura1 : req.body.lectura1,
                lectura2 : req.body.lectura2,
                salmo : req.body.salmo,
                evangelio : req.body.evangelio,
                miembrosCoro1 : req.body.miembrosCoro1,
                miembrosCoro2 : req.body.miembrosCoro2,
                miembrosCoro3 : req.body.miembrosCoro3,
                miembrosCoro4 : req.body.miembrosCoro4,
                miembrosCoro5 : req.body.miembrosCoro5,
                cancion1 : req.body.cancion1,
                cancion2 : req.body.cancion2,
                cancion3 : req.body.cancion3,
                cancion4 : req.body.cancion4,
                cancion5 : req.body.cancion5,
                cancion6 : req.body.cancion6,
                cancion7 : req.body.cancion7,
                cancion8 : req.body.cancion8,
                cancion9 : req.body.cancion9,
                monaguillo1 : req.body.monaguillo1,
                monaguillo2 : req.body.monaguillo2,
                monaguillo3 : req.body.monaguillo3,
                monaguillo4 : req.body.monaguillo4,
                fecha: req.body.fecha,
                hora: req.body.hora,

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
        //Obtiene  y devuelve todas las personas tras borrar una de ellas

        Item.find(function (err, find){
            if(err)
                res.send(err)
            res.json(item);
        });

    });

};

// exports.actualizaCalificacion = function (req, res) {
//     console.log(req.body)
//     Item.update({ _id: req.body.item_id },
//         {
//             $set: {
               
//                 calificacion: req.body.calificacion,
//                 votos: req.body.votos
//             }
//         },
//         function (err, item) {
//             if (err)
//                 res.send(err);
//             Item.find(function (err, item) {
//                 if (err)
//                     res.send(err)
//                 res.json(item);
//             });
//         });
// }



>>>>>>> 29ea02d334301b56c1cebbc581882dd7205a176f
