import { combineReducers } from 'redux'
import appModule from './app'
import { App } from '../../types'

export interface ReduxState {
	App: App
}

const combineModules = combineReducers<ReduxState>({
	App: appModule,
})

export default combineModules
