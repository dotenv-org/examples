console.log(process.env)
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello ${process.env.HELLO}`,
        input: event,
      },
      null,
      2
    ),
  };
};
