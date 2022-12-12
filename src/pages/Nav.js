import React from 'react';
const Nav = () => {
    return (
        <>
            {/* <a href="/"> home </a>
            <a href="/About">About  </a>
            <a href="/classes"> classes </a> */}

            <div className="container-fluid bg-dark px-0">
                <div className="row gx-0">
                    <div className="col-lg-3 bg-dark d-none d-lg-block">
                        <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 className="m-0 display-4 text-danger text-uppercase">Gymster</h1>
                        </a>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gx-0 bg-secondary d-none d-lg-flex">
                            <div className="col-lg-7 px-5 text-start">
                                <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                    <i className="fa fa-envelope text-danger me-2"></i>
                                    <h6 className="mb-0">   info@example.com</h6>
                                </div>
                                <div className="h-100 d-inline-flex align-items-center py-2">
                                    <i class="fa fa-phone text-danger" aria-hidden="true"></i>
                                    <h6 className="mb-0">+012 345 6789</h6>
                                </div>
                            </div>
                            <div className="col-lg-5 px-5 text-end">
                                <div className="d-inline-flex align-items-center py-2">
                                    <a className="btn btn-light btn-square rounded-circle me-2" href="">
                                        <i class="fa fa-facebook mt-1" aria-hidden="true"></i>
                                    </a>
                                    <a className="btn btn-light btn-square rounded-circle me-2" href="">
                                        <i class="fa fa-twitter mt-1" aria-hidden="true"></i>
                                    </a>
                                    <a className="btn btn-light btn-square rounded-circle me-2" href="">
                                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                    <a className="btn btn-light btn-square rounded-circle me-2" href="">
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                    <a className="btn btn-light btn-square rounded-circle" href="">
                                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                            <a href="index.html" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 display-4 text-danger text-uppercase">Gymster</h1>
                                {/* style={{ backgroundImage:`url(${carousel})` }} */}
                            </a>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <a href="/" className="nav-item nav-link active">Home</a>
                                    <a href="about" className="nav-item nav-link">About</a>
                                    <a href="classes" className="nav-item nav-link">classes</a>
                                    <a href="Trainers" className="nav-item nav-link">Trainers</a>
                                    <div className="nav-item dropdown">
                                        <a href="page" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                            <a href="detail.html" className="dropdown-item">Blog Detail</a>
                                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        </div>
                                    </div>
                                    <a href="contact" className="nav-item nav-link">Contact</a>
                                </div>
                                <a href="" className="btn btn-danger py-md-3 px-md-5 d-none d-lg-block">Join Us</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Nav
