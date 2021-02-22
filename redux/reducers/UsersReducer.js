import * as types from '../../redux/types'

const initialState = {
  users: [],
  isLoading: false
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        users: [],
        isLoading: false
      }
    default:
      return state
  }
}
