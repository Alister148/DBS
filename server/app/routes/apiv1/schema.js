const router = require('express').Router();
const schemaController = require('../../controllers/schemaController');

router.get('/', schemaController.getSchema);
module.exports = router;
