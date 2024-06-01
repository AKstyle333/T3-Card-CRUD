import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import images from "../Assets/images/imageImports";
import DataContext from "./Context";

const Home = () => {
    const { view, setView, data, setData,  setID } = useContext(DataContext);

    // GET DATA API
    const getApi = () => {
        axios
            .get("http://localhost:3001/persons")
            .then((res) => {
                setData(res.data);
                // console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    // POST DATA API
    const submit_handler = async () => {
        await axios.post("http://localhost:3001/persons", view);
        view.name = "";
        view.age = "";
        view.city = "";
        view.profession = "";
        view.phone = "";
        view.email = "";
        
    };

    // DELETE DATA API
    const delete_handler = async (id) => {
        await axios.delete(`http://localhost:3001/persons/${id}`);
    };

    // PUT DATA API
    const view_handler = (val) => {
        setView(val);
    };
    const update_handler = () => {
        axios
            .put(`http://localhost:3001/persons/${view.id}`, view)
            .then((res) => {
                console.log(res);
                setView(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        view.name = "";
        view.age = "";
        view.profession = "";
        view.city = "";
        view.phone = "";
        view.email = "";
    };
    useEffect(() => {
        getApi();
    }, [data]);

    const input_handler = (e) => {
        setView({ ...view, [e.target.name]: e.target.value });
    };
    const emptyInput = () => {
        view.name = "";
        view.age = "";
        view.city = "";
        view.profession = "";
        view.phone = "";
        view.email = "";
    };

    // console.log(view);

    const idHandler = (id) => {
        setID(id);
    };

    return (
        <>
            <div className="container">
                <div className="pt-3">
                    <input name="name" value={view.name} className="w-25 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="Name" required />
                </div>
                <div>
                    <input name="age" value={view.age} className="w-25 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="Age" required />
                </div>
                <div>
                    <input name="city" value={view.city} className="w-25 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="City" required />
                </div>
                <div>
                    <input name="profession" value={view.profession} className="w-25 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="Profession" required />
                </div>
                <div>
                    <input name="phone" value={view.phone} className="w-25 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="Phone" required />
                </div>
                <div>
                    <input name="email" value={view.email} className="w-25 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="Email" required />
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={submit_handler} className="btn btn-success me-2">
                        ADD NEW CARD
                    </button>
                    <button className="btn btn-dark" onClick={emptyInput}>
                        RESET
                    </button>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-3">
                {data.map((cData,index) => {
                    return (
                        <div className="col" key={index}>
                            <Link onClick={() => idHandler(cData.id)} to="/carddetails" className="text-decoration-none">
                                <div className="card h-100">
                                    <img src={images[cData.img] || "https://via.placeholder.com/300x200?text=Image+Not+Found"} className="h-100px card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Name : {cData.name}</h5>
                                        <h5 className="">Age : {cData.age}</h5>
                                        <h5 className="">Profession : {cData.profession}</h5>
                                        <div className="mt-3">
                                            <button
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop"
                                                className="btn btn-warning me-2"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    view_handler(cData);
                                                }}
                                            >
                                                EDIT
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    delete_handler(cData.id);
                                                }}
                                            >
                                                DELETE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Edit Card Details
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={emptyInput}></button>
                        </div>
                        <div className="modal-body">
                            <div className="pt-3">
                                <input name="name" value={view.name} className="w-100 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="Name" required />
                            </div>
                            <div>
                                <input name="age" value={view.age} className="w-100 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="Age" required />
                            </div>
                            <div>
                                <input name="city" value={view.city} className="w-100 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="City" required />
                            </div>
                            <div>
                                <input name="profession" value={view.profession} className="w-100 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="Profession" required />
                            </div>
                            <div>
                                <input name="phone" value={view.phone} className="w-100 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="Phone" required />
                            </div>
                            <div>
                                <input name="email" value={view.email} className="w-100 my-2 p-2 mx-auto d-block" onChange={input_handler} placeholder="Email" required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={emptyInput}>
                                CANCEL
                            </button>
                            <button
                                data-bs-dismiss="modal"
                                className="btn btn-dark me-2"
                                onClick={() => {
                                    update_handler(view.id);
                                }}
                            >
                                UPDATE DATA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
