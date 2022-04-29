const express = require('express');
const auth = require('../../middleware/auth');
const auth2 = require('../../middleware/auth2');
const { exists } = require('../../middleware/recipes');
const uploadMid = require('../../middleware/recipes/upload');

const router = express.Router({ mergeParams: true });

router.post('/', auth, exists, require('./create'));
router.get('/', require('./getAll'));
router.get('/:id', require('./findById'));
router.put('/:id/image', auth2, uploadMid.single('image'), require('./upload'));
router.put('/:id', auth2, exists, require('./update'));
router.delete('/:id', auth2, require('./remove'));

module.exports = router;