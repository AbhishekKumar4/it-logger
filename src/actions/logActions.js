import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS
} from './types'

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

// Get Logs
export const getLogs = () => async dispatch => {

    try {
        setLoading();
        const response = await fetch('http://localhost:5000/logs');
        const data = await response.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    }
}

//Add Log
export const addLog = (log) => async dispatch => {

    try {
        setLoading();
        const response = await fetch('http://localhost:5000/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    }
}
// Delete log
export const deleteLog = (id) => async dispatch => {

    try {
        setLoading();
        await fetch(`http://localhost:5000/logs/${id}`, {
            method: 'DELETE'
        });
        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    }
}

// Update Log
export const updateLog = log => async dispatch => {

    try {
        setLoading();
        const response = await fetch(`http://localhost:5000/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    }
}

// Search Logs
export const searchLogs = (text) => async dispatch => {

    try {
        setLoading();
        const response = await fetch(`http://localhost:5000/logs?q=${text}`);
        const data = await response.json();
        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    }
}

// Set current
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

// Clear current
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

// Set loading true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}