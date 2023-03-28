const router = require('express').Router();
const { policy_check } = require('../../middlewares');
const categoryController = require('./controller');


router.post("/category",
 policy_check('create', 'Category'), 
 categoryController.store );

router.put("/category/:id",
 policy_check('update', 'Category'),
 categoryController.update );

router.delete("/category/:id",
 policy_check('delete', 'Category'),
 categoryController.destroy );

router.get("/category", categoryController.index );

module.exports = router;