import { combineReducers, createStore } from "redux";
import infoReducer from "./infoReducer";
import seatReducer from "./seatReducer";

const rootReducer = combineReducers({
    info: infoReducer,
    seat: seatReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;