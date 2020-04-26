export const componentReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_COMPONENTS':
            return { components: action.payload, errorMessage: '' };
        case 'GET_COMPONENTS_ERROR':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};
