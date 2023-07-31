from dotenv_vault import load_dotenv
load_dotenv()

import os
from flask import Flask

for key, value in os.environ.items():
  print(f"{key}={value}")

app = Flask(__name__)

@app.route('/')
def hello():
  hello = os.getenv("HELLO")
  return f"Hello {hello}"

