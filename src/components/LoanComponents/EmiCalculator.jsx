import React, { useEffect, useState } from "react";

import moment from "moment";
import { ApiCall } from "../../functions/ApiCall";
import CalculatedEMI from "./CalculatedEMI";

function EmiCalculator(props) {
  const [calcData, setCalcData] = useState();
  const [flag, setFlag] = useState(false);

  const [principle, setPrinciple] = useState("1000");
  const [interest, setIntereset] = useState("5");
  const [tenure, setTenure] = useState("1");
  const [date, setDate] = useState(
    moment().utcOffset("+05:30").format("YYYY-MM-DD")
  );

  useEffect(() => {
    // setFlag(false);
  }, [flag]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log(
        "data of EMI calc------------>>>>>",
        principle,
        interest,
        tenure,
        date
      );
      const config = {
        method: "post",
        url: "http://localhost:4000/api/v1/calculateEMI",
        headers: { "Content-Type": "application/json" },
        data: { principle, interest, time: tenure, date },
      };

      let response = await ApiCall(config);

      if (response.status === 201) {
        setFlag(true);
        setCalcData(response?.data?.data);
        console.log(response.data.data);
      } else {
        alert("Something went wrong");
        setFlag(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container px-lg-5">
        <div className="row g-5">
          <div className="col-lg-6">
            <img
              className="img-fluid wow zoomIn"
              data-wow-delay="0.3s"
              src="img/about.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="section-title position-relative mb-4 pb-2">
              <h6 className="position-relative text-primary ps-4">
                EMI Calculator
              </h6>
              <h2 className="mt-2">
                Calculate EMI based on the amount you need, tenure and rate of
                interest of loan!
              </h2>
            </div>
            <div className="card shadow p-3 bg-body-tertiary rounded wow fadeInUp">
              <form
                action=""
                onSubmit={(e) => handleSubmit(e)}
                className="needs-validation"
                noValidate
              >
                <div className="row justify-content-center m-3 mb-1">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="loanAmmount"
                        name="loanAmmount"
                        value={principle}
                        size={6}
                        placeholder="Loan Ammount"
                        onChange={(e) => {
                          setPrinciple(e.target.value);
                        }}
                      />
                      <input
                        type="range"
                        className="form-range"
                        id="loanAmmount"
                        min="1000"
                        max="100000"
                        step="1000"
                        // defaultValue={1000}
                        value={principle}
                        onChange={(e) => {
                          setPrinciple(e.target.value);
                        }}
                      />
                      <label htmlFor="loanAmmount">Loan Amount</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="roi"
                        name="roi"
                        placeholder="Rate of Intrest"
                        min="12"
                        max="40"
                        value={interest}
                        onChange={(e) => {
                          setIntereset(e.target.value);
                        }}
                      />
                      <input
                        type="range"
                        className="form-range"
                        id="roi"
                        min="12"
                        max="40"
                        step="0.25"
                        value={interest}
                        onChange={(e) => {
                          setIntereset(e.target.value);
                        }}
                      />

                      <label htmlFor="roi">
                        Rate of Intrest<small>(%)</small>
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="loanTenure"
                        name="loanTenure"
                        min="3"
                        max="40"
                        placeholder="Loan Tenure"
                        value={tenure}
                        onChange={(e) => {
                          setTenure(e.target.value);
                        }}
                      />
                      <input
                        type="range"
                        className="form-range range-design"
                        id="loanTenure"
                        min="3"
                        max="40"
                        step="1.0"
                        value={tenure}
                        onChange={(e) => {
                          setTenure(e.target.value);
                        }}
                      />

                      <label htmlFor="loanTenure">
                        Loan Tenure<small>(in month)</small>
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        min={`${moment()
                          .utcOffset("+05:30")
                          .format("YYYY-MM-DD")}`}
                        placeholder="Date of Start"
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      />

                      <label htmlFor="date">Date of Start</label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <button
                      className="btn btn-primary rounded-pill px-4"
                      type="submit"
                    >
                      Calculate
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {console.log(flag)}
      {flag ? <CalculatedEMI calcData={calcData} setFlag={setFlag} /> : null}
    </div>
  );
}

export default EmiCalculator;
