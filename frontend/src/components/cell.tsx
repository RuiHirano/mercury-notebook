import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Select, MenuItem } from "@material-ui/core";
import { useUploadCell } from "../api/useAPI";
import { Notebook, Cell } from "../types";

const CellType = ["Markdown", "Code", "Terminal"]

interface Props{
    cell: Cell
}

const CellComponent: React.FC<Props> = (props) => {

    const [ cell, setCell ] = useState<Cell>(props.cell)
    const [ cellType, setCellType] = useState<string>(CellType[0])
    const { uploadCell, status } = useUploadCell()
    console.log("cell component")

    const handleUpload = ()=>{
        console.log("cell: ", cell)
        uploadCell(cell)
    }

    useEffect(()=>{
        if(status.Progress === 100){
            console.log("finish upload!")
        }else if(status.Error !== ""){
            console.log("error occur...")
        }
    }, [status])

    return (
        <div style={{marginTop: 20}}>
           <Select
                value={cellType}
                style={{width: 100}}
                onChange={(e: any)=>{setCellType(e.target.value)}}
                >
                <MenuItem value={CellType[0]}>{CellType[0]}</MenuItem>
                <MenuItem value={CellType[1]}>{CellType[1]}</MenuItem>
                <MenuItem value={CellType[2]}>{CellType[2]}</MenuItem>
            </Select>
           <TextField style={{width: 700}} onChange={(e)=>{}} label="output file name" variant="outlined"/>
           <Button variant={"contained"} onClick={()=>handleUpload()}>Upload</Button>
        </div>
    );
};

export default CellComponent;
