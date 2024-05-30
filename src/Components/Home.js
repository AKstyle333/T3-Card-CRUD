import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3001/persons")
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-3">
                {(data.map((cData) => {
                    return (
                        <div className="col">
                            <div className="card h-100">
                                {/* <img src={cData.img} className="card-img-top" alt="..." /> */}
                                <div className="card-body">
                                    <h5 className="card-title">{cData.name}</h5>
                                    <h5 className="">{cData.age}</h5>
                                    <h5 className="">{cData.city}</h5>
                                </div>
                            </div>
                        </div>
                    );
                }))}
            </div>
        </>
    );
};

export default Home;
