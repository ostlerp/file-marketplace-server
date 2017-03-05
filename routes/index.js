const user = require('./user');

const defaults = [{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
		reply('ok');
	}
}]

module.exports = [...defaults, ...user];