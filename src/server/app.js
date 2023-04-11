var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { v4: uuidv4 } = require('uuid');

const Todo = require('./database/model');

//connect to database
const connectToMongoose = require('./database/connect');
connectToMongoose();

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

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
    : req.body && req.body.id;
};

//1.GET method => return all todos in the mock database
app.get('/allTodos', async (_, res) => {
  const todosFromDataBase = await Todo.find({});
  const todoList = todosFromDataBase.map(({ content, isCompleted, id }) => {
    return {
      content,
      isCompleted,
      id,
    };
  });
  res.json(todoList);
});

//2.Post method => add a todo into mock database
//all the data will be put in the req.body => {content:'dfdsfads',isCompleted: false}
app.post('/addTodo', async (req, res) => {
  //error first
  if (!verifyTodoPayload({ req, isAddTodo: true })) {
    //error handling
    res.status(404).json({
      error: 'failed',
      message: 'Input is not valid',
    });
    return;
  }

  const { content, isCompleted } = req.body;
  const newTodo = new Todo({
    content,
    isCompleted,
    id: uuidv4(),
  });

  const retValue = await newTodo.save();
  if (newTodo === retValue) {
    res.status(201).json({
      message: 'succeed',
      status: 201,
      newTodo: {
        content: newTodo.content,
        isCompleted: newTodo.isCompleted,
        id: newTodo.id,
      },
    });
  }
});

// 3. Put method => modify isCompleted to be the opposite value
app.put('/modTodo', async (req, res) => {
  if (!verifyTodoPayload({ req })) {
    //error handling
    res.status(404).json({
      error: 'failed',
      message: 'Input is not valid',
    });
    return;
  }

  const id = req.body.id;
  const queryResult = await Todo.findOne({ id });
  const { modifiedCount } = await queryResult.updateOne({
    isCompleted: !queryResult.isCompleted,
  });

  if (!modifiedCount) {
    res.status('404').json({
      message: 'update failed',
    });
    return;
  }

  res.status(200).json({
    message: 'update succeed',
  });
});

// 4. Delete method => delete one todo based on the the index passed by FE
app.delete('/delTodo', async (req, res) => {
  if (!verifyTodoPayload({ req })) {
    //error handling
    res.status(404).json({
      error: 'failed',
      message: 'Input ins not valid',
    });
    return;
  }

  const id = req.body.id;
  const { deletedCount } = await Todo.deleteOne({ id });
  if (!deletedCount) {
    res.status('404').json({
      message: 'delete failed',
    });
    return;
  }

  res.status(200).json({
    message: 'delete succeed',
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
