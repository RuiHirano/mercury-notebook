package handler

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"

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
		/*lines := []string{"１２３４５\n", "あいうえお\n", "1234567890\n"}
		b := []byte{}
		for _, line := range lines {
			ll := []byte(line)
			for _, l := range ll {
				b = append(b, l)
			}
		}*/

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

		err := ioutil.WriteFile("write.txt", b, 0666)
		if err != nil {
			fmt.Println(os.Stderr, err)
			os.Exit(1)
		}
		return c.String(http.StatusOK, "")
	}
}

// RunCommand: コマンドを実行する
func RunCommand() echo.HandlerFunc {
	return func(c echo.Context) error {
		return c.String(http.StatusOK, "")
		// create command
		// run command
	}
}
