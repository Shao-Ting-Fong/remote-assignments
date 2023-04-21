const express = require("express");
const router = express.Router();
const { requireLogin } = require("../middleware");
const users = require("../controllers/users");

router.get("/register", users.renderRegister);

router.post("/register", users.registerUser);

router.get("/login", users.renderLogin);

router.post("/login", users.loginUser);

router.get("/member/:id", requireLogin, users.getUserInfo);

router.get("/logout", requireLogin, users.logoutUser);

module.exports = router;
