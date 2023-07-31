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
gunicorn --workers 4 --bind 0.0.0.0:3002 wsgi:app
# http://localhost:3002
```

This DOES NOT occur if I used python-dotenv instead of python-dotenv-vault.
