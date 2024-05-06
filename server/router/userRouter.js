const express = require("express");
const app = express();
const router = express.Router();
const { signUp, login, logout } = require("../controller/userController");

app.use(express.json());
router.use(express.json());

router.post("/user/register", signUp);

router.post("/user/login", login);

router.post("/logout", logout);

module.exports = router;
