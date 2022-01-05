/* eslint-disable linebreak-style */
const router = require('express').Router();
const schemaRouter = require('./schema');
const bikes = require('./bikes');

router.use('/schema', schemaRouter);
router.use('/filter', bikes);
module.exports = router;
