import {applyMiddleware, combineReducers, createStore} from "redux";

import {
    bookListReducer,
    bookAddReducer,
    bookUPDReducer,
    bookGetByIdReducer, bookDelReducer
} from "./components/reducers/bookReducers";
import thunk from "redux-thunk";
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {composeWithDevTools} from "redux-devtools-extension";
import {getBookById} from "./components/actions/bookActions";

const reducer = combineReducers({

    bookList: bookListReducer,
    bookAdd:bookAddReducer,
    bookUpd:bookUPDReducer,
    bookSel: bookGetByIdReducer,
    bookDel: bookDelReducer

})


const middleware = [thunk];

const initialState = {};
const preloadedState={};
// export const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

 export const store = configureStore({
     reducer,
     preloadedState,
     middleware: [ ...middleware],
 })