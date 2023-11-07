<?php
// example3
require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

$env_hello = $_ENV['HELLO'];
$server_hello = $_SERVER['HELLO'];
$getenv_hello = getenv('HELLO');

echo "ENV:    Hello {$env_hello}";
echo "\n";
echo "SERVER: Hello {$server_hello}";
echo "\n";
echo "getenv: Hello {$getenv_hello}";
