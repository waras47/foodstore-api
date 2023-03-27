const router = require('express').Router();
const categoryController = require('./controller');


router.post("/category", categoryController.store );
router.put("/category/:id",  categoryController.update );

router.delete("/category/:id", categoryController.destroy );
router.get("/category", categoryController.index );

module.exports = router;