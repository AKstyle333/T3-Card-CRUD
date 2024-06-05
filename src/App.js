import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import CardDetails from "./Components/CardDetails";
import DataContext from "./Components/Context";
const App = () => {
    const [view, setView] = useState({
        name: "",
        age: "",
        city: "",
        profession: "",
        phone: "",
        email: "",
        img: "",
    });
    const [data, setData] = useState([]);
    const [ID, setID] = useState(0);
    return (
        <>
            <Header />
            <DataContext.Provider.Provider value={{ view, setView, data, setData, ID, setID }}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/cardDetails" element={<CardDetails />}></Route>
                </Routes>
            </DataContext.Provider.Provider>
            <Footer />
        </>
    );
};

export default App;
