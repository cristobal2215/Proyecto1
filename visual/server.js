const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

//rutas
const users = require('./routes/usersRoutes'); 

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.disable('x-powered-by');

app.set('PORT', PORT);

//rutas
users(app);

server.listen(3000, '192.168.101.6' || 'localhost', function(){
    console.log('Aplication Nodejs '+ PORT + ' Iniciado.')
});

/* IP Casa Talca
server.listen(3000, '192.168.1.93' || 'localhost', function(){
    console.log('Aplication Nodejs '+ PORT + ' Iniciado.')

});*/ 

/* IP U
server.listen(3000, '192.168.226.155' || 'localhost', function(){
    console.log('Aplication Nodejs '+ PORT + ' Iniciado.')
});*/

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

module.exports = {
    app: app,
    server: server
}

/*
codigos de error:
200 -> exito
404 -> url no existe
500 -> error interno 
*/
