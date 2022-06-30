import React, { useEffect, useState } from "react";

import { Api } from "../../Api";

import {useNavigate} from "react-router-dom"


import { Link } from "react-router-dom";
import {listBooks} from "../actions/bookActions";

import {useDispatch,useSelector} from "react-redux";
import {WrapperHome} from "./Home.style";
import {store} from "../../store";

export default () => {


    let x = 7;


    let [z, setZ] = useState(7);





    let history = useNavigate();


    const dispatch=useDispatch();

    const bookList=useSelector(state=>state.bookList);

    const {loading,error,books}=bookList;


    let handleClick = () => {

        history("/new");
    }

    let handleRowClick = (id) => {
        console.log("id ="+id);
        //console.log(books);
        history("/update/" + id);
    }

    useEffect(() => {


        dispatch(listBooks());


    }, [])


    return (<main>
        <WrapperHome className={"divHome"}>
            <h1>Library-Management  {books.length} books</h1>
            <button id="btn_create" onClick={handleClick}>Create New Book</button>
            <div id="lib">
                <table>
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        books
                            ? books.map(book =>
                                <tr onClick={() => {
                                    handleRowClick(book.id);
                                }}>
                                    <th><Link to={"/update/" + book.id}>{book.title}</Link></th>
                                    <td>{book.author}</td>
                                    <td>{book.genre}</td>
                                    <td>{book.year}</td>
                                </tr>)

                            : <p>Loading....</p>
                    }
                    </tbody>

                </table>

            </div>



        </WrapperHome>

    </main>)
}
