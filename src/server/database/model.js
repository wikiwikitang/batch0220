const mongooose = require('mongoose');
const todoSchema = require('./schema');

const Todo = mongooose.model('Todo', todoSchema);

module.exports = Todo;
