/**
 * Simple password hashing utility
 * Uses Node.js crypto for SHA-256 hashing
 */

const crypto = require('crypto')

function hashPassword(password, salt = 'dncl-landing-2024') {
  return crypto
    .createHash('sha256')
    .update(password + salt)
    .digest('hex')
}

// Get password from command line args
const password = process.argv[2]

if (!password) {
  console.error('Usage: node hash-password.js <password>')
  process.exit(1)
}

const hashed = hashPassword(password)
console.log(hashed)

