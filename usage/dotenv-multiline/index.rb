require 'dotenv'
require 'json'
Dotenv.load('.env')

puts ENV.inspect

puts ENV['MULTI_SINGLE_AND_DOUBLE_QUOTED']

parsed = JSON.parse(ENV['MULTI_SINGLE_AND_DOUBLE_QUOTED'])
puts parsed["foo"]
