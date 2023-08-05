# build.rb
require "bundler/setup"
require "dotenv-vault/load"
puts "Hello #{ENV["HELLO"]}"

