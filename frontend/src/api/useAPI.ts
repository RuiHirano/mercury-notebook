import { useState, useCallback } from 'react'
import { Status, Cell } from '../types'
import API from '.'
import { useDispatch } from 'react-redux'
import { appActions } from '../redux/modules/app'

/////////////////////////////////////////////////
//////////            Script 実行        ////////
////////////////////////////////////////////////


export const useUploadCell = () => {
  const [status, setStatus] = useState<Status>({Progress: 0, Log: "", Error: "", Loading: false})
  const dispatch = useDispatch()
  const uploadCell = useCallback(async (cell: Cell) => {
    
    try{
      // Loading開始
      setStatus({...status, Loading:true})

      const api = new API()

      const celljson: string = convertCellToJson(cell)
      const res = await api.updateCell(celljson)
      const newCell = convertJsonToCell(res.data())
      dispatch(appActions.updateCell(newCell))
      
      setStatus({...status, Loading:false})

    }catch(err){
        setStatus({...status, Error:err, Loading: false})
        console.log("ERROR: ", err)
    }
  }, [status])

  return {"uploadCell": uploadCell, "status": status}
}

/////////////////////////////////////////////////
//////////              Util            ////////
////////////////////////////////////////////////

const convertCellToJson = ((cell: Cell)=>{
    let cellJson: any = {}
    cellJson["id"] = cell.ID
    cellJson["celltype"] = cell.CellType
    cellJson["executionCount"] = cell.ExecutionCount
    cellJson["metadata"] = cell.Metadata
    cellJson["source"] = cell.Source
    cellJson["outputs"] = cell.Outputs
  
    return JSON.stringify(cellJson)
})

const convertJsonToCell = ((celljson: any)=>{
    let cell: Cell = {
        ID: celljson["id"],
        CellType: celljson["celltype"],
        ExecutionCount: celljson["executionCount"],
        Metadata: celljson["metadata"],
        Source: celljson["source"],
        Outputs: celljson["outputs"],
    }
  
    return cell
})