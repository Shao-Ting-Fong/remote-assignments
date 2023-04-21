const express = require("express");
const router = express.Router();
const index = require("../controllers/index");

router.get("/", index.renderIndex);

router.get("/show", index.renderShow);

module.exports = router;
