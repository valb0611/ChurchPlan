var mongoose =require('mongoose');

module.exports = mongoose.model('usuario', {

    
    correo : String,
    clave : String,
    nombreCompleto : String,
    
    

});