import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
} from './types'

// Get techs from server
export const getTechs = () => async dispatch => {

    try {
        setLoading();
        const response = await fetch('http://localhost:5000/techs');
        const data = await response.json();
        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    }
}

// set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}