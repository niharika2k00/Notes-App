
import express from 'express';
import asyncHandler from 'express-async-handler';
import NOTE from '../Models/Note_model.js';



// @desc       Fetch all the Notes
// @Route      GET/api/notes/
// @access      public

const getNotes = asyncHandler(async (req, res) => {   // Fetch all 6 products from the backend
    const notes = await NOTE.find({});
    res.json(notes);
});




// @desc       ADD Note
// @Route      POST/api/notes
// @access      public
const addNote = asyncHandler(async (req, res) => {

    // destructuring done
    const data = {
        name: req.body.name,
        dateAdded: req.body.dateAdded,
        description: req.body.description,
        color: req.body.color
    }

    const Note_card = new NOTE(data);   // Creation of a NEW NOTE

    try {
        const Note_Created = await Note_card.save();
        res.status(201).json(Note_Created);
    }

    catch (error) {
        console.log(error)
    }

});




// @desc       UPDATE Note
// @Route      PUT/api/notes/:id
// @access      public
const updateNote = asyncHandler(async (req, res) => {
    const data = {
        name: req.body.name,
        dateAdded: req.body.dateAdded,
        description: req.body.description,
        color: req.body.color
    }

    const ID = req.params.id;
    console.log(req.body);


    // findByIdAndUpdate(ID , DATA , CALLBACK)
    // try {
    await NOTE.findByIdAndUpdate(ID, data, (err, updatedData) => {
        if (!err)
            res.send(`Updated data of the specific Notes`)
        else
            console.log(err)
    })
    // }

    /*  catch (error) 
         {console.log(error)}
  */

});




// @desc       DELETE Note
// @Route      DELETE/api/notes/:id
// @access      public
const deleteNote = asyncHandler(async (req, res) => {
    const id = req.params.id;
    await NOTE.findByIdAndRemove(id);
    res.send('Note Deleted Successfullly');
});





export { getNotes, addNote, updateNote, deleteNote };