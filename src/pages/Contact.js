import React from 'react'
import Footer from './Footer'
const Contact = () => {
  return (
    <>
      {/* <!-- Hero Start --> */}
      <div class="container-fluid bg-primary p-5 bg-hero mb-5">
        <div class="row py-5">
          <div class="col-12 text-center">
            <h1 class="display-2 text-uppercase text-white mb-md-4">Contact</h1>
            <a href="" class="btn btn-danger py-md-3 px-md-5 me-3">Home</a>
            <a href="" class="btn btn-light py-md-3 px-md-5">Contact</a>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}

      {/* <!-- Contact Start --> */}
      <div class="container-fluid p-5">
        <div class="mb-5 text-center">
          <h5 class="text-danger text-uppercase">Contact Us</h5>
          <h1 class="display-3 text-uppercase mb-0">Get In Touch</h1>
        </div>
        <div class="row g-5 mb-5">
          <div class="col-lg-4">
            <div class="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
              <div class="bg-danger rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ Height: "55px", Height: " 60px" }}>
                <i class="fa fa-map-marker text-white m-3" aria-hidden="true"></i>
              </div>
              <h5 class="text-uppercase text-danger">Visit Us</h5>
              <p class="text-secondary mb-0">123 Street, New York, USA</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
              <div class="bg-danger rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ Height: "55px", Height: " 60px" }}>
                <i class="fa fa-envelope text-white m-3" aria-hidden="true"></i>
              </div>
              <h5 class="text-uppercase text-danger">Email Us</h5>
              <p class="text-secondary mb-0">info@example.com</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
              <div class="bg-danger rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ Height: "55px", Height: " 60px" }}>
                <i class="fa fa-phone fs-4 text-white m-3"></i>
              </div>
              <h5 class="text-uppercase text-danger">Call Us</h5>
              <p class="text-secondary mb-0">+012 345 6789</p>
            </div>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-lg-6">
            <div class="bg-dark p-5">
              <form>
                <div class="row g-3">
                  <div class="col-6">
                    <input type="text" class="form-control bg-light border-0 px-4" placeholder="Your Name" style={{ Height: "55px" }} />
                  </div>
                  <div class="col-6">
                    <input type="email" class="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ Height: "55px" }} />
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control bg-light border-0 px-4" placeholder="Subject" style={{ Height: "55px" }} />
                  </div>
                  <div class="col-12">
                    <textarea class="form-control bg-light border-0 px-4 py-3" rows="4" placeholder="Message"></textarea>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-danger w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6">

            {/* <iframe class="w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameborder="0" style={{ Height: "457px", Border: "0" }} allowfullscreen="" aria-hidden="false"
              tabindex="0"></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29734.656427097463!2d76.21801445!3d21.317651549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd832de63ee1613%3A0xe72164fedc061d8b!2sBurhanpur%2C%20Madhya%20Pradesh%20450331!5e0!3m2!1sen!2sin!4v1668798777391!5m2!1sen!2sin"
              width={630} height={400} frameborder="0" style={{ Border: "0" }} allowfullscreen="" aria-hidden="false" tabindex="0">
            </iframe>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}

      <Footer />
    </>
  )
}

export default Contact
