import { AuthTypes } from 'redux/types';

const initialAuthState = {
    user: null,
    isLoggedIn: false
};

const AuthReducer = (state = initialAuthState, action) => {
    const { payload, type } = action;
    switch (type) {
        case AuthTypes.LOG_IN: {
            return {
                ...state,
                user: payload,
                isLoggedIn: true
            };
        }
        case AuthTypes.LOG_OUT: {
            return {
                ...state,
                user: null,
                isLoggedIn: false
            };
        }
        default: {
            return state;
        }
    }
};

export default AuthReducer;
