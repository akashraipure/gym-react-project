import React from 'react';
import Footer from './Footer';
import team from './images/team.jpg';
import team2 from './images/team2.jpg';
import team3 from './images/team3.jpg';
const Trainers = () => {
  return (
    <>
      {/* <!-- Hero Start --> */}
      <div class="container-fluid bg-primary p-5 bg-hero mb-5">
        <div class="row py-5">
          <div class="col-12 text-center">
            <h1 class="display-2 text-uppercase text-white mb-md-4">Trainers</h1>
            <a href="" class="btn btn-danger py-md-3 px-md-5 me-3">Home</a>
            <a href="" class="btn btn-light py-md-3 px-md-5">Trainers</a>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}

      {/* <!-- Team Start --> */}
      <div class="container-fluid p-5">
        <div class="mb-5 text-center">
          <h5 class="text-danger text-uppercase">The Team</h5>
          <h1 class="display-3 text-uppercase mb-0">Expert Trainers</h1>
        </div>
        <div class="row g-5">
          <div class="col-lg-4 col-md-6">
            <div class="team-item position-relative">
              <div class="position-relative overflow-hidden rounded">
                {/* <img class="img-fluid w-100" src="img/team-1.jpg" alt=""/> */}
                <img className="w-100" src={team} alt="" />
                <div class="team-overlay">
                  <div class="d-flex align-items-center justify-content-start">
                    <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                      {/* <i class="fab fa-twitter"></i> */}
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                      {/* <i class="fab fa-facebook-f"></i> */}
                      <i class="fa fa-facebook mt-1" aria-hidden="true"></i>

                    </a>
                    <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                      {/* <i class="fab fa-linkedin-in"></i> */}
                      <i class="fa fa-linkedin" aria-hidden="true"></i>

                    </a>
                  </div>
                </div>
              </div>
              <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{ Background: "rgba(34, 36, 41, .9);" }}>
                <h5 class="text-uppercase text-light">John Deo</h5>
                <p class="text-uppercase text-secondary m-0">Trainer</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team-item position-relative">
              <div class="position-relative overflow-hidden rounded">
                {/* <img class="img-fluid w-100" src="img/team-2.jpg" alt=""/> */}
                <img class="img-fluid w-100" src={team2} alt="" />
                <div class="team-overlay">
                  <div class="d-flex align-items-center justify-content-start">
                    <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                      {/* <i class="fab fa-twitter"></i> */}
                    </a>
                    <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                      {/* <i class="fab fa-facebook-f"></i> */}
                      <i class="fa fa-facebook mt-1" aria-hidden="true"></i>

                    </a>
                    <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                      {/* <i class="fab fa-linkedin-in"></i> */}
                      <i class="fa fa-linkedin" aria-hidden="true"></i>

                    </a>
                  </div>
                </div>
              </div>
              <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{ Background: "rgba(34, 36, 41, .9);" }}>
                <h5 class="text-uppercase text-light">James Taylor</h5>
                <p class="text-uppercase text-secondary m-0">Trainer</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team-item position-relative">
              <div class="position-relative overflow-hidden rounded">
                {/* <img class="img-fluid w-100" src="img/team-3.jpg" alt="" /> */}
                <img class="img-fluid w-100" src={team3} alt="" />

                <div class="team-overlay">
                  <div class="d-flex align-items-center justify-content-start">
                    <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                      {/* <i class="fab fa-twitter"></i> */}
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                      {/* <i class="fab fa-facebook-f"></i> */}
                      <i class="fa fa-facebook mt-1" aria-hidden="true"></i>

                    </a>
                    <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                      {/* <i class="fab fa-linkedin-in"></i> */}
                      <i class="fa fa-linkedin" aria-hidden="true"></i>

                    </a>
                  </div>
                </div>
              </div>
              <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{ Background: "rgba(34, 36, 41, .9);" }}>
                <h5 class="text-uppercase text-light">Adam Phillips</h5>
                <p class="text-uppercase text-secondary m-0">Trainer</p>
              </div>
            </div>
          </div>

          {/* hello its a next  page */}
          <div class="row g-5">
            <div class="col-lg-4 col-md-6">
              <div class="team-item position-relative">
                <div class="position-relative overflow-hidden rounded">
                  {/* <img class="img-fluid w-100" src="img/team-1.jpg" alt=""/> */}
                  <img className="w-100" src={team} alt="" />
                  <div class="team-overlay">
                    <div class="d-flex align-items-center justify-content-start">
                      <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                        {/* <i class="fab fa-twitter"></i> */}
                        <i class="fa fa-twitter" aria-hidden="true"></i>

                      </a>
                      <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                        {/* <i class="fab fa-facebook-f"></i> */}
                        <i class="fa fa-facebook mt-1" aria-hidden="true"></i>

                      </a>
                      <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                        {/* <i class="fab fa-linkedin-in"></i> */}
                        <i class="fa fa-linkedin" aria-hidden="true"></i>

                      </a>
                    </div>
                  </div>
                </div>
                <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{ Background: "rgba(34, 36, 41, .9);" }}>
                  <h5 class="text-uppercase text-light">John Deo</h5>
                  <p class="text-uppercase text-secondary m-0">Trainer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="team-item position-relative">
                <div class="position-relative overflow-hidden rounded">
                  {/* <img class="img-fluid w-100" src="img/team-2.jpg" alt=""/> */}
                  <img class="img-fluid w-100" src={team2} alt="" />
                  <div class="team-overlay">
                    <div class="d-flex align-items-center justify-content-start">
                      <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>

                      </a>
                      <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                        <i class="fa fa-facebook mt-1" aria-hidden="true"></i>

                      </a>
                      <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fa fa-linkedin" aria-hidden="true"></i>

                      </a>
                    </div>
                  </div>
                </div>
                <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{ Background: "rgba(34, 36, 41, .9);" }}>
                  <h5 class="text-uppercase text-light">James Taylor</h5>
                  <p class="text-uppercase text-secondary m-0">Trainer</p>
                </div>
              </div>
            </div>


            {/* hello its a next  page */}
            <div class="col-lg-4 col-md-6">
              <div class="team-item position-relative">
                <div class="position-relative overflow-hidden rounded">
                  {/* <img class="img-fluid w-100" src="img/team-2.jpg" alt=""/> */}
                  <img class="img-fluid w-100" src={team3} alt="" />
                  <div class="team-overlay">
                    <div class="d-flex align-items-center justify-content-start">
                      <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                        {/* <i class="fab fa-twitter"></i> */}
                        <i class="fa fa-twitter" aria-hidden="true"></i>

                      </a>
                      <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                        {/* <i class="fab fa-facebook-f"></i> */}
                        <i class="fa fa-facebook mt-1" aria-hidden="true"></i>

                      </a>
                      <a class="btn btn-light btn-square rounded-circle mx-1" href="#">
                        {/* <i class="fab fa-linkedin-in"></i> */}
                        <i class="fa fa-linkedin" aria-hidden="true"></i>

                      </a>
                    </div>
                  </div>
                </div>
                <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{ Background: "rgba(34, 36, 41, .9);" }}>
                  <h5 class="text-uppercase text-light">James Taylor</h5>
                  <p class="text-uppercase text-secondary m-0">Trainer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">

            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
      <Footer />

    </>
  )
}

export default Trainers
