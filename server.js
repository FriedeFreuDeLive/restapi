require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

//mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
//mongoose.connect('mongodb+srv://FriedeFreuDe:A13b46c79@cluster0.xcvra.mongodb.net/DB01?retryWrites=true&w=majority',
mongoose.connect(process.env.DATABASE_URL,
{ useNewUrlParser : true, useUnifiedTopology: true},
() => console.log("joo"));
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Databasee'));

app.use(express.json());

const notesRouter = require('./routes/notes');
app.use('/notes', notesRouter);

app.listen(3000, () => console.log('Server Started'));