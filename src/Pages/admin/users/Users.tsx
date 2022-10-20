import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import AdminTable from "../../../components/admin-users/AdminTable";
import { fetchAllUserAction } from "../../../context/actions/AuthAction";
import { useAppSelector } from "../../../context/GlobalState";
import { DataType, IFilterSize } from "../../../utils/types";
import UserModal from "./UserModal";

const Users = () => {
  const { dispatch, contactUs, loading } = useAppSelector();
  const [filter, setFilter] = useState<IFilterSize>({
    start: 0,
    limit: 5000,
  });
  const { result, moreData }: any = contactUs.contactList;

  const columns: ColumnsType<DataType> | any = [
    {
      title: "Name",
      dataKey: "key",
      key: "key",
      render: (data: any) => {
        return (
          <span>
            <span style={{ marginRight: "10px" }}>
              <i className="fas fa-user mr-2" />
            </span>
            <span className="ml-2 pl-1">
              {data.lastName} {data.firstName}
            </span>
          </span>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "State",
      dataIndex: "state",
    },
    {
      title: "Admin",
      dataKey: "key",
      key: "key",
      render: (data: any) => {
        return (
          <span className="ml-2 pl-1">{data.admin === "1" ? "YES" : "NO"}</span>
        );
      },
    },
    {
      title: "Blocked",
      dataKey: "key",
      key: "key",
      render: (data: any) => {
        return (
          <span className="ml-2 pl-1">
            {data.isBlocked === "1" ? "YES" : "NO"}
          </span>
        );
      },
    },
    {
      title: <span className="font-bold capitalize">Action</span>,
      datakey: "key",
      key: "key",
      render: (data: any) => {
        return (
          <UserModal type="approve" data={data}>
            <i className="fas fa-pencil mr-2" />
            View
          </UserModal>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(fetchAllUserAction(dispatch, filter));
  }, []);

  return (
    <>
      <div className="row px-3 mb-3">
        <h4 className="col-12 text-main my-3">All Users</h4>
      </div>

      <AdminTable
        columns={columns}
        data={result}
        placeholder="Search for a user..."
        moreData={moreData}
        loading={loading}
      />
    </>
  );
};

export default Users;
