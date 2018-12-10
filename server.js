'use strict';
exports.__esModule = true;
var dbcon = require('./db_connection/dbconnection');
var pschema = require('./schema/prodschema');
var uschema = require('./schema/userschema');
var proute = require('./routing/products');
var uroute = require('./routing/users');
var cors= require('cors');
var corsHeaders = require('hapi-cors-headers')
 
const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost', 
    port: 8001
});

server.ext('onPreResponse', corsHeaders)

//module.exports = connection;

server.register([
    proute,uroute
], (err) => {

    if (err) {
        throw err;
    }

    // Start the server
    server.start((err) => {
        console.log('Server running at:', server.info.uri);
    });

});

// Create a server with a host and port
//var server = new hapi_1["default"].Server({ port: 8001, host: 'localhost' }); //, load: { sampleInterval: 1000 }
//console.log(server);
