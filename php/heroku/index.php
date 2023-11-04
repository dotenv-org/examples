<?php
  // index.php
  require 'vendor/autoload.php';

  $dotenv = DotenvVault\DotenvVault::createImmutable(__DIR__);
  $dotenv->safeLoad();

  var_dump($_ENV); // remove this after you've confirmed it is working

  echo "Hello {$_ENV['HELLO']}";
