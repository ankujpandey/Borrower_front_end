import React from "react";
import HeroImage from "../components/HeroImage";

function Contact(props) {
  return (
    <div className="py-5 bg-primary hero-header mb-3">
      <div className="container py-3 px-5">
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div data-wow-delay="0.1s">
              <h1 className="text-white animated zoomIn">Contact-us</h1>
              <h1 className="text-white animated zoomIn"> Mr. Borrower</h1>
            </div>
            Lemon Tree Hotel, 5C & 5D, 5th Floor, Sector 60, Gurugram, Haryana
            12201
            <br />
            +0120 465 9902
            <br />
            support@faircent.com
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

export default Contact;
