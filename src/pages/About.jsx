import React from "react";

function About(props) {
	return (
		<>
			<div
				className="py-5 bg-primary hero-header mb-3"
				style={{ height: "50vh" }}>
				<div className="container py-3 px-5">
					<div className="row mt-5">
						<div className="col-12 text-center">
							<div data-wow-delay="0.1s">
								<h1 className="text-white animated zoomIn">About Us</h1>
							</div>
							<hr className="bg-white mx-auto mt-0" style={{ width: 90 }} />
							<nav aria-label="breadcrumb"></nav>
						</div>
					</div>
				</div>
			</div>
			<div className="container-xxl py-5">
				<div className="container px-lg-5">
					<div className="row g-5">
						<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
							<div className="section-title position-relative mb-4 pb-2">
								<h6 className="position-relative text-primary ps-4">
									About Us
								</h6>
								<h2 className="mt-2">Mr. Borrower </h2>
							</div>
							<p className="mb-4 d-flex justify-content-around">
								This website usually verifies a user's identity using his/her ID
								documents and live image capturing.
								<br />
								The user as to register on the website by prividing the ID
								proofs and these ID proofs are verified at the same time of
								registration using some node packages and libraries.
								<br />
								We used ReactJS for the front-end development of our website.
								Front-end was developed using botstrap and other similar tools
								for making the website user-friendly and good looking.
								<br />
								For back-end we used NodeJs. The back-end was completely
								designed using MVC architecture.
							</p>
							<div className="row g-3">
								<div className="col-sm-6">
									<h6 className="mb-3">
										<i className="fa fa-check text-primary me-2" />
										Trustable
									</h6>
									<h6 className="mb-0">
										<i className="fa fa-check text-primary me-2" />
										Professional Staff
									</h6>
								</div>
								<div className="col-sm-6">
									<h6 className="mb-3">
										<i className="fa fa-check text-primary me-2" />
										24/7 Support
									</h6>
									<h6 className="mb-0">
										<i className="fa fa-check text-primary me-2" />
										Fair Prices
									</h6>
								</div>
							</div>
							<div className="d-flex align-items-center mt-4">
								<a className="btn btn-primary rounded-pill px-4 me-3" href="">
									Read More
								</a>
								<a className="btn btn-outline-primary btn-square me-3" href="">
									<i className="fab fa-facebook-f" />
								</a>
								<a className="btn btn-outline-primary btn-square me-3" href="">
									<i className="fab fa-twitter" />
								</a>
								<a className="btn btn-outline-primary btn-square me-3" href="">
									<i className="fab fa-instagram" />
								</a>
								<a className="btn btn-outline-primary btn-square" href="">
									<i className="fab fa-linkedin-in" />
								</a>
							</div>
						</div>
						<div className="col-lg-6">
							<img
								className="img-fluid wow zoomIn"
								data-wow-delay="0.5s"
								src="img/My project(1).png"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
