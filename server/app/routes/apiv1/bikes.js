const router = require('express').Router();
const bikesController = require('../../controllers/bikesController');

router.post('/', bikesController.filter);
module.exports = router;
