import UsersService from 'services/UsersService'
import * as types from '../../redux/types'

export const isLoading = () => ({
  type: types.LOADING,
})

export const fetchUserSuccess = () => async dispatch => {
  try {
    dispatch({
      type: types.LOADING,
    })
    const {data} = await UsersService.fetch()
    dispatch({
      type: types.FETCH_USERS_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: types.FETCH_USERS_FAILURE,
    })
  }
}

