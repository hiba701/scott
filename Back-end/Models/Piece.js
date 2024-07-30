const mongoose = require ('mongoose');

const pieceSchema = new mongoose.Schema({
    category: String ,
    description: String ,
    image: String ,
    price : Number,
    likes: Number,
});

module.exports = mongoose.model('Piece',pieceSchema);