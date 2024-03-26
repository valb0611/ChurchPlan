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


