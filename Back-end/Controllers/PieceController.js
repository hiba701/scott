const Piece = require("../Models/Piece");
const User = require("../Models/User");

exports.getAllPieces = async (req, res) => {
  try {
    const pieces = await Piece.find().populate("likes");
    res.json(pieces);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching" });
  }
};

// exports.getPieceById = async (req, res) => {
//   try {
//     const piece = await Piece.findById(req.params.id)
//       .populate("likes")
//     res.json(piece);
//   } catch (err) {
//     console.error(err);
//     res.status(404).json({ message: "Piece not found" });
//   }
// };


exports.createPiece = async (req, res) => {
    try {
      const piece = new Piece(req.body);
      piece.state = true;
      await piece.save();
      res.json(piece);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Error creating piece" });
    }
  };

  exports.updatePieceState = async (req, res) => {
    try {
      const {pieceId} = req.params;
      const piece = await Piece.findById(pieceId);
      if (!piece) {
        return res.status(404).json({ message: "Piece not found" });
      }
      piece.state = req.body.state === 'true';
      await piece.save();
      res.json(piece);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Error updating piece state" });
    }
  };

exports.deletePiece = async (req, res) => {
  try {
    await Piece.findByIdAndRemove(req.params.id);
    res.json({ message: "Piece deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Error deleting piece" });
  }
};

exports.likePiece = async (req, res) => {
    try {
      const pieceId = req.params.id;
      const piece = await Piece.findById(pieceId);
      if (!piece) {
        return res.status(404).json({ message: "Piece not found" });
      }
      piece.likes++;
      await piece.save();
      res.json({ message: "Piece liked successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error liking piece" });
    }
  };
