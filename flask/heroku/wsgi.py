from dotenv_vault import load_dotenv
load_dotenv()
from index import app

if __name__ == '__main__':
  app.run(debug=False)

