package main

import (
	"fmt"

	"handler"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	fmt.Printf("Starting...")

	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Get("/hello", handler.Hello())
	e.Get("/notebook/file", handler.SendFile()) // notebookファイル取得

	e.Post("/notebook/update", handler.UpdateFile())      // saveされた場合
	e.Post("/notebook/command/run", handler.RunCommand()) // ターミナル実行命令

	e.Start(":5000")

}
