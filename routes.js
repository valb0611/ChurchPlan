<<<<<<< HEAD
var controladorUsuario = require('./controladorUsuario');
var controladorMisa = require('./controladorMisa');
const path = require('path')

module.exports = function(app){
    
    app.get('/api/usuario',controladorUsuario.getItem)
    app.get('/api/misa',controladorMisa.getItem)

    app.put('/api/usuario',controladorUsuario.setItem)
    app.put('/api/misa',controladorMisa.setItem)

    app.post('/api/usuario',controladorUsuario.updateItem)
    app.post('/api/misa',controladorMisa.updateItem)

    app.delete('/api/usuario',controladorUsuario.removeItem)
    app.delete('/api/misa',controladorMisa.removeItem)
 

    app.get('/index',
    function(req,res){
        res.sendfile(path.join(__dirname + '/index.html'))
    })

    app.get('/index2',
    controladorUsuario.verificaParaIndex2
    )

    app.get('/registroimg',
    function(req,res){
        res.sendfile(path.join(__dirname + '/imgregistro.png'))
    })

    app.get('/misa',
    controladorUsuario.verificaParaMisa
    )

    


    app.get('/reloj',
    function(req,res){
        res.sendfile(path.join(__dirname + '/reloj.png'))
    })

    app.get('/documento',
    function(req,res){
        res.sendfile(path.join(__dirname + '/documento.png'))
    })

    app.get('/usuarios',
    function(req,res){
        res.sendfile(path.join(__dirname + '/usuarios.png'))
    })

    app.get('/loginimg',
    function(req,res){
        res.sendfile(path.join(__dirname + '/loginimg.png'))
    })

    app.get('/comunidad',
    function(req,res){
        res.sendfile(path.join(__dirname + '/comunidad.png'))
    })


    app.get('/Registrarse',
    function(req,res){
        res.sendfile(path.join(__dirname + '/signIn.html'))
    })

    app.get('/login',
    function(req,res){
        res.sendfile(path.join(__dirname + '/logIn.html'))
    })

    app.get('/signUpcss',
    function(req,res){
        res.sendfile(path.join(__dirname + '/registro.css'))
    })


    app.get('/logo',
    function(req,res){
        res.sendfile(path.join(__dirname + '/logo.jpg'))
    })

    app.get('/banner',
    function(req,res){
        res.sendfile(path.join(__dirname + '/banner2.png'))
    })

    
    app.get('/clasesenFrontEnd',
    function(req,res){
        res.sendfile(path.join(__dirname + '/clasesEnFrontEnd.js'))
    })
    
    app.post('/login',controladorUsuario.logIn)
    






    


=======
var controladorUsuario = require('./controladorUsuario');
var controladorMisa = require('./controladorMisa');
const path = require('path')

module.exports = function(app){
    
    app.get('/api/usuario',controladorUsuario.getItem)
    app.get('/api/misa',controladorMisa.getItem)

    app.put('/api/usuario',controladorUsuario.setItem)
    app.put('/api/misa',controladorMisa.setItem)

    app.post('/api/usuario',controladorUsuario.updateItem)
    app.post('/api/misa',controladorMisa.updateItem)

    app.delete('/api/usuario',controladorUsuario.removeItem)
    app.delete('/api/misa',controladorMisa.removeItem)
 

    app.get('/index',
    function(req,res){
        res.sendfile(path.join(__dirname + '/index.html'))
    })

    app.get('/index2',
    controladorUsuario.verificaParaIndex2
    )

    app.get('/registroimg',
    function(req,res){
        res.sendfile(path.join(__dirname + '/imgregistro.png'))
    })

    app.get('/misa',
    controladorUsuario.verificaParaMisa
    )

    


    app.get('/reloj',
    function(req,res){
        res.sendfile(path.join(__dirname + '/reloj.png'))
    })

    app.get('/documento',
    function(req,res){
        res.sendfile(path.join(__dirname + '/documento.png'))
    })

    app.get('/usuarios',
    function(req,res){
        res.sendfile(path.join(__dirname + '/usuarios.png'))
    })

    app.get('/loginimg',
    function(req,res){
        res.sendfile(path.join(__dirname + '/loginimg.png'))
    })

    app.get('/comunidad',
    function(req,res){
        res.sendfile(path.join(__dirname + '/comunidad.png'))
    })


    app.get('/Registrarse',
    function(req,res){
        res.sendfile(path.join(__dirname + '/signIn.html'))
    })

    app.get('/login',
    function(req,res){
        res.sendfile(path.join(__dirname + '/logIn.html'))
    })

    app.get('/signUpcss',
    function(req,res){
        res.sendfile(path.join(__dirname + '/registro.css'))
    })


    app.get('/logo',
    function(req,res){
        res.sendfile(path.join(__dirname + '/logo.jpg'))
    })

    app.get('/banner',
    function(req,res){
        res.sendfile(path.join(__dirname + '/banner2.png'))
    })

    
    app.get('/clasesenFrontEnd',
    function(req,res){
        res.sendfile(path.join(__dirname + '/clasesEnFrontEnd.js'))
    })
    
    app.post('/login',controladorUsuario.logIn)
    






    


>>>>>>> 29ea02d334301b56c1cebbc581882dd7205a176f
}