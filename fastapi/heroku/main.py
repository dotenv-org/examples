from dotenv_vault import load_dotenv
load_dotenv()

import os
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    hello = os.getenv("HELLO")
    return {"Hello": hello}

