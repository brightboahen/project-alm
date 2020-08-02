import { AppTypes } from 'redux/types';

const initialAppState = {
    organisation: null
};

const AppReducer = (state = initialAppState, action) => {
    const { type, payload } = action;
    switch (type) {
        case AppTypes.SET_ORGANISATION: {
            return {
                ...state,
                organisation: payload
            };
        }
        default: {
            return state;
        }
    }
};

export default AppReducer;
