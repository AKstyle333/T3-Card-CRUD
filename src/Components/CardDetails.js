import { useContext, useEffect } from "react";
import DataContext from "./Context";
import images from "../Assets/images/imageImports";

import React from "react";
const CardDetails = (props) => {
    const { data, ID } = useContext(DataContext);
    const filterData = data.find((product) => product.id === ID);
    const { name, age, city, profession, phone, email,img } = filterData ? filterData : {};

    useEffect(() => {
        console.log(filterData);
        window.scrollTo(0, 0);
    }, [filterData]);
    return (
        <>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div >
                            <img src={images[img] || "https://via.placeholder.com/300x200?text=Image+Not+Found"} className="h-100px d-block mx-auto" alt="..." />

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <h3 className="card-header">Name : {name}</h3>
                            <h3 className="card-header">Age : {age}</h3>
                            <h3 className="card-header">City : {city}</h3>
                            <h3 className="card-header">Profession : {profession}</h3>
                            <h3 className="card-header">Phone : {phone}</h3>
                            <h3 className="card-header">Email : {email}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetails;
