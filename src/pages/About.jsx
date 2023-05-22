import React from "react";

function About(props) {
  return (
    <div className="py-5 bg-primary hero-header mb-3">
      <div className="container py-3 px-5">
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div data-wow-delay="0.1s">
              <h1 className="text-white animated zoomIn">About-us</h1>
              <h1 className="text-white animated zoomIn"> Mr. Borrower</h1>
            </div>
            This website usually verifies a user's identity using his/her ID
            documents and live image capturing.
            <br />
            The user as to register on the website by prividing the ID proofs
            and these ID proofs are verified at the same time of registration
            using some node packages and libraries.
            <br />
            We used ReactJS for the front-end development of our website.
            Front-end was developed using botstrap and other similar tools for
            making the website user-friendly and good looking.
            <br />
            For back-end we used NodeJs. The back-end was completely designed
            using MVC architecture.
            <nav aria-label="breadcrumb"></nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
