import AuthTypes from 'redux/types/AuthTypes';

export const setUser = (payload) => async (dispatch) => {
    await dispatch({ type: AuthTypes.LOG_IN, payload });
};
