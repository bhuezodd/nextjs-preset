import AuthService from 'services/AuthService'
import * as types from '../../redux/types'

export const isLoading = () => ({
  type: types.LOADING,
})

export const login = (options) => async (dispatch) => {
  try {
    dispatch({
      type: types.LOADING,
    })
    const data = await AuthService.login(options)
    dispatch({
      type: types.SET_TOKEN,
      payload: data
    })
  } catch (e) {
    console.log(e)
  }
}

export const register = (options) => async (dispatch) => {
  try {
    dispatch({
      type: types.LOADING,
    })
    const {data} = await AuthService.register(options)
    return data
  } catch (e) {
    dispatch({
      type: types.FETCH_USERS_FAILURE,
    })
  }
}
