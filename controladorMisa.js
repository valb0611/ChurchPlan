
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
