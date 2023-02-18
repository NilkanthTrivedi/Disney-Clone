import React from "react";
import "./App.css";
// import "bootstrap5/src/css/bootstrap.min.css";

import Login from "./Components/Login";
import Home from "./Components/Home";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Detail from "./Components/Detail";

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <BrowserRouter>
                    <div className="my-5">
                        <Link to="/"></Link>
                        <Link to="/home"></Link>
                    </div>

                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/detail/:id/" element={<Detail />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
