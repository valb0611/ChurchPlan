<<<<<<< HEAD
// Función para realizar peticiones AJAX
function EjecutaAjax(verbo, url, dato) {
    // Se retorna una promesa para manejar la asincronía de las peticiones
    return new Promise(function(resolve, reject) {
        try {
            // Se crea una nueva instancia de XMLHttpRequest
            let peticion = new XMLHttpRequest();
            // Se configuran los parámetros de la petición
            peticion.open(verbo, url);
            peticion.setRequestHeader('Content-Type', 'application/json');
            // Se define el comportamiento cuando la petición termina
            peticion.onload = function() {
                if (peticion.status === 200) {
                    // Si la petición es exitosa, se resuelve la promesa con la respuesta
                    console.log(JSON.parse(peticion.response));
                    resolve(JSON.parse(peticion.response));
                } else {
                    // Si hay un error en la petición, se rechaza la promesa con un mensaje de error
                    reject(new Error(peticion.statusText));
                }
            };
            // Si hay un error de red, se rechaza la promesa
            peticion.onerror = function() {
                reject(new Error("Error de red"));
            };
            // Se envía la petición con los datos
            peticion.send(JSON.stringify(dato));
        } catch (err) {
            // Si ocurre un error durante el proceso, se rechaza la promesa con un mensaje de error
            reject(err.message);
        }
    });
}

// Clase para contener métodos básicos de CRUD
class _Metodosbasicos {
    constructor() {}

    Guardar(urlapiaconsumir, funcionajecutar) {
        // Método para guardar un nuevo registro
        EjecutaAjax("PUT", urlapiaconsumir, this).then(function(response) {
            console.log(response);
            funcionajecutar(response);
        }, function(error) {
            console.error(error);
        });
    }

    Modificar(urlapiaconsumir, funcionaejecutar) {
        // Método para modificar un registro existente
        EjecutaAjax("POST", urlapiaconsumir, this).then(function(response) {
            console.log(response);
            funcionaejecutar(response);
        }, function(error) {
            console.error(error);
        });
    }

    Eliminar(urlapiaconsumir, funcionaejecutar) {
        // Método para eliminar un registro existente
        EjecutaAjax("DELETE", urlapiaconsumir, this).then(function(response) {
            console.log(response);
            funcionaejecutar(response);
        }, function(error) {
            console.error(error);
        });
    }

    Seleccionartodos(urlapiaconsumir, funcionaejecutar) {
        // Método para seleccionar todos los registros
        EjecutaAjax("GET", urlapiaconsumir, this).then(function(response) {
            console.log(response);
            funcionaejecutar(response);
        }, function(error) {
            console.error(error);
        });
    }
}

// Clase para representar un usuario con métodos específicos
class _usuario extends _Metodosbasicos {
    constructor(correo, clave, nombreCompleto) {
        super();
        this.correo = correo;
        this.clave = clave;
        this.nombreCompleto = nombreCompleto;
    }

    logIn(urlapiaconsumir, funcionaejecutar) {
        // Método para realizar inicio de sesión
        EjecutaAjax("POST", urlapiaconsumir, this).then(function(response) {
            funcionaejecutar(response)
        }, function(error) {
            console.error(error);
        });
    }
}

