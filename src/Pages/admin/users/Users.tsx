import type { ColumnsType } from "antd/es/table";
import AdminTable from "../../../components/admin-users/AdminTable";
import { DataType } from "../../../utils/types";
import UserModal from "./UserModal";

const Users = () => {
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
      title: <span className="font-bold capitalize">Action</span>,
      datakey: "AFAMS VAL",
      key: "name",
      render: (data: any) => {
        return (
          <UserModal type="approve" data={data}>
            <i className="fas fa-pencil mr-2" />
            View More
          </UserModal>
        );
      },
    },
  ];

  const data: DataType[] = [];

  for (let i = 0; i < 26; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      email: "progfams@gmail.com",
      phone: "09045673445",
      gender: "Male",
      state: "Imo State",
    });
  }

  return (
    <>
      <div className="row px-3 mb-3">
        <h4 className="col-12 text-main my-3">All Users</h4>
      </div>

      <AdminTable
        columns={columns}
        data={data}
        placeholder="Search for a user..."
      />
    </>
  );
};

export default Users;
