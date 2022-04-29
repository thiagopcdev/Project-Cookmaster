const express = require('express');
const { exists, validEmail } = require('../../middleware/login');

const router = express.Router({ mergeParams: true });

router.post('/', exists, validEmail, require('./login'));

module.exports = router;