const mongoose = require('mongoose')

const connectedDB = () => {
    mongoose.connect(process.env.MONGOOSE_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(() => console.log('Error in connected'))
}

module.exports = connectedDB 