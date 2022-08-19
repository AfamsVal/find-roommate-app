import { useEffect, useState, useMemo } from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";

const AdminApprovedLoansModal = ({ type, children, data, disabled }: any) => {
  console.log("data::", data);
  const declinedLoading = false;
  const approveLoading = false;
  const isAdminModalTask = false;

  const [visible, setModal] = useState(false);

  const [loan, setLoan] = useState({
    mgtFee: "",
    loanInterestRate: "",
    loanAmount: "",
    note: "",
  });

  useEffect(() => {
    const amount = Math.floor(data.loan_amount);
    setLoan({
      ...loan,
      loanAmount: String(amount),
    });
  }, [data]);

  const [reason, setReason] = useState("");

  const showModal = () => {
    setModal(true);
  };

  const handleCancel = () => {
    setModal(false);
    // dispatch.applications.setAdminModalTask(true)
  };

  useEffect(() => {
    // dispatch.applications.setAdminModalTask(isAdminModalTask)
    if (isAdminModalTask === false) {
      handleCancel();
      // setLoan({ mgtFee: '', loanInterestRate: '', note: '' })
      setReason("");
    }
  }, [isAdminModalTask]);

  const submitFormHandle = () => {
    if (type === "approve") {
      // const validator = approveLoanValidator(loan)
      // if (!validator.isValid) {
      //   notification.error({
      //     message: 'An error occured',
      //     description: validator.error
      //   })
      return false;
    }

    const info = {
      loanId: String(data.loan_id),
      loanInterestRate: loan.loanInterestRate,
      loanPrincipalAmount: String(loan.loanAmount),
      mgtFee: loan.mgtFee,
      loanDuration: data.duration_of_loan,
      note: loan.note,
    };

    // dispatch.applications.adminApproveApplication(info)
  };

  return (
    <>
      <button onClick={showModal} className="btn btn-outline-primary">
        {children}
      </button>
      <Modal visible={visible} onCancel={handleCancel} footer={false}>
        <div className="container">
          <div className="row mt-2">
            <div className="block w-full text-white">
              <h1 className="text-black text-2xl mt-2 font-bold text-center">
                Message Details
              </h1>
              <p className="mt-2 text-black text-lg text-center">
                Loan Message
              </p>

              <div className="mt-5">
                <span className="text-sm text-black text-left">mtg fee</span>
                <input
                  className="w-full border-gray-600 hover:border-gray-700 border text-gray-900 mt-2 py-2 px-4 rounded-lg"
                  type="number"
                  value={loan.mgtFee}
                  name="mgtFee"
                  onChange={({ target }) =>
                    setLoan({ ...loan, mgtFee: target.value })
                  }
                />
              </div>
              <div className="mt-5">
                <span className="text-sm text-black text-left">Loan Rate</span>
                <input
                  className="w-full border-gray-600 hover:border-gray-700 border text-gray-900 mt-2 py-2 px-4 rounded-lg"
                  type="number"
                  value={loan.loanInterestRate}
                  name="loanInterestRate"
                  onChange={({ target }) =>
                    setLoan({ ...loan, loanInterestRate: target.value })
                  }
                />
              </div>
              <div className="mt-5">
                <span className="text-sm text-black text-left">
                  Loan Amount
                </span>
                <input
                  className="w-full border-gray-600 hover:border-gray-700 border text-gray-900 mt-2 py-2 px-4 rounded-lg"
                  type="number"
                  value={loan.loanAmount}
                  name="loanAmount"
                  onChange={({ target }) =>
                    setLoan({ ...loan, loanAmount: target.value })
                  }
                />
              </div>
              <div className="mt-5">
                <span className="text-sm text-black text-left">
                  Drop Reason
                </span>
                <textarea
                  className="w-full border-gray-600 hover:border-gray-700 border text-gray-900 mt-2 py-2 px-4 rounded-lg"
                  value={loan.note}
                  name="note"
                  onChange={({ target }) =>
                    setLoan({ ...loan, note: target.value })
                  }
                />
              </div>

              <div className="mt-5">
                <button
                  onClick={submitFormHandle}
                  className={`py-3 font-bold ${
                    type === "approve" ? "bg-primary" : "bg-red-900"
                  } text-white rounded-md w-full focus:outline-none focus:shadow-outline`}
                >
                  {declinedLoading && (
                    <i className="fa fa-spin fa-spinner mr-2 font-bold text-lg" />
                  )}
                  {approveLoading && (
                    <i className="fa fa-spin fa-spinner mr-2 font-bold text-lg" />
                  )}
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

AdminApprovedLoansModal.propTypes = {
  children: PropTypes.array,
  type: PropTypes.string.isRequired,
  data: PropTypes.object,
  disabled: PropTypes.bool,
};

export default AdminApprovedLoansModal;
