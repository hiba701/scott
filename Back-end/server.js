require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const connectedDB = require('./db/connectedDB');

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3001' // Allow requests from the frontend port
  }));
  // app.use(cors({
//     origin: 'http://localhost:3001'  // Replace with your frontend URL
//   }));

// Serve static files from the 'public/images' directory
// app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/Assets/Images', express.static(path.join(__dirname, 'public/Assets/Images')));


const pieceRouter = require('./Routes/pieceRouter');
const userRouter = require('./Routes/userRouter');

app.use('/pieces', pieceRouter);
app.use('/users', userRouter);

app.listen(process.env.PORT || 3000, () => {
    connectedDB();
    console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
});
