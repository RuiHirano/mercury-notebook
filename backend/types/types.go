package types

func init() {}

type Notebook struct {
	ID       string           `json:"id" yaml:"id"`
	Cells    []Cell           `json:"cells" yaml:"cells"`
	Metadata NotebookMetadata `json:"metadata" yaml:"metadata"`
}

type Cell struct {
	ID             string       `json:"id" yaml:"id"`
	CellType       CellType     `json:"cell_type" yaml:"cell_type"`
	ExecutionCount uint64       `json:"execution_count" yaml:"execution_count"`
	Metadata       CellMetadata `json:"metadata" yaml:"metadata"`
	Source         []string     `json:"source" yaml:"source"`
	Outputs        []Output     `json:"outputs" yaml:"outputs"`
}

type Output struct {
	Data       string         `json:"data" yaml:"data"`
	Metadata   OutputMetadata `json:"metadata" yaml:"metadata"`
	OutputType OutputType     `json:"output_type" yaml:"output_type"`
}

type NotebookMetadata struct {
	Title     string `json:"title" yaml:"title"`
	CreatedAt uint64 `json:"created_at" yaml:"created_at"`
	UpdatedAt uint64 `json:"updated_at" yaml:"updated_at"`
}

type CellMetadata struct {
}

type OutputMetadata struct {
}

type OutputType uint64

const (
	OutputType_EXECUTE_RESULT OutputType = 0
	OutputType_DESPLAY_DATA   OutputType = 1
)

type CellType uint64

const (
	CellType_CODE     CellType = 0
	CellType_MARKDOWN CellType = 1
	CellType_RESULT   CellType = 2
)
