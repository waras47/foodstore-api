const router = require('express').Router();
const tagController = require('./controller')
const { policy_check} = require('../../middlewares');


router.post("/tags",
 policy_check('create', 'Tag'),
 tagController.store );

router.put("/tags/:id",
 policy_check('update', 'tag'),
 tagController.update );

router.delete("/tags/:id", 
 policy_check('delete', 'Tag'),
 tagController.destroy );
 
router.get("/tags", tagController.index );

module.exports = router;