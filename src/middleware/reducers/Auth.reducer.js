import {Auth as authConstants}  from '../constants/Auth'

const auth = (state={}, action) => {
    switch (action.type) {
        case authConstants.LOGIN:
            return {...state, loggingIn: true}
        
        case authConstants.LOGIN_SUCCESS:
            return {...state, loggingIn: false, token: action.token}

        case authConstants.LOGIN_FAILED:
            return {...state, loggingIn: false, error: action.error}

        default:
            return state;
    }
}

export default auth;