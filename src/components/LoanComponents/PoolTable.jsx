import React, { useEffect, useState } from "react";
import { ApiCall } from "../../functions/ApiCall";
import { Icons } from "../../icons/Icons";
import moment from "moment";
import ReactPaginate from "react-paginate";
import AddPoolMoney from "../../modals/AddPoolMoney";

function PoolTable(props) {
  const [poolTxn, setPoolTxn] = useState([]);
  const [Balance, setBalance] = useState();
  const [itemLen, setItemLen] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(itemLen?.length / 5);

  const config = {
    method: "get",
    url: `http://localhost:4000/api/v1/findAllPoolTransactions?page=${page}&limit=5`,
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    fetchData();
    fetchBalance();
    setLoading(false);
  }, [loading]);

  // ----------------------------------------------
  //  Fetch Data functionality
  // ----------------------------------------------
  const fetchData = async () => {
    let response = await ApiCall(config);

    if (response.status === 201) {
      setPoolTxn(response?.data?.data?.data);
      setItemLen(response?.data?.data?.length[0]);
      console.log(response?.data?.data?.length[0]);
    } else {
      alert("Something went wrong!!!");
    }
  };
  // console.log(poolTxn);

  // ----------------------------------------------
  //  Fetch Balance functionality
  // ----------------------------------------------

  const fetchBalance = async () => {
    const balanceConfig = {
      method: "get",
      url: "http://localhost:4000/api/v1/getPoolBalance",
      headers: { "Content-Type": "application/json" },
    };
    let response = await ApiCall(balanceConfig);

    if (response.status === 201) {
      // console.log("---------balance", response.data.data);
      setBalance(response?.data?.data[0]);
    } else {
      alert("Something went wrong!!!");
    }
  };

  // -----------------------------------------------
  //  page changing
  // -----------------------------------------------

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
    setLoading(true);
  };

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
        <h2 className="mt-2">Pool Table Transactions</h2>
      </div>

      <div className="row justify-content-center">
        <div className="card wallet-div col-5 shadow mb-3 bg-body-tertiary rounded">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4">{Icons.poolBalance}</div>
            <div className="col-md-4">
              <p className="mb-0">Pool Balance</p>
              <h1 className="mt-0">&#8377; {Balance?.balance}</h1>
            </div>
          </div>
        </div>
        <div className="col-10 mt-3 d-flex justify-content-center">
          <button
            className="btn btn-primary py-sm-3 px-sm-5 rounded-pill "
            data-bs-toggle="modal"
            data-bs-target="#addPoolMoney"
          >
            Add Money
          </button>
        </div>
      </div>

      <div className="container mt-3">
        <hr className="mb-0 mt-4" />
        <table className="table table-striped shadow-sm p-3 mb-4 rounded">
          <thead>
            <tr>
              <th scope="col">PoolTxn Id</th>
              <th scope="col">Txn Type</th>
              <th scope="col">Txn Flow</th>
              <th scope="col">Credit Amount</th>
              <th scope="col">Debit Amount</th>
              <th scope="col">Runnig Balance</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {poolTxn?.map((poolTxn) => (
              <tr key={poolTxn.pool_txn_id}>
                <td>{poolTxn.pool_txn_id}</td>
                <td>{poolTxn.txn_type}</td>
                <td>{poolTxn.txn_flow}</td>
                <td>{poolTxn.credit_Amount}</td>
                <td>{poolTxn.debit_Amount}</td>
                <td>{poolTxn.running_Amount}</td>
                <td>{moment(`${poolTxn.updatedAt}`).format("LLLL")} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* -------------------------------
				Pagination part
			----------------------------------- */}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        initialPage={0}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        disabledClassName={"disabled"}
      />
      <AddPoolMoney />
    </div>
  );
}

export default PoolTable;
