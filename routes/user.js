const userController = require('../controllers/user');

const routes = [{
    method: 'GET',
    path: '/users',
    handler: userController.getAll
}];

module.exports = routes;