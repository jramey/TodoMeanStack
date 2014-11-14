var mongoose = require('mongoose');
var schema = new mongoose.Schema( { text: 'string', done: 'boolean' } );

module.exports = mongoose.model('Todos', schema);