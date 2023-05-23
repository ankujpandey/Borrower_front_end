import React from "react";

function Team(props) {
	return (
		<>
			<div
				className="py-5 bg-primary hero-header mb-3"
				style={{ height: "50vh" }}>
				<div className="container py-3 px-5">
					<div className="row mt-5">
						<div className="col-12 text-center">
							<div data-wow-delay="0.1s">
								<h1 className="text-white animated zoomIn">Our Team</h1>
							</div>
							<hr className="bg-white mx-auto mt-0" style={{ width: 90 }} />
							<nav aria-label="breadcrumb"></nav>
						</div>
					</div>
				</div>
			</div>
			<div className="container-xxl py-5">
				<div className="container px-lg-5">
					<div
						className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
						data-wow-delay="0.1s">
						<h6 className="position-relative d-inline text-primary ps-4">
							Our Team
						</h6>
						<h2 className="mt-2">Meet Our Team Members</h2>
					</div>
					<div className="row g-4">
						<div
							className="col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay="0.1s">
							<div className="team-item">
								<div className="d-flex">
									<div
										className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
										style={{ width: 75 }}>
										<a
											className="btn btn-square text-primary bg-white my-1"
											href="">
											<i className="fab fa-facebook-f" />
										</a>
										<a
											className="btn btn-square text-primary bg-white my-1"
											href="">
											<i className="fab fa-twitter" />
										</a>
										<a
											className="btn btn-square text-primary bg-white my-1"
											href="">
											<i className="fab fa-instagram" />
										</a>
										<a
											className="btn btn-square text-primary bg-white my-1"
											href="">
											<i className="fab fa-linkedin-in" />
										</a>
									</div>
									<img
										className="img-fluid rounded w-100"
										src="img/team-1.jpg"
										alt=""
									/>
								</div>
								<div className="px-4 py-3">
									<h5 className="fw-bold m-0">Ankuj Pandey</h5>
									<small>Designer</small>
								</div>
							</div>
						</div>
						<div
							className="col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay="0.3s">
							<div className="team-item">
								<div className="d-flex">
									<div
										className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
										style={{ width: 75 }}>
										<a
											className="btn btn-square text-primary bg-white my-1"
											href="">
											<i className="fab fa-facebook-f" />
										</a>
										<a
											className="btn btn-square text-primary bg-white my-1"
											href="">
											<i className="fab fa-twitter" />
										</a>
										<a
											className="btn btn-square text-primary bg-white my-1"
											href="">
											<i className="fab fa-instagram" />
										</a>
										<a
											className="btn btn-square text-primary bg-white my-1"
											href="">
											<i className="fab fa-linkedin-in" />
										</a>
									</div>
									<img
										className="img-fluid rounded w-100"
										src="img/arzooPic.jpg"
										alt=""
									/>
								</div>
								<div className="px-4 py-3">
									<h5 className="fw-bold m-0">Arzoo Jangra</h5>
									<small>Manager</small>
								</div>
							</div>
						</div>
						<div
							className="col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay="0.6s">
							<div className="team-item">
								<div className="d-flex">
									<div
										className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
										style={{ width: 75 }}>
										<a
											className="btn btn-square text-primary bg-white my-1"
											href="">
											<i className="fab fa-facebook-f" />
										</a>
										<a
											className="btn btn-square text-primary bg-white my-1"
											href="">
											<i className="fab fa-twitter" />
										</a>
										<a
											className="btn btn-square text-primary bg-white my-1"
											href="">
											<i className="fab fa-instagram" />
										</a>
										<a
											className="btn btn-square text-primary bg-white my-1"
											href="">
											<i className="fab fa-linkedin-in" />
										</a>
									</div>
									<img
										className="img-fluid rounded w-100"
										src="img/team-3.jpg"
										alt=""
									/>
								</div>
								<div className="px-4 py-3">
									<h5 className="fw-bold m-0">Mohd Azharuddin</h5>
									<small>Designer</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Team;
