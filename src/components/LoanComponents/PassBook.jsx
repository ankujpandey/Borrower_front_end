import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contextAPI/UserContext";
import { ApiCall } from "../../functions/ApiCall";
import moment from "moment";

function PassBook({ uid, loanStatus }) {
  const [passbook, setPassbook] = useState();
  const { token } = useContext(UserContext);

  useEffect(() => {
    fetchData(uid);
  }, []);

  const fetchData = async (uid) => {
    const config = {
      method: "get",
      url: `http://localhost:4000/api/v1/getUserTransaction/${uid}`,
      headers: { "Content-Type": "application/json", authorization: token },
    };

    try {
      const response = await ApiCall(config);

      if (response.status === 201) {
        console.log(response?.data?.data);
        setPassbook(response?.data?.data);
      } else {
        alert("Something went Wrong");
      }
    } catch (error) {
      console.log("Something Went wrong");
    }
  };

  return (
    <div className="dashboard-card-border">
      <div className="row m-5">
        <div className="col-12">
          <h4>Passbook</h4>
          <hr className="mt-2 mb-1" />
          {loanStatus < "1500" ? (
            <p className="calculator-msg">
              You're Application is under process.
            </p>
          ) : null}
        </div>
        {loanStatus > "1400" ? (
          <div className="col-12 mt-3">
            <table className="table table-bordered">
              <thead className="wallet-user-div" style={{ color: "white" }}>
                <tr>
                  <th scope="col">TXN ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Transaction Type</th>
                  <th scope="col">Transaction flow</th>
                  <th scope="col">Transaction Amount</th>
                  <th scope="col">Remaining Balance</th>
                </tr>
              </thead>
              <tbody>
                {passbook?.map((row) => (
                  <tr key={row.txn_id}>
                    <th scope="row">{row.txn_id}</th>

                    <td>{moment(row.updatedAt).format("LLLL")}</td>
                    <td>{row.txn_type}</td>
                    <td>{row.txn_flow}</td>

                    {row.credit_Amount > 0 ? (
                      <td style={{ color: "green" }}>+{row.credit_Amount}</td>
                    ) : (
                      <td style={{ color: "red" }}>-{row.debit_Amount}</td>
                    )}
                    <td>{row.running_Amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
        {/* <div className="col-12">
					<div className="card p-2">
						<h6>Yore transaction Amount</h6>
						<p></p>
					</div>
				</div> */}
      </div>
    </div>
  );
}

export default PassBook;
