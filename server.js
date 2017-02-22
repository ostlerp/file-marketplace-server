'use strict';

require('dotenv').config();
const Hapi = require('hapi');
const routes = require('./routes');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT, host: process.env.HOST });
server.route(routes);

server.start((err) => {
	if(err) {
		throw err;
	}

	console.log(`Server running at: ${server.info.uri}`);
});
