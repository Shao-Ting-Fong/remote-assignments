const express = require("express");
const router = express.Router();
const { requireLogin } = require("../middleware");
const users = require("../controllers/users");

router.route("/register").get(users.renderRegister).post(users.registerUser);

router.route("/login").get(users.renderLogin).post(users.loginUser);

router.get("/member/:id", requireLogin, users.getUserInfo);

router.get("/logout", requireLogin, users.logoutUser);

module.exports = router;
