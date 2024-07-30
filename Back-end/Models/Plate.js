// models/Plate.js
const mongoose = require('mongoose');

const plateSchema = new mongoose.Schema({
    state: { type: Boolean, required: true },
    image: { type: String, required: true }, // Ensure this field is set to required
    description: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Plate', plateSchema);
