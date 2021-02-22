import UsersService from 'services/UsersService'
import * as types from '../../redux/types'

export const isLoading = () => ({
  type: types.LOADING,
})

export const fetchUserSuccess = (server) => async (dispatch) => {
  try {
    dispatch({
      type: types.LOADING,
    })
    UsersService.setServer(server)
    const {data} = await UsersService.fetch(server)
    dispatch({
      type: types.FETCH_USERS_SUCCESS,
      payload: data
    })
  } catch (e) {
    console.log(e)
    dispatch({
      type: types.FETCH_USERS_FAILURE,
    })
  }
}

