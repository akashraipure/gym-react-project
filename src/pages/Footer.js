import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import instagram from './images/instagram.png';
import location from './images/location.png';
import call from './images/call.png';
import email from './images/email.png';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import linkedin from './images/linkedin.png';

const Footer = () => {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div class="container-fluid bg-dark text-secondary px-5 mt-5">
                <div class="row gx-5">
                    <div class="col-lg-8 col-md-6">
                        <div class="row gx-5">
                            <div class="col-lg-4 col-md-12 pt-5 mb-5">
                                <h4 class="text-uppercase text-light mb-4">Get In Touch</h4>
                                <div class="d-flex mb-2">
                                    <img src={location} alt="" width={"17px"} className="m-2" />
                                    <p class="mb-0  text-light" >123 Street, New York, USA</p>
                                </div>
                                <div class="d-flex mb-2">
                                    <img src={email} alt="" width={"17px"} className="m-2" />
                                    <p class="mb-0 text-light">info@example.com</p>
                                </div>
                                <div class="d-flex mb-2">
                                    <img src={call} alt="" width={"17px"} className="m-2" />
                                    <p class="mb-0 text-light">+012 345 67890</p>
                                </div>
                                <div class="d-flex mt-4   ">
                                    <a class="btn btn-danger btn-square rounded-circle me-2 icon" href="#">
                                        <img src={twitter} alt="" />
                                    </a>
                                    <a class="btn btn-danger btn-square rounded-circle me-2 icon" href="#">
                                        <img src={facebook} alt="" />
                                    </a>
                                    <a class="btn btn-danger btn-square rounded-circle me-2 icon" href="#">
                                        <img src={linkedin} alt="" />
                                    </a>
                                    <a class="btn btn-danger btn-square rounded-circle icon" href="#">
                                        <img src={instagram} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <h4 class="text-uppercase text-light mb-4">Quick Links</h4>
                                <div class="d-flex flex-column justify-content-start">
                                    <p class="text-light mb-2" href="#"><BsArrowRight className='me-1' style={{ color: "f23232" }} />Home</p>
                                    <p class="text-light mb-2" href="#"><BsArrowRight className='me-1' style={{ color: "f23232" }} />About Us</p>
                                    <p class="text-light mb-2" href="#"><BsArrowRight className='me-1' style={{ color: "f23232" }} />Class Schedule</p>
                                    <p class="text-light mb-2" href="#"><BsArrowRight className='me-1' style={{ color: "f23232" }} />Our Trainers</p>
                                    <p class="text-light mb-2" href="#"><BsArrowRight className='me-1' style={{ color: "f23232" }} />Latest Blog</p>
                                    <p class="text-light" href="#"><BsArrowRight className='me-1' style={{ color: "f23232" }} />Contact Us</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <h4 class="text-uppercase text-light mb-4">Popular Links</h4>
                                <div class="d-flex flex-column justify-content-start">
                                    <p class="text-light mb-2" href="#"><BsArrowRight className='me-1' style={{ color: "f23232" }} />Home</p>
                                    <p class="text-light mb-2" href="#"><BsArrowRight className='me-1' style={{ color: "f23232" }} />About Us</p>
                                    <p class="text-light mb-2" href="#"><BsArrowRight className='me-1' style={{ color: "f23232" }} />Class Schedule</p>
                                    <p class="text-light mb-2" href="#"><BsArrowRight className='me-1' style={{ color: "f23232" }} />Our Trainers</p>
                                    <p class="text-light mb-2" href="#"><BsArrowRight className='me-1' style={{ color: "f23232" }} />Latest Blog</p>
                                    <p class="text-light" href="#"><BsArrowRight className='me-1' style={{ color: "f23232" }} />Contact Us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-5">
                        <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-danger p-5">
                            <h4 class="text-uppercase text-white mb-4">Newsletter</h4>
                            <h6 class="text-uppercase text-white">Subscribe Our Newsletter</h6>
                            <p class="text-light">Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
                            <form action="">
                                <div class="input-group">
                                    <input type="text" class="form-control border-white p-3" placeholder="Your Email" />
                                    <button class="btn btn-dark">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid py-4 py-lg-0 px-5" style={{ background: "#111111" }}>
                <div class="row gx-5">
                    <div class="col-lg-8">
                        <div class="py-lg-4 text-center">
                            <p class="text-secondary mb-0">&copy; <a class="text-light fw-bold" href="#">Your Site Name</a>. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 ">
                        <div class="py-lg-4 text-center ">
                            <p class="text-light   mb-0">Designed by
                                <a class="text-light fw-bold" >HTML Codex</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </>
    )
}

export default Footer
