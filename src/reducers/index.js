import { combineReducers } from 'redux'
import auth from './auth'

const reducers = combineReducers({
  auth: auth,
})

export default reducers
