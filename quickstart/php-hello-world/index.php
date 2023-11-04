<?php
  // index.php
  require 'vendor/autoload.php';

  $dotenv = DotenvVault\DotenvVault::createImmutable(__DIR__);
  $dotenv->safeLoad();

  echo "Hello {$_ENV['HELLO']}";
