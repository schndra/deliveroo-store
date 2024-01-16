const express = require("express");
const router = express.Router();

const {
  getSingleUser,
  getCurrentUser,
} = require("../controllers/userController");

router.route("/current-user").get(getCurrentUser);
router.route("/:id").get(getSingleUser);

module.exports = router;
