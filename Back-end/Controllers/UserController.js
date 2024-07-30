const User = require("../Models/User");
const Piece = require("../Models/Piece");
const Plate = require("../Models/Plate");
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage }).single('image');

exports.getPlates = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const plates = await Piece.find({ artist: userId });
    res.json(plates);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching plates" });
  }
};

exports.createPlate = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error(`Error uploading file: ${err.message}`);
      return res.status(400).json({ message: "Error uploading file" });
    }

    try {
      const { userName, userEmail, state, description } = req.body;
      const image = req.file ? req.file.path : null; // Use the path of the uploaded file

      if (!image) {
        return res.status(400).json({ message: "Image file is required" });
      }

      let user = await User.findOne({ email: userEmail });
      if (!user) {
        user = new User({
          name: userName,
          email: userEmail
        });
        await user.save();
      }

      const plate = new Plate({
        state: state === 'true', // Convert string to boolean
        image,
        description,
        user: user._id
      });

      await plate.save();
      res.status(201).json(plate);
    } catch (err) {
      console.error(`Error creating plate: ${err.message}`);
      res.status(400).json({ message: "Error creating plate" });
    }
  });
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Export multer upload for use in routes
exports.upload = upload;
