//mongodb+srv://chen-tang:<password>@cluster0.8ywno.mongodb.net/?retryWrites=true&w=majority
const mongooose = require('mongoose');
const connectionStr =
  'mongodb+srv://chen-tang:Chuwa123@cluster0.8ywno.mongodb.net/0220batch?retryWrites=true&w=majority';

const connectToMongoose = () => {
  mongooose.connect(connectionStr);

  const db = mongooose.connection;
  db.on('error', console.error.bind(console), 'connection error');
  db.on('open', () => {
    console.log('connect to mongodb');
  });
};

module.exports = connectToMongoose;
