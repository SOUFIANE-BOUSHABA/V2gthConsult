//import dep express
const express = require("express");
// get fun Router in express
const router = express.Router();

const jwt = require("../util/jwt")
// import controller
const InterlocuteurController = require("../controllers/InterlocuteurController");

router.post("/login", InterlocuteurController.login);
router.post("/admission", InterlocuteurController.admission);
router.get("/devis", jwt.verifiyToken, InterlocuteurController.devis);

module.exports = router;


// [post, get, patch, put, delete, head, link]