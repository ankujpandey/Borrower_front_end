import React from "react";

function Footer(props) {
	return (
		<div>
			{/* Footer Start */}
			<div
				className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn"
				data-wow-delay="0.1s">
				<div className="container py-5 px-lg-5">
					<div className="row g-5">
						<div className="col-md-6 col-lg-5">
							<h5 className="text-white mb-4">Get In Touch</h5>
							<p>
								<i className="fa fa-map-marker-alt me-3" />
								Lemon Tree Hotel, 5C & 5D, 5th Floor, Sector 60, Gurugram,
								Haryana 122011
							</p>
							<p>
								<i className="fa fa-phone-alt me-3" />
								+0120 465 9902
							</p>
							<p>
								<i className="fa fa-envelope me-3" />
								support@faircent.com
							</p>
							<div className="d-flex pt-2">
								<a
									className="btn btn-outline-light btn-social"
									href="https://twitter.com/Faircent1"
									target="_blank">
									<i className="fab fa-twitter" />
								</a>
								<a
									className="btn btn-outline-light btn-social"
									href="https://www.facebook.com/faircent"
									target="_blank">
									<i className="fab fa-facebook-f" />
								</a>
								<a
									className="btn btn-outline-light btn-social"
									href="https://www.youtube.com/faircentlive"
									target="_blank">
									<i className="fab fa-youtube" />
								</a>
								<a
									className="btn btn-outline-light btn-social"
									href="https://www.instagram.com/faircent.in/"
									target="_blank">
									<i className="fab fa-instagram" />
								</a>
								<a
									className="btn btn-outline-light btn-social"
									href="https://www.linkedin.com/company/faircent/mycompany/"
									target="_blank">
									<i className="fab fa-linkedin-in" />
								</a>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<h5 className="text-white mb-4">Popular Links</h5>
							<a className="btn btn-link" href="/about-us">
								About Us
							</a>
							<a className="btn btn-link" href="/contact">
								Contact Us
							</a>
							<a className="btn btn-link" href="/team">
								Our Team
							</a>
							<a className="btn btn-link" href="/disclaimer">
								Disclaimer
							</a>
						</div>

						<div className="col-md-6 col-lg-4">
							<h5 className="text-white mb-4">Newsletter</h5>
							<p>
								Currently we don't have a newsletter. We will update here when
								it happens.
							</p>
							<div className="position-relative w-100 mt-3">
								<input
									className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
									type="text"
									placeholder="Your Email"
									style={{ height: 48 }}
								/>
								<button
									type="button"
									className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2">
									<i className="fa fa-paper-plane text-primary fs-4" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="container px-lg-5">
					<div className="copyright">
						<div className="row">
							<div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
								&copy;{" "}
								<a className="border-bottom" href="#">
									Mr. Borrower
								</a>
								, All Right Reserved.
								{/*  This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
								Designed By{" "}
								<a className="border-bottom" href="https://htmlcodex.com">
									HTML Codex
								</a>
							</div>
							<div className="col-md-6 text-center text-md-end">
								<div className="footer-menu">
									<a href="/">Home</a>
									<a href="/contact">Help</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<a
				href="#"
				className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2">
				<i className="bi bi-arrow-up" />
			</a>
		</div>
	);
}

export default Footer;
