import {useNavigate, useParams} from "react-router-dom";
import {createElement, useEffect, useRef, useState} from "react";
import {delBook, getBookById, updBook} from "../actions/bookActions";
import {useDispatch,useSelector} from "react-redux";
import {Api} from "../../Api";

import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import {WrapperUpdBook} from "./UpdBook.style";
export default ()=>{

    let param=useParams();
    const history=useNavigate();
    const refB = useRef("");
    let bool = false;
    const [errors, setErrors] = useState([]);

    const [show, setShow] = useState(false);

    const [mes, setMes] = useState("");
    const refP = useRef("");
    const refA= useRef("");
    const refTitle=useRef("");
    const refAuth=useRef("");
    const refGenre=useRef("");
    const refYear=useRef("");

    const dispatch=useDispatch();
    //  const bookSel=useState()
    // let bookk=bookSel;
    //
    //
    // const {loading,error,selBook}=bookSel;

    const [selBook,setSelbook]=useState({});


     useEffect(()=> {


         getBookById();

     },[]);



     let getBookById=async ()=>{
         let api=new Api();
         try{
             let response=await api.getBookById(param.bookId);
             setSelbook(response);


         }catch (e) {

         }
     }


    let handleChange = (e) => {
        const node = refB.current;
        node.style.color = "red";
        let obj = e.target;

        if (obj.id === "title") {

            selBook.title=obj.value;

        }

        if (obj.id === "auth") {

            selBook.author=obj.value;
        }

        if (obj.id === "gen") {

            selBook.genre=obj.value;
        }

        if (obj.id === "year") {

            selBook.year=obj.value;
        }



    }



    function AlertDismissibleExample() {
        if (show) {
            return (
                <Alert variant="danger" ref={refA} onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p id="pid" ref={refP}>
                        {mes}
                    </p>
                </Alert>
            );
        }
        //     return <Button onClick={() => setShow(true)}>Show Alert</Button>;
        return "";
    }


    let valid = () => {
        setErrors([]);
        console.log(refTitle.current.value);
        if(refTitle.current.value===""){
           console.log("eroare titlu");
           setErrors(["eroare"]);
        }
        // if (refAuth.value ==="") {
        //
        //      setErrors(prev =>(
        //
        //         [
        //             ...prev,
        //             "Author is required"
        //         ])
        //     )
        //   //  errors.push("Auth is required");
        // }
        //
        // if (selBook.genre == "") {
        //
        //     setErrors(prev =>(
        //
        //         [
        //             ...prev,
        //             "Genre is required"
        //         ])
        //     )
        // }
        //
        //
        // const regex = /\d/;
        // console.log("test " + regex.test(selBook.year));
        // if (regex.test(selBook.year)==false) {
        //     setErrors(prev => (
        //         [
        //             ...prev,
        //             "Year must be number"
        //         ]
        //     ))
        // }


    }


    let handleCancelClick = (e) => {
         e.preventDefault();
         history("/");
    }





    let handleUpdClick =  (e) => {

        e.preventDefault();





        valid();

        console.log("numar de erori este ="+errors.length);
        console.log(errors);
        if (errors.length > 0) {
            let ar = [];
            errors.forEach(e => {
                ar.push( createElement('p', {}, e));
            })
            const container = createElement('div', {}, ar);
            setMes(container);
            setShow(true);

            let elm = refA.current;
            setTimeout(()=>{
                elm.style.opacity=0;
            }, 1000);
            setTimeout(() => {
                setShow(false);

                elm.style.opacity=1;
            }, 3200);

        } else {

            try {
                selBook.title=refTitle.current.value;
                selBook.author=refAuth.current.value;
                selBook.genre=refGenre.current.value;
                selBook.year=refYear.current.value;
                dispatch(updBook(selBook));

                history("/");

            } catch(e) {


                alert("Eroare");
            }
        }

    }

    let handleErrClick=(e)=>{
         e.preventDefault();
         console.log("sunt in erori");
         valid();
         console.log(errors);
    }

    let handleDelClick=async ()=>{
       let idB=param.bookId;
       dispatch(delBook(idB));
       history("/");

    }

    return (
        <WrapperUpdBook className={"divUpd"}>
            <div id="alert" ref={refA}>
                <AlertDismissibleExample />
            </div>

            <form  id="frmupdbook" onChange={handleChange}>
                <h1>Update Book</h1>

                <div className="divupdb">
                    <label ref={refB}>Title</label>
                    <input ref={refTitle} type="text" name="title" id="title" defaultValue={selBook.title}/>

                </div>
                <div className="divupdb">
                    <label>Author</label>
                    <input ref={refAuth} type="text" name="auth" id="auth" defaultValue={selBook.author}/>

                </div>
                <div className="divupdb">
                    <label>Genre</label>
                    <input ref={refGenre} type="text" name="gen" id="gen" defaultValue={selBook.genre}/>

                </div>

                <div className="divupdb">
                    <label>Year</label>
                    <input ref={refYear} type="text" name="year" id="year" defaultValue={selBook.year}/>

                </div>
                {/*<Button variant="outline-primary" onClick={handleUpdClick} className="butoane">Update Book</Button>*/}
                <Button variant="outline-primary"  onClick={handleDelClick} className="butoane">Delete Book</Button>
                <Button variant="outline-primary"  onClick={handleCancelClick} className="butoane">Cancel</Button>
                <Button variant="outline-primary"  onClick={handleErrClick} className="butoane">Arata Erori</Button>

            </form>
        </WrapperUpdBook>
    )
}