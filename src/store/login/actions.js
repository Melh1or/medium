import types from './types'

const loginStart = () => ({
  type: types.LOGIN_START
})

const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS
})

const loginError = (error) => ({
  type: types.LOGIN_ERROR,
  payload: {
    error
  }
})

export default {
  loginStart,
  loginSuccess,
  loginError,
}