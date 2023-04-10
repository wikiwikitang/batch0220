//schema => define field => generate model => use model => query, insert, delete, update
const mongoose = require('mongoose');
/*
{
  content: "Fdafa",
  isCompleted: false
  id: "fdfadfasfsf"

}
*/

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = todoSchema;
