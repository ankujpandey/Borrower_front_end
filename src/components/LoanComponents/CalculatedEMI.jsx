import React from "react";
import Chart from "react-google-charts";
import { Icons } from "../../icons/Icons";

function CalculatedEMI(props) {
  console.log("calc data on Calculated EMI", props.calcData, props.flag);
  const data = [
    ["Task", "Hours per Day"],
    [
      "Principle Amount",
      props.calcData.total_Amount - props.calcData.total_Interest,
    ],
    ["Total Interest", props.calcData.total_Interest],
    // CSS-style declaration
  ];

  const options = {
    title: "Break-up of total payment",
    legend: { position: "bottom" },
    animation: {
      duration: 150000,
      easing: "inAndOut",
      startup: true,
    },
    pieHole: 0.4,
    is3D: false,
  };
  return (
    <div className="container-xxl mt-5">
      <div className="container px-lg-5">
        <div className="row justify-content-center">
          <div className="card shadow p-3 bg-body-tertiary rounded wow fadeInUp">
            <div className="row justify-content-center m-2">
              <div className="col-lg-5">
                <div className="emi-calculations mt-4">
                  <ul>
                    <li className="li-emi">
                      Loan EMI
                      <span>
                        {Icons.salary}
                        {props.calcData.EMI}
                      </span>
                    </li>
                    <hr />
                    <li className="li-emi">
                      Total Interest Payable
                      <span>
                        {Icons.salary}
                        {props.calcData.total_Interest}
                      </span>
                    </li>
                    <hr />
                    <li className="li-emi">
                      Total Payment <br />
                      (Principle + Interest)
                      <span>
                        {Icons.salary}
                        {props.calcData.total_Amount}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                {/* <span>Break-up of total payment</span> */}
                <Chart
                  chartType="PieChart"
                  width="100%"
                  height="400px"
                  data={data}
                  options={options}
                />
              </div>
              <hr className="mb-0 mt-4" />
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Installment No.</th>
                    <th scope="col">Installment Date</th>
                    <th scope="col">Opening Balance</th>
                    <th scope="col">EMI</th>
                    <th scope="col">Closing Balance</th>
                    <th scope="col">Interest</th>
                    <th scope="col">Principal</th>
                  </tr>
                </thead>
                <tbody>
                  {props.calcData?.table?.map((row) => (
                    <tr key={row.installmentNo}>
                      <th scope="row">{row.installmentNo}</th>
                      <td>{row.installmentDate}</td>
                      <td>
                        {Icons.smallRupee}
                        {row.openingBalence}
                      </td>
                      <td>
                        {Icons.smallRupee}
                        {props.calcData.EMI}
                      </td>
                      <td>
                        {Icons.smallRupee}
                        {row.closingBalence}
                      </td>
                      <td>
                        {Icons.smallRupee}
                        {row.interestPerMonth}
                      </td>
                      <td>
                        {Icons.smallRupee}
                        {row.principle}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="calculator-msg">
                Amortization schedule shows the loan amount borrowed along with
                a list of scheduled payments. The amortization table shows the
                amount of each periodic payment along with the amount that goes
                towards the principal deducted from the loan each time. The
                amortization chart also shows the new loan balance after each
                payment. The advantage of Amortization Calculator is that one
                can determine when the loan will be paid off, and the principal
                and interest component of each payment.
              </p>

              <div className="d-flex justify-content-center mt-2">
                <button
                  className="btn btn-primary rounded-pill px-4"
                  onClick={() => {
                    props.setFlag(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatedEMI;
