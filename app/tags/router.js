const router = require('express').Router();
const tagController = require('./controller');


router.post("/tags", tagController.store );
router.put("/tags/:id",  tagController.update );

router.delete("/tags/:id", tagController.destroy );
router.get("/tags", tagController.index );

module.exports = router;