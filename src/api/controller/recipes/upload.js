const statusCode = require('../../helper/statusCode');
const { upload } = require('../../service/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { filename } = req.file;
    const { userRole } = req;
    const userId = req.id;

    if (!filename) {
      return res.status(statusCode.UNPROCESSABLE_ENTITY)
        .json({ message: 'File is missing!' });
    }

    const reqObj = { id, filename, userRole, userId };

    const result = await upload(reqObj);
    return res.status(result.status).json(result.message);
  } catch (err) {
    next(err);
  }
};