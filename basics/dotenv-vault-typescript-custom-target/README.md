# dotenv-vault-typescript-custom-target

Demonstrates loading from .env.vault into a custom target object - rather than process.env - in typescript.

## USAGE

```bash
npm install
npx ts-node index.ts // compiles and runs in memory

// console.log(result.parsed) // { HELLO: 'Universe' }
// console.log(result.parsed.HELLO) // 'Universe'
// console.log(process.env.HELLO) // undefined (as intentioned)
```
