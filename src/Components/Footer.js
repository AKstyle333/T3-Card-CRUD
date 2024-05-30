import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <section className="">
                <footer className="bg-body-tertiary text-center text-md-start">
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Footer Content</h5>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                                    voluptatem veniam, est atque cumque eum delectus sint!
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link to="#!" className="text-body">
                                            Link 1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#!" className="text-body">
                                            Link 2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#!" className="text-body">
                                            Link 3
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#!" className="text-body">
                                            Link 4
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-0">Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="#!" className="text-body">
                                            Link 1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#!" className="text-body">
                                            Link 2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#!" className="text-body">
                                            Link 3
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#!" className="text-body">
                                            Link 4
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center p-3" style={{ "backgroundColor": "rgba(0, 0, 0, 0.05)" }}>
                        © 2024 Copyright :
                        <Link className="text-body" to="#">
                            {" "}
                            Code By AK
                        </Link>
                    </div>
                </footer>
            </section>
        </>
    );
};

export default Footer;
