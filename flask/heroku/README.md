# flask/heroku

Read [dotenv.org/docs/frameworks/flask/heroku](https://www.dotenv.org/docs/frameworks/flask/heroku)

## Notes for Nguyen

Successfully says `Hello World`

```
flask --app index run
# http://127.0.0.1:5000
```

Unsuccessfully says `Hello None`

```
gunicorn --workers 4 --bind 0.0.0.0:3001 wsgi:app
# http://localhost:3001
```

This DOES NOT occur if I used python-dotenv instead of python-dotenv-vault.

I've set up 2 examples here. Run both and see the different. The first uses python-dotenv-vault.

```
gunicorn --workers 4 --bind 0.0.0.0:3001 wsgi:app
# http://localhost:3001
```

The second uses python-dotenv.

```
gunicorn --workers 4 --bind 0.0.0.0:3001 wsgi2:app
# http://localhost:3001
```

Note the `wsgi2`.


Additional note. Gunicorn DOES work if `DOTENV_KEY` is passed to it.

```
DOTENV_KEY='dotenv://:key_df91b3e1709d316da48a9e05ac4b6818462e28890a518665173b12cfd6136cc3@dotenv.org/vault/.env.vault?environment=production' gunicorn --workers 4 --bind 0.0.0.0:3001 wsgi:app
```

So it is failing to degrade gracefully.
