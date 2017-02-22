'use strict';

require('dotenv').config();
const Hapi = require('hapi');
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('db connected');
});

const server = new Hapi.Server();
server.connection({ port: process.env.PORT, host: process.env.HOST });
server.route(routes);

server.start((err) => {
	if(err) {
		throw err;
	}

	console.log(`Server running at: ${server.info.uri}`);
});
