const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");
const userController = new UserController();

router.post("/add", userController.addUser);

module.exports = router;
