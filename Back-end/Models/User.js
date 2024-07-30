const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    name : String ,
    email : String ,
    submittedPieces : [{ type : mongoose.Schema.Types.ObjectId ,ref: 'Piece' }]
});

module.exports = mongoose.model('User' , userSchema);