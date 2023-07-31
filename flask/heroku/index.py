from dotenv_vault import load_dotenv
load_dotenv()

import os
from flask import Flask

app = Flask(__name__)

from dotenv_vault import load_dotenv
load_dotenv()

@app.route('/')
def hello():
  hello = os.getenv("HELLO")
  return f"Hello {hello}"

