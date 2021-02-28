import {usersReducer} from './UsersReducer'
import {authReducer} from './AuthReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer
});

export default rootReducer

