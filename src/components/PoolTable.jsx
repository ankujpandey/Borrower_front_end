import React from "react";

function PoolTable(props) {
  return (
    <div>
      <div className="py-5 bg-primary hero-header mb-3">
        <div className="container py-3 px-5">
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div data-wow-delay="0.1s">
                <h1 className="text-white animated zoomIn mt-5">Pool Table</h1>
              </div>
              <hr
                className="bg-white mx-auto mt-0 mb-5"
                style={{ width: 90 }}
              />
              <nav aria-label="breadcrumb"></nav>
            </div>
          </div>
        </div>
      </div>

      <div
        className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        {/* <h6 className="position-relative d-inline text-primary ps-4">
  Users List
</h6> */}
        <h2 className="mt-2">Pool Table List</h2>
      </div>

      <div className="container mt-5">
        <hr className="mb-0 mt-4" />
        <table className="table table-striped shadow-sm p-3 mb-4 rounded">
          <thead>
            <tr>
              <th scope="col">PoolTxn_id</th>
              <th scope="col">txn_type</th>
              <th scope="col">txn_flow</th>
              <th scope="col">CreditAmount</th>
              <th scope="col">DebitAmount</th>
              <th scope="col">available_balance</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default PoolTable;
