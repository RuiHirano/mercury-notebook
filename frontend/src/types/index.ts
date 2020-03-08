

export interface Status{
	Progress: number,
	Log: string,
	Error: string,
	Loading: boolean
}

export interface NotebookMetadata{
    Title: string,
    CreatedAt: number,
    UpdatedAt: number,
}

export interface Notebook{
    ID: string,
    Cells: Cell[],
    Metadata: NotebookMetadata
}

export interface CellMetadata{
}

export interface OutputMetadata{
}

export interface Output{
    Data: object,
    Metadata: OutputMetadata,
    OutputType: OutputType,
}

export interface Cell{
    ID: string,
    CellType: CellType,
    ExecutionCount?: number,
	Metadata: CellMetadata,
	Source: string[],
	Outputs: Output[]
}

export enum OutputType{
    EXECUTE_RESULT,
    DESPLAY_DATA,
}

export enum CellType{
    CODE, 
    MARKDOWN,
    TERMINAL,
}

export interface App{
    Notebook: Notebook
}