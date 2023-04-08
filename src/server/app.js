var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

let todos = [
  { content: 'write some code', isCompleted: false },
  { content: 'watch some movies', isCompleted: false },
  { content: 'listen some music', isCompleted: false },
];

const verifyTodoPayload = ({ req, isAddTodo = false }) => {
  return isAddTodo
    ? req.body && req.body.content && req.body.isCompleted !== undefined
    : req.body && req.body.index >= 0 && req.body.index < todos.length;
};

//1.GET method => return all todos in the mock database
app.get('/allTodos', (_, res) => {
  res.json(todos);
});

//2.Post method => add a todo into mock database
//all the data will be put in the req.body => {content:'dfdsfads',isCompleted: false}
app.post('/addTodo', (req, res) => {
  if (verifyTodoPayload({ req, isAddTodo: true })) {
    todos = [...todos, req.body];
    res.status(201).json({
      message: 'succeed',
      status: 201,
    });
    return;
  }

  //error handling
  res.status(404).json({
    error: 'failed',
    message: 'Input is not valid',
  });
});

// 3. Put method => modify isCompleted to be the opposite value
app.put('/modTodo', (req, res) => {
  if (verifyTodoPayload({ req })) {
    const index = req.body.index;
    todos[index].isCompleted = !todos[index].isCompleted;
    res.json({
      message: 'succeed',
    });
    return;
  }

  //error handling
  res.status(404).json({
    error: 'failed',
    message: 'Input is not valid',
  });
});

// 4. Delete method => delete one todo based on the the index passed by FE
app.delete('/delTodo', (req, res) => {
  if (verifyTodoPayload({ req })) {
    const index = req.body.index;
    todos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    res.json({
      message: 'succeed',
    });
    return;
  }

  //error handling
  res.status(404).json({
    error: 'failed',
    message: 'Input ins not valid',
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
