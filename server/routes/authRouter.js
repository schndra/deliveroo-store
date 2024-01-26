const express = require("express");
const router = express.Router();

const { login, register, logout } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/logout").delete(authMiddleware, logout);

module.exports = router;
