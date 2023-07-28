import os

from dotenv_vault import load_dotenv
load_dotenv()

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
  hello = os.getenv("HELLO")
  return f"Hello {hello}"
