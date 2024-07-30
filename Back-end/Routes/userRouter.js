const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UserController");

router.get("/:userId/plates", userController.getPlates);
router.post("/plates", userController.createPlate);
router.post("/create-user", userController.createUser);

module.exports = router;
