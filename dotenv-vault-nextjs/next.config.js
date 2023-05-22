const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  env: {
    NEXT_PUBLIC_HELLO: process.env.NEXT_PUBLIC_HELLO
  }
};
