const bcrypt = require('bcryptjs')

const SAT_ROUNDS = 10

function encrypt(password) {
  return bcrypt.hashSync(password, SAT_ROUNDS)
}

function compare(password, hash) {
  return bcrypt.compareSync(password, hash)
}

module.exports = { encrypt, compare }
