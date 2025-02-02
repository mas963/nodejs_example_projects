import {Router} from "express";
import {validateIdParam, validateNoteBody, validateNoteTitle} from "../lib/validator-functions";
import {addNote, deleteNote, getAllNotes, getNote, updateNote} from "../handlers/notes";

const notesRouter = Router();

notesRouter.get('/get-note/:id', validateIdParam(), getNote);
notesRouter.get('/get-all-notes', getAllNotes);
notesRouter.post('/add-note', validateNoteBody(), validateNoteTitle(), addNote);
notesRouter.put('/update-note/:id', validateIdParam(), validateNoteBody(), validateNoteTitle(), updateNote);
notesRouter.delete('/delete-note/:id', validateIdParam(), deleteNote);

export default notesRouter;