import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
} from '../constants/actions'

initialStore = {
  username: '',
  token: '',
  tokenAge: '',
  isLoginProcess: false
}

const auth = (state = initialStore,action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoginProcess: true
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginProcess: false
      })
    case LOGIN_FAIL:
      return Object.assign({}, state, {
        isLoginProcess: false
      })
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        username: '',
        token: '',
        tokenAge: '',
      })
    default:
      return state
  }
}

export default auth
