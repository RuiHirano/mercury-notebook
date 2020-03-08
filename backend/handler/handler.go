package handler

import (
	"net/http"

	"github.com/labstack/echo"
)

func Hello() echo.HandlerFunc {
	return func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello World")

	}
}

// SendFile: ファイルを送信する
func SendFile() echo.HandlerFunc {
	return func(c echo.Context) error {
		/*buf, err := ioutil.ReadFile("./../config/notebook.yaml")
		if err := nil {
			fmt.Println(err)
			return
		}

		data, err := ReadOnSliceMap(buf)
		if err != nil {
			fmt.Println(err)
			return
		}
		fmt.Printf("data %v", data)*/
		return c.String(http.StatusOK, "Hello World")
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
		// create command
		// run command
	}
}
