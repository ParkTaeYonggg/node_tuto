const { Router } = require("express");
const router = Router();
const login = require("./login");
const search = require("./search");

router.use(login);
router.use("/search/:category",search);

module.exports = router;