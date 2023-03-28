const router = require('express').Router();
const deliveryAddressController = require('./controller')
const { policy_check} = require('../../middlewares');


router.post("/delivery-addresses",
 policy_check('create', 'DeliveryAddress'),
 deliveryAddressController.store );

router.put("/delivery-addresses/:id", 
 policy_check('update', 'DeliveryAddress'),
 deliveryAddressController.update );

router.delete("/delivery-addresses/:id",
 policy_check('delete', 'DeliveryAddress'),
 deliveryAddressController.destroy );
 
router.get("/delivery-addresses",
 policy_check('view', 'DeliveryAddress'),
 deliveryAddressController.index );

module.exports = router;