import React from "react";

function AgreementModel(props) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog"
        style={{
          maxWidth: "772px",
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Master Terms and Conditions of the Loan Agreement
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <p>
              These Master Terms and Conditions of the Loan Agreement ("
              <b>MTCLA</b>") shall govern the general terms and conditions
              applicable to the Loan (defined below) to be provided to
              <b>Borrower(s)</b> by the <b>Lender(s)</b> through{" "}
              <b>MrBorrower.com</b>
            </p>
            <p>
              MrBorrower India Private Limited (CIN: U67100HR2013PTCO48670) a
              company incorporated under Companies Act, 1956 and having its
              corporate office at 5C & 5D, 5th floor, Lemon Tree, Sector 60,
              Gurgaon – Haryana 122011, (hereinafter referred to as "
              <b>MrBorrower.com</b>" or the "<b>Confirming Party</b>"),
            </p>

            <div className="mb-4">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                // onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Rate Of Interest</label>
              <input
                type="text"
                className="form-control"
                name="roi"
                // onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Tenure</label>
              <input
                type="text"
                className="form-control"
                name="tenure"
                // onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Amount</label>
              <input
                type="text"
                className="form-control"
                name="amount"
                // onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">EMI</label>
              <input
                type="text"
                className="form-control"
                name="emi"
                // onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div
            className="modal-footer"
            style={{
              justifyContent: "space-between",
            }}
          >
            <button type="button" className="btn btn-primary">
              Accept
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgreementModel;
