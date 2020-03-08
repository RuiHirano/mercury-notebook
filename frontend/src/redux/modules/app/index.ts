import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actionCreatorFactory from 'typescript-fsa';
import { App, Notebook, Cell } from '../../../types'

const actionCreator = actionCreatorFactory();


const initialNotebook: Notebook = {
	ID: "",
	Cells: [],
	Metadata: {
		Title: "Untitled",
        CreatedAt: 0,
        UpdatedAt: 0,
	}
}

export const initialState: App = {
	Notebook: initialNotebook,
}

export enum AppActions {
	UPDATE_NOTEBOOK = "UPDATE_NOTEBOOK",
	UPDATE_CELL = "UPDATE_CELL",
}

export const appActions = {
	updateNotebook: actionCreator<Notebook>(AppActions.UPDATE_NOTEBOOK),
	updateCell: actionCreator<Cell>(AppActions.UPDATE_CELL),
};

const appModule = reducerWithInitialState(initialState)
	.case(appActions.updateNotebook, (state: App, action: Notebook) => {
		const notebook = action
		return {
			...state,
			Notebook: notebook
		}
	})
	.case(appActions.updateCell, (state: App, action: Cell) => {
		const cell = action
		const newNotebook = {...state.Notebook}
		state.Notebook.Cells.forEach((_cell: Cell, index: number) => {
			if(_cell.ID === cell.ID){
				newNotebook.Cells[index] = cell
			}
		});
		return {
			...state,
			Notebook: newNotebook
		}
	})

export default appModule