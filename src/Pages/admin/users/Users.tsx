import React from "react";
import { useQuery } from "react-query";
import type { ColumnsType } from "antd/es/table";
import AdminTable from "../../../components/admin-users/AdminTable";
import { DataType } from "../../../utils/types";

const Users = () => {
  // const userLogin = async () => {
  //   const data = await fetch("https://jsonplaceholder.typicode.com/users");
  //   return await data.json();
  // };

  // const { data, status } = useQuery("login", userLogin);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (status === "error") {
  //   return <div>Error...</div>;
  // }

  const columns: ColumnsType<DataType> = [
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
  ];

  const data: DataType[] = [];

  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      email: "progfams",
      phone: "09045673445",
      gender: "Male",
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
