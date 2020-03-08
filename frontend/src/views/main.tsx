import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Select, MenuItem } from "@material-ui/core";
import { useUploadCell } from "../api/useAPI";
import { Notebook, Cell, CellType } from "../types";
import CellComponent from "../components/cell";
import { useSelector, useDispatch } from "react-redux";
import { ReduxState } from "../redux/modules";
import { appActions } from "../redux/modules/app";

//const CellType = ["Markdown", "Code", "Terminal"]

const mockInitialNotebook: Notebook = {
    ID: "",
    Cells: [],
    Metadata: {
        Title: "Untitled",
        CreatedAt: 0,
        UpdatedAt: 0,
    }
}

const Main: React.FC = () => {

    const notebook = useSelector((state: ReduxState) => state.App.Notebook)
    //const [ notebook, setNotebook ] = useState<Notebook>(mockInitialNotebook)
    const [ cell, setCell ] = useState<string>("")
    const dispatch = useDispatch()

    const handleUpload = ()=>{
        console.log("cell: ", cell)
        //uploadCell(cell)
        
    }

    const handleAddCell = ()=>{
        console.log("cell: ", cell)
        const newNotebook = {...notebook}
        newNotebook.Cells.push({
            ID: "0",
            CellType: CellType.CODE,
            ExecutionCount: 0,
            Metadata: {},
            Source: [],
            Outputs: []
        })
        dispatch(appActions.updateNotebook(newNotebook))
        
    }


    return (
        <div style={{display: "flex", flexDirection: "column"}}>
           <Typography>{"Main Page"}</Typography>
           <Button variant={"contained"} onClick={()=>handleAddCell()}>Add Cell</Button>
           {notebook.Cells.map((cell: Cell)=>(
            <CellComponent cell={cell}/>
           ))
           }
           
        </div>
    );
};

export default Main;
