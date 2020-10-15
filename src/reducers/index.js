import {combineReducers} from "redux";
import filtersReducers from  "./filtersReducers";

export default combineReducers({
    filters: filtersReducers
})