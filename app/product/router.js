const router = require('express').Router();
const multer = require('multer');
const os = require('os');
const { policy_check } = require('../../middlewares');

const productController = require('./controller');


router.post("/products", multer({dest: os.tmpdir()}).single('image'),
 policy_check('create', 'Product'),
 productController.store );

router.put("/products/:id",
 policy_check('update', 'Product'),
 multer({dest: os.tmpdir()}).single('image'), productController.update );

router.delete("/products/:id",
 policy_check('delete', 'Product'),
 productController.destroy );

router.get("/products/:id", productController.view );

router.get("/products", productController.index );

module.exports = router;