import types from './types'

const registerStart = () => ({
  type: types.REGISTER_START
})

const registerSuccess = () => ({
  type: types.REGISTER_SUCCESS
})

const registerError = (error) => ({
  type: types.REGISTER_ERROR,
  payload: {
    error
  }
})

export default {
  registerStart,
  registerSuccess,
  registerError,
}