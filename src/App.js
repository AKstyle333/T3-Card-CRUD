import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import CardDetails from "./Components/CardDetails";
// import { Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/carddetails" element={<CardDetails/>}></Route>
            </Routes>
            <Footer />
        </>
    );
};

export default App;
