const mongoose = require('mongoose');
const Note = require('../Models/Note')

const findNote= async(req, res, next)=>{
    const note = await Note.findById(req.params.id);
    try{
        if(note == null){
            return res.status(404).json({ message: "Note does not exist" })
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
    req.note = note;
    next();
}

module.exports = findNote;