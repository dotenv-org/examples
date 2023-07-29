# dotenv-vault-nextjs

Demonstrates using .env.vault with nextjs - specifically using a `next.config.js` file.

Install [dotenv-vault](https://www.dotenv.org/install/).

Copy `.env.example` to `.env`.

Encrypt your `.env` file to a `.env.vault` file.

```shell
$ npx dotenv-vault local build
```

This will create an encrypted `.env.vault` file along with a `.env.keys` file containing the decryption keys.

Install the dotenv 16.1 or greater.

```shell
$ npm install dotenv@16.1.0-rc2 --save
```

Modify your preload scripts in `package.json`.

```
// package.json
...
  "scripts": {
    "dev": "node -r dotenv/config ./node_modules/.bin/next dev",
    "build": "node -r dotenv/config ./node_modules/.bin/next build",
    "start": "node -r dotenv/config ./node_modules/.bin/next start"
  },
```

Try it out locally.

```shell
$ DOTENV_KEY="dotenv://:key_cd9fe909e1adf109873d5117c3f4beda33a9a8006f4eaeb73a2a0d21bab0cbd4@dotenv.local/vault/.env.vault?environment=development" npm run dev
```

You should see `Hello Universe` when visiting `http://localhost:3000/`
