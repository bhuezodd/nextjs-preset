import {usersReducer} from './UsersReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer

