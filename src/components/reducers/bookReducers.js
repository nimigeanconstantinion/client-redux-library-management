import {
    BOOK_ADD_FAIL,
    BOOK_ADD_REQUEST,
    BOOK_ADD_SUCCESS,
    BOOK_DEL_FAIL,
    BOOK_DEL_REQUEST,
    BOOK_DEL_SUCCESS,
    BOOK_GETBYID_FAIL,
    BOOK_GETBYID_REQUEST,
    BOOK_GETBYID_SUCCESS,
    BOOK_LIST_FAIL,
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    BOOK_UPD_FAIL,
    BOOK_UPD_REQUEST,
    BOOK_UPD_SUCCESS
} from "../constants/bookConstants";

export const bookListReducer=(state={books:[]},action)=>{
    switch (action.type){
        case BOOK_LIST_REQUEST:
            return {loading:true,books: []}
        case BOOK_LIST_SUCCESS:
            return{
                loading: false,
                books: action.payload
            }
        case BOOK_LIST_FAIL:
            return {
                loading: false,
                error:action.payload
            }
        default:
            return state;
    }



}


export const bookAddReducer=(state={book:{}},action)=>{

    switch (action.type){
        case BOOK_ADD_REQUEST:
            return {loading:true,book:{}}
        case BOOK_ADD_SUCCESS:
            return {loading: false,book:action.payload}
        case BOOK_ADD_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state;
    }

}

export const bookUPDReducer=(state={response:{}},action)=>{

    switch (action.type){
        case BOOK_UPD_REQUEST:
            return {loading:true,response:{}}
        case BOOK_UPD_SUCCESS:
            return {loading: false,response:action.payload}
        case BOOK_UPD_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state;
    }

}

export const bookDelReducer=(state={response:""},action)=>{

    switch (action.type){
        case BOOK_DEL_REQUEST:
            return {loading:true,response:""}
        case BOOK_DEL_SUCCESS:
            return {loading: false,response:action.payload}
        case BOOK_DEL_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state;
    }

}


export const bookGetByIdReducer=(state={selBook:{}},action)=>{

    switch (action.type){
        case BOOK_GETBYID_REQUEST:
            return {loading:true,selBook:{}}
        case BOOK_GETBYID_SUCCESS:
            return {loading: false,selBook:action.payload}
        case BOOK_GETBYID_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state;
    }

}