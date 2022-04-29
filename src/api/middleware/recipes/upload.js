const multer = require('multer');
const path = require('path');

const destination = (_req, _file, callback) => {
  callback(null, path.resolve('src/uploads'));
};

const filename = (req, _file, callback) => {
  const { id } = req.params;
  callback(null, `${id}.jpeg`);
};

const storage = multer.diskStorage({ destination, filename });

module.exports = multer({ storage });