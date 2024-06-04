const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const noteSchema = new Schema({
  noteContent: {
    type: String,
    required: 'Note content is required!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  noteAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Note = model('Note', noteSchema);

module.exports = Note;