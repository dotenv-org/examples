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


