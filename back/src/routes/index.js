const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/gerCharDetail");

const router = Router();

router.get("/onsearch/:id", getCharById)
router.get("/detail/:id", getCharDetail)


module.exports = router;