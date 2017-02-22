const User = require('../models/user');

exports.getAll = (request, reply) => {

    User.find().exec((err, results) => {
        reply(results);
    });
}