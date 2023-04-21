import React from "react";

function EmiCalculator(props) {
	return (
		<div className="container-xxl py-5">
			<div className="container px-lg-5">
				<div className="row g-5">
					<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
						<div className="section-title position-relative mb-4 pb-2">
							<h6 className="position-relative text-primary ps-4">
								EMI Calculator
							</h6>
							<h2 className="mt-2">
								Calculate EMI based on your needed amount and tenure with rate
								of interest!
							</h2>
						</div>
						<p className="mb-4">
							Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
							sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
							et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
							tempor eirmod magna dolore erat amet
						</p>
						<div className="row g-3">
							<div className="col-sm-6">
								<h6 className="mb-3">
									<i className="fa fa-check text-primary me-2" />
									Award Winning
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
							src="img/about.jpg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmiCalculator;
