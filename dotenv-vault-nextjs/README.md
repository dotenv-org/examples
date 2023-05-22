# dotenv-vault-nextjs

Demonstrates using .env.vault with nextjs.


Install [dotenv-vault](https://www.dotenv.org/install/).

Encrypt your `.env` file to a `.env.vault` file.

```shell
$ npx dotenv-vault local build
```

This will create an encrypted `.env.vault` file along with a `.env.keys` file containing the encryption keys.

Try it out locally.


Set the `DOTENV_KEY` environment variable by copying and pasting the key value from the `.env.keys` file onto your server or cloud provider. For example in heroku:


```
DOTENV_KEY="dotenv://:key_cd9fe909e1adf109873d5117c3f4beda33a9a8006f4eaeb73a2a0d21bab0cbd4@dotenv.local/vault/.env.vault?environment=development" NEXT_PUBLIC_HELLO="dudeeee" npm run dev
```

Using your .env.vault file

```
DOTENV_KEY="dotenv://:key_cd9fe909e1adf109873d5117c3f4beda33a9a8006f4eaeb73a2a0d21bab0cbd4@dotenv.local/vault/.env.vault?environment=development" npm run dev
```

Not using your .env.vault file.

```
npm run dev
```

