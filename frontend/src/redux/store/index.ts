import { createStore, applyMiddleware } from 'redux'
import combineModules from '../modules'
import logger from 'redux-logger'

export default function configureStore() {
	
	const store = createStore(
		combineModules,
		applyMiddleware(logger)
	)

	return { store }
}

