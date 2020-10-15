import {
    SET_FILTER_TEXT,
    SET_FILTER_TYPE
} from "../types"

const initialState = {
    filterText: "",
    filterType: "Sin Filtro",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_FILTER_TEXT:
            return {
                ...state,
                filterText: action.payload
            }
        case SET_FILTER_TYPE:
            return {
                ...state,
                filterType: action.payload
            }
        default:
            return state;
    }
}