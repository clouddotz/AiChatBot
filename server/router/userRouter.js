const express = require("express");
const app = express();
const router = express.Router();
const { signUp, login } = require("../controller/userController");

app.use(express.json());
router.use(express.json());

router.post("/user/register", signUp);

router.post("/user/login", login);

module.exports = router;
