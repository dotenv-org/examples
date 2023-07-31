import os
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
  hello = os.getenv("HELLO")
  return f"Hello {hello}"

