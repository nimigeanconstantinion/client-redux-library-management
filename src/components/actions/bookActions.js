import {
    BOOK_ADD_FAIL,
    BOOK_ADD_REQUEST,
    BOOK_ADD_SUCCESS, BOOK_DEL_FAIL,
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
import {Api} from "../../Api";

export const listBooks=()=>async(dispatch)=>{
    let api=new Api();
    try{
        dispatch({type:BOOK_LIST_REQUEST});
        const books=await api.getBooks();
        console.log(books);
        dispatch({
            type:BOOK_LIST_SUCCESS,
            payload: books

        })

    }catch (error){
        dispatch({
            type:BOOK_LIST_FAIL,
            payload:error.response&&error.response.data.message
            ?error.response.data.message
                :error.message
        })
    }




}

export const addNewBook=(book)=>async (dispatch,state)=>{
    let api=new Api();
    try{
        dispatch({type:BOOK_ADD_REQUEST});
        const newBook=await api.addBook(book);
        dispatch({
            type:BOOK_ADD_SUCCESS,
            payload:200
        })

    }catch (e) {
        dispatch({
            type:BOOK_ADD_FAIL,
            payload:e.response&&e.response.data.message
            ?e.response.data.message
                :e.message
        })

        // dispatch({
        //     type:BOOK_LIST_SUCCESS,
        //     payload : books
        //
        // })

    }
}

export const updBook=(book)=>async (dispatch)=>{
    let api=new Api();
    try{
        dispatch({type:BOOK_UPD_REQUEST});
        const response=await api.updBook(book);
        dispatch({
            type:BOOK_UPD_SUCCESS,
            payload:response
        })

    }catch (e) {
        dispatch({
            type:BOOK_UPD_FAIL,
            payload:e.response&&e.response.data.message
                ?e.response.data.message
                :e.message
        })
    }
}

export const delBook=(idBook)=>async (dispatch)=>{
    let api=new Api();
    try{
        dispatch({type:BOOK_DEL_REQUEST});
        const response=await api.delBook(idBook);
        dispatch({
            type:BOOK_DEL_SUCCESS,
            payload:response.status
        })

    }catch (e) {
        dispatch({
            type:BOOK_DEL_FAIL,
            payload:e.response&&e.response.data.message
                ?e.response.data.message
                :e.message
        })
    }
}


export const getBookById=(idBook)=>async (dispatch,getState)=>{
    let api=new Api();


    try{
        dispatch({type:BOOK_GETBYID_REQUEST});
        const response=await api.getBookById(idBook);
        dispatch({
            type:BOOK_GETBYID_SUCCESS,
            payload:response
        })

        console.log(getState());

    }catch (e) {
        dispatch({
            type:BOOK_GETBYID_FAIL,
            payload:e.response&&e.response.data.message
                ?e.response.data.message
                :e.message
        })
    }
}