// Clase para representar una misa con métodos específicos
class _misa extends _Metodosbasicos {
    constructor(
        organizador,
         lectura1, 
         lectura2, 
         salmo, 
         evangelio, 
         miembrosCoro1, 
         miembrosCoro2, 
         miembrosCoro3, 
         miembrosCoro4, 
         miembrosCoro5, 
         cancion1, 
         cancion2, 
         cancion3, 
         cancion4, 
         cancion5, 
         cancion6, 
         cancion7, 
         cancion8, 
         cancion9, 
         monaguillo1, 
         monaguillo2, 
         monaguillo3, 
         monaguillo4, 
         fecha, 
         hora) {
        super();// Llama al constructor de la clase base
        // Asignación de los parámetros a propiedades de la clase
        this.organizador = organizador;
        this.lectura1 = lectura1;
        this.lectura2 = lectura2;
        this.salmo = salmo;
        this.evangelio = evangelio;
        this.miembrosCoro1 = miembrosCoro1;
        this.miembrosCoro2 = miembrosCoro2;
        this.miembrosCoro3 = miembrosCoro3;
        this.miembrosCoro4 = miembrosCoro4;
        this.miembrosCoro5 = miembrosCoro5;
        this.cancion1 = cancion1;
        this.cancion2 = cancion2;
        this.cancion3 = cancion3;
        this.cancion4 = cancion4;
        this.cancion5 = cancion5;
        this.cancion6 = cancion6;
        this.cancion7 = cancion7;
        this.cancion8 = cancion8;
        this.cancion9 = cancion9;
        this.monaguillo1 = monaguillo1;
        this.monaguillo2 = monaguillo2;
        this.monaguillo3 = monaguillo3;
        this.monaguillo4 = monaguillo4;
        this.fecha = fecha;
        this.hora = hora;
    }
}
=======
function EjecutaAjax(verbo, url, dato) {
    return new Promise(function (resolve, reject) {
        try {
            let peticion = new XMLHttpRequest();
            peticion.open(verbo, url);
            peticion.setRequestHeader('Content-Type', 'application/json');
            peticion.onload = function () {
                if (peticion.status === 200) {
                    console.log(JSON.parse(peticion.response));
                    resolve(JSON.parse(peticion.response));
                    console.log(peticion);
                    // quitarcargando();
                }
                else {
                    reject(new Error(peticion.statusText));
                }


            };
            peticion.onerror = function () {
                reject(new Error("Error de red"));

            };

            peticion.send(JSON.stringify(dato));
            // muestracargando();
        }

        catch (err) {
            reject(err.message);
        }

    });
}
class _Metodosbasicos {
    constructor() {

    }
    Guardar(urlapiaconsumir, funcionajecutar) {


        EjecutaAjax("PUT", urlapiaconsumir, this).then(function (response) {
            console.log(response);
            funcionajecutar(response);
         


        },
            function (error) {
                console.error(error);
                console.log(
                    error
                )
            }
        );



    }
    Modificar(urlapiaconsumir, funcionaejecutar) {

        EjecutaAjax("POST", urlapiaconsumir, this).then(function (response) {
            console.log(response);
           

            funcionaejecutar(response);
        },
            function (error) {
                console.error(error);
               
            }
        );


    }

    Eliminar(urlapiaconsumir, funcionaejecutar) {

        EjecutaAjax("DELETE", urlapiaconsumir, this).then(function (response) {
            console.log(response);
            funcionaejecutar(response);
        },
            function (error) {
                console.error(error);
                
            }
        );


    }


    Seleccionartodos(urlapiaconsumir, funcionaejecutar) {

        EjecutaAjax("GET", urlapiaconsumir, this).then(function (response) {
            console.log(response);
            funcionaejecutar(response);
        },
            function (error) {
                console.error(error);
                console.log(error);
            }
        );


    }
}
class _usuario extends _Metodosbasicos {


    constructor(
        correo,
        clave,
        nombreCompleto
        
    ) {
        super();
        this.correo = correo;
        this.clave = clave;
        this.nombreCompleto = nombreCompleto;
        
        
    
    }
    logIn(urlapiaconsumir,funcionaejecutar) {


        EjecutaAjax("POST", urlapiaconsumir, this).then(function (response) {
            
           funcionaejecutar(response)
        },
            function (error) {
                console.error(error);
                console.log(
                    error
                )
            }
        );



    }

    


}
class _misa extends _Metodosbasicos {


    constructor(
        organizador,
        lectura1,
        lectura2,
        salmo,
        evangelio,
        miembrosCoro1,
        miembrosCoro2,
        miembrosCoro3,
        miembrosCoro4,
        miembrosCoro5,
        cancion1,
        cancion2,
        cancion3,
        cancion4,
        cancion5,
        cancion6,
        cancion7,
        cancion8,
        cancion9,
        monaguillo1,
        monaguillo2,
        monaguillo3,
        monaguillo4,
        fecha,
        hora
        

        
    ) {
        super();
        this.organizador= organizador;
        this.lectura1=lectura1;
        this.lectura2=lectura2;
        this.salmo=salmo;
        this.evangelio=evangelio;
        this.miembrosCoro1=miembrosCoro1;
        this.miembrosCoro2=miembrosCoro2;
        this.miembrosCoro3=miembrosCoro3;
        this.miembrosCoro4=miembrosCoro4;
        this.miembrosCoro5=miembrosCoro5;
        this.cancion1=cancion1;
        this.cancion2=cancion2;
        this.cancion3=cancion3;
        this.cancion4=cancion4;
        this.cancion5=cancion5;
        this.cancion6=cancion6;
        this.cancion7=cancion7;
        this.cancion8=cancion8;
        this.cancion9=cancion9;
        this.monaguillo1=monaguillo1;
        this.monaguillo2=monaguillo2;
        this.monaguillo3=monaguillo3;
        this.monaguillo4=monaguillo4;
        this.fecha=fecha;
        this.hora=hora;
       
       
        
    
    }


}


>>>>>>> 29ea02d334301b56c1cebbc581882dd7205a176f
