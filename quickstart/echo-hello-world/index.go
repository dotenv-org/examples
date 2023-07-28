package main

import (
    "net/http"
    "log"
    "os"
    
    "github.com/labstack/echo/v4"
    "github.com/dotenv-org/godotenvvault"
)

func main() {
    err := godotenvvault.Load()
    if err != nil {
      log.Fatal("Error loading .env file")
    }

    hello := os.Getenv("HELLO")
    output := "Hello " + hello

    e := echo.New()
    e.GET("/", func(c echo.Context) error {
        return c.String(http.StatusOK, output)
    })
    e.Logger.Fatal(e.Start(":1323"))
}
