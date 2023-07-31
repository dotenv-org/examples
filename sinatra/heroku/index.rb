require "dotenv-vault/load"
require "sinatra"

get "/" do
  "Hello #{ENV["HELLO"]}."
end

