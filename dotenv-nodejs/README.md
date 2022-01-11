# README

An example of using dotenv with a simple nodejs script.

## USAGE

```bash
npm install
node index.js
```

## RECREATE

To recreate this:

```bash
npm install dotenv --save
```

Create index.js file

```js
require('dotenv').config()

console.log(process.env)
```

Add .env file

```
KEY=value
```
