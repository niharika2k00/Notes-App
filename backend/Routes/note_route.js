

import express from 'express';
const router = express.Router();
import { getNotes, addNote, updateNote, deleteNote } from "../Controllers/notes_controller.js";



router.route('/').get(getNotes);           // fetch all data
router.route('/create').post(addNote);
router.route('/:id').put(updateNote);
router.route('/:id').delete(deleteNote);


export default router;







