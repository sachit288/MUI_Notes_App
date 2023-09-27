require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require('./Config/connectDB')
const app = express();
const Note = require('./Models/Note')
const findNote = require('./Middlewares/findNote')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true
}));

connectDB();

app.post('/posts', async(req, res)=>{
    const {title, body} = req.body;
    const newNote = new Note({ title, body});
    try{
        await newNote.save();
        return res.status(200).send(newNote)
    }
    catch(err){
        return res.status(500).json({ message: err.message })
    }

})

app.get('/posts', async(req, res)=>{
    const notes  = await Note.find();
    res.json(notes)

})
const deleteController = async(req, res)=>{
    await Note.deleteOne(req.note);
    res.send('deleted succesfully')
}

app.delete('/posts/:id', findNote, deleteController);




app.get('/', (req, res)=>{
    return res.send("hell0");
})

app.listen(4000, ()=>{
    console.log('App Started')
})