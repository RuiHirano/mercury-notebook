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

	e.GET("/hello", handler.Hello())
	e.GET("/notebook/file", handler.SendFile()) // notebookファイル取得

	e.POST("/notebook/update", handler.UpdateFile())      // saveされた場合
	e.POST("/notebook/command/run", handler.RunCommand()) // ターミナル実行命令

	e.Start(":5000")

}
