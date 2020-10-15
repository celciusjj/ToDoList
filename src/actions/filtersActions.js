import {
    SET_FILTER_TEXT,
    SET_FILTER_TYPE
} from "../types"

export function filterByText(text) {
    return (dispatch) => {
        dispatch({
            type: SET_FILTER_TEXT,
            payload: text
        })
    }
}

export function filterByType(type) {
    return (dispatch) => {
        console.log(type)
        dispatch({
            type: SET_FILTER_TYPE,
            payload: type
        })
    }
}