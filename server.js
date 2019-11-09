
//

const express = require('express');
//const path = require('path');
//const bodyParser = require('body-parser');

const port = 8080

const app = express();



app.get('/alive', (req, res) => {
  console.log('ejecutando /alive');
  res.send( { mensaje: 'Servicio Activo'});
});



/*app.post('/hero/**', (req, res) => {
  const heroId = parseInt(req.params[0]);
  const foundHero = heroes.find(subject => subject.id === heroId);

  if (foundHero) {
      for (let attribute in foundHero) {
          if (req.body[attribute]) {
              foundHero[attribute] = req.body[attribute];
              console.log(`Set ${attribute} to ${req.body[attribute]} in hero: ${heroId}`);
          }
      }
      res.status(202).header({Location: `http://localhost:${port}/hero/${foundHero.id}`}).send(foundHero);
  } else {
      console.log(`Hero not found.`);
      res.status(404).send();
  }
});*/


console.log(`Servicio arriba en ${port}`);
app.listen(port);

/*server.route({
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
init();*/