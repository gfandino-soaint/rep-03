
//requerimos el uso de hapi
const Hapi = require('hapi');
// creamos nuestro servidor en el puerto 3000
const server = Hapi.server({
    port: 3000
});

server.route({
    method: 'GET',
    path: '/alive',
    handler: (request, h) => {
        return { mensaje: 'Servicio Activo'};
    }
})

server.route({
    method: 'GET',
    path: '/saludo/{nombre}',
    handler: (request, h) => {
        return { saludo: 'Hola '+request.params.nombre};
    }
})

//colocamos un route y un verbo http.
server.route({
    method: 'GET',
    path: '/suma/{a}/{b}',
    handler: (request, h) => {
        const aa = parseInt(request.params.a);
        const bb = parseInt(request.params.b);
        return { resultado: aa+bb};
    }
})

server.route({
    method: 'GET',
    path: '/resta/{a}/{b}',
    handler: (request, h) => {
        const aa = parseInt(request.params.a);
        const bb = parseInt(request.params.b);
        return { resultado: aa-bb};
    }
})

server.route({
    method: 'GET',
    path: '/multiplica/{a}/{b}',
    handler: (request, h) => {
        const aa = parseInt(request.params.a);
        const bb = parseInt(request.params.b);
        return { resultado: aa*bb};
    }
})

server.route({
    method: 'GET',
    path: '/divide/{a}/{b}',
    handler: (request, h) => {
        const aa = parseInt(request.params.a);
        const bb = parseInt(request.params.b);
        return { resultado: aa/bb};
    }
})


//Creamos el metodo de inicio.
const init = async () => {
    await server.start();
    console.log(`Servidor arriba: ${server.info.uri}`);
};
//Manejo de errores.
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
//Inicio del servicio.
init();