const express = require('express');
const { exists, validEmail } = require('../../middleware/users');

const router = express.Router({ mergeParams: true });

router.post('/', exists, validEmail, require('./create'));

module.exports = router;
