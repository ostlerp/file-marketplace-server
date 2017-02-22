const userController = require('../controllers/user');

const routes = [{
    method: 'GET',
    path: '/user',
    handler: userController.getAll
}];

module.exports = routes;