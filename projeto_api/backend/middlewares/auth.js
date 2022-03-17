const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const privateKey = 'private-key';

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided.' });
  }

  try {
    const [, token] = authHeader.split(' ');

    const decoded = await promisify(jwt.verify)(token, privateKey);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid.' });
  }
};