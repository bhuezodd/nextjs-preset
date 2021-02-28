import * as types from '../../redux/types'

const initialState = {
  token: null,
  role: '',
  isLoading: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case types.SET_TOKEN:
      console.log(action, 'test')
      const {token, role} = action.payload
      return {
        ...state,
        token: token,
        role: role,
        isLoading: false
      }
    case types.LOGOUT:
      return {
        ...state,
        token: [],
        isLoading: false
      }
    default:
      return state
  }
}

