export const signReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { token: action.payload, errorMessage: '' };
        case 'SIGN_OUT':
            return { token: null };
        case 'SIGN_ERROR':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};
