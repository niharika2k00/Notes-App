
import mongoose from 'mongoose';

const NoteSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  dateAdded: {
    type: String,
    // required: true,
    default: Date.now
  },

  description: {
    type: String,
    required: true,
  },

  color: {
    type: String
  }



}, { timestamp: true })  // 2nd arguement 

const Note = mongoose.model('Note', NoteSchema)
export default Note;