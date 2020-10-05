import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types'

/* export const getLogs = () => {
    return async dispatch => {
        setLoading();

        const response = await fetch('http://localhost:5000/logs');
        const data =  await response.json;

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    }
} */

export const getLogs = () => async dispatch => {
    
    try {
        setLoading();
        const response = await fetch('http://localhost:5000/logs');
        const data =  await response.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
}

// Set loading true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}