# examples/dotenv-supertest

An example of using dotenv with supertest, and also running your tests using your encrypted test environment variables inside of .env.vault.

```bash
npm install
node index.js (to run Hello World)
node test.js (to see the test fail because it using .env)
DOTENV_KEY="dotenv://:key_6253826957f1cb2b4d5a1bbc0dc33ffeb6ccfb573cd3df408daab4a796b41afa@dotenv.local/vault/.env.vault?environment=test" node test.js (to see the test pass because it using .env.test encrypted in .env.vault)
```

### How did we generate the .env.vault?

We created a `.env.test` file and then ran `npx dotenv-vault local build`. That build our `.env.vault` file and `.env.keys` file. The `.env.keys` file contains the the decryption keys to `.env.vault`.

```bash
npx dotenv-vault local keys
```
