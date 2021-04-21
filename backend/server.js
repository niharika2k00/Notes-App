
// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './config/DB.js';
import colors from 'colors';
import cors from 'cors';
import notes_route from './Routes/note_route.js';



dotenv.config();
ConnectDB();
const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000", // <--- location of the react app were connecting to      
        credentials: true,
    })
);


// SYNTAX: app.get( path, callback )
app.get('/', (req, res) => {                       //ES6 FUNCTION    
    res.send('API is running succesfully');
})


// SYNTAX: app.use(path, callback)
app.use('/api/notes', notes_route);



const port = process.env.PORT || 4041
app.listen(port, console.log(`Server Connected in ${port} for ${process.env.NODE_ENV}`));

// mongodb+srv://niharika_28:niharika_28@notes-taking-app.yxmxh.mongodb.net/Notes-Taking-App?retryWrites=true&w=majority