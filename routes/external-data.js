const { Router } = require("express");
const { getExternalData } = require("../controllers/external-data");


const router = Router();

router.get("/", getExternalData);


module.exports = router;
