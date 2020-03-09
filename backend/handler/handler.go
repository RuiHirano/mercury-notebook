package handler

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"encoding/json"
	"types"

	"github.com/labstack/echo"
	yaml "gopkg.in/yaml.v2"
)

func Hello() echo.HandlerFunc {
	return func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello World")
	}
}

// SendFile: ファイルを送信する
func SendFile() echo.HandlerFunc {
	return func(c echo.Context) error {
		buf, err := ioutil.ReadFile("./config/notebook.yaml")
		if err != nil {
			fmt.Println(err)
			return err
		}

		var notebook types.Notebook
		err = yaml.Unmarshal(buf, &notebook)
		if err != nil {
			return err
		}
		fmt.Printf("data %v", notebook)
		notebookjson, _ := json.Marshal(notebook)
		return c.String(http.StatusOK, string(notebookjson))
	}
}

// UpdateFile: ファイルを作成し、保存する
func UpdateFile() echo.HandlerFunc {
	return func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello World")
	}
}

// RunCommand: コマンドを実行する
func RunCommand() echo.HandlerFunc {
	return func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello World")
		// create command
		// run command
	}
}
