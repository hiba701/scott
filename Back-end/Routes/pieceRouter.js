const express = require("express");
const router = express.Router();
const pieceController = require("../Controllers/PieceController");

router.get("/", pieceController.getAllPieces);
router.post("/create", pieceController.createPiece);
router.put("/update/:pieceId", pieceController.updatePieceState);
router.delete("/delete", pieceController.deletePiece);
router.post("/like", pieceController.likePiece);

module.exports = router;