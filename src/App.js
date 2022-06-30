
import React from "react";

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from "react-router-dom";
import Home from "./components/Home/index";
import NewBook from"./components/NewBook/index";
import UpdateBook from "./components/UpdBook/index"
function App() {

    return (
        <>
            <Router>

                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path="/new" element={<NewBook/>}/>
                        <Route path="/update/:bookId" element={<UpdateBook/>}/>

                    </Routes>

            </Router>

        </>
    );
}

export default App;
