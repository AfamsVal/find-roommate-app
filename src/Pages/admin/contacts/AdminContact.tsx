import { ColumnsType } from "antd/lib/table";
import { useEffect, useState } from "react";
import AdminTable from "../../../components/admin-users/AdminTable";
import { fetchAllContactAction } from "../../../context/actions/contactAction";
import { useAppSelector } from "../../../context/GlobalState";
import { DataType, IFilterSize } from "../../../utils/types";
import ContactModal from "./ContactModal";

const AdminContact = () => {
  const { dispatch, contactUs, loading } = useAppSelector();
  const [filter, setFilter] = useState<IFilterSize>({
    start: 0,
    limit: 50,
  });

  const { result, moreData }: any = contactUs.contactList;

  const columns: ColumnsType<DataType> | any = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Subject",
      dataIndex: "subject",
    },
    {
      title: "Status",
      dataIndex: "treated",
      key: "treated",
      render: (data: any) => {
        return (
          <div>
            {data === "0" ? (
              <span className="text-warning">Pending</span>
            ) : (
              <span className="text-success">Treated</span>
            )}
          </div>
        );
      },
    },
    {
      title: <span className="font-bold capitalize">Action</span>,
      datakey: "AFAMS VAL",
      key: "name",
      render: (data: any) => {
        return (
          <ContactModal type="approve" data={data}>
            <i className="fas fa-pencil mr-2" />
            View{" "}
          </ContactModal>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(fetchAllContactAction(dispatch, filter));
  }, []);

  return (
    <>
      <div className="row px-3 mb-3">
        <h4 className="col-12 text-main my-3">Contact Us</h4>
      </div>

      <AdminTable
        columns={columns}
        data={result}
        placeholder="Search contact..."
        moreData={moreData}
        loading={loading}
      />
    </>
  );
};

export default AdminContact;
