import todoApi from "../api/todoApi";

export const getComponents = () => {
    return async (dispatch) => {
        try {
            const response = await todoApi.get('/components');
            dispatch({ type: 'GET_COMPONENTS', payload: response.data.data });
        } catch (err) {
            console.log('ERROR', err.response.data);
            dispatch({ type: 'GET_COMPONENTS_ERROR', payload: err.response.data.message || 'Server error!' });
        }
    }
};
