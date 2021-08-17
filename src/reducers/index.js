import { combineReducers } from 'redux'
import usersReducers from './userReducers'
import dataReducers from './DataReducers'

const RootReducer = combineReducers({ users: usersReducers, data: dataReducers })
export default RootReducer