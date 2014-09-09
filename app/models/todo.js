var mongoose = require('mongoose');
var schema = new mongoose.Schema( { text: 'string' } );

module.exports = mongoose.model('Todos', schema);