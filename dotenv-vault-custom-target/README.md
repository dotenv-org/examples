# dotenv-vault-custom-target

Demonstrates loading from .env.vault into a custom target object - rather than process.env.

```js
node index.js

// console.log(result.parsed) // { HELLO: 'Universe' }
// console.log(result.parsed.HELLO) // 'Universe'
// console.log(process.env.HELLO) // undefined (as intentioned)
```
