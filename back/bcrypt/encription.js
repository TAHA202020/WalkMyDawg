const bcrypt = require('bcrypt');

async function encryptPassword(password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

async function comparePassword(password, hash) {
  const result = await bcrypt.compare(password, hash);
  return result;
}

module.exports={encryptPassword,comparePassword}