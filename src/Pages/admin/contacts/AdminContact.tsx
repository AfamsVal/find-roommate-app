import { ColumnsType } from "antd/lib/table";
import React from "react";
import AdminTable from "../../../components/admin-users/AdminTable";
import { DataType } from "../../../utils/types";

const AdminContact = () => {
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
      title: "Subject",
      dataIndex: "subject",
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      email: "progfams@gmail.com",
      subject: `London, Park Lane no. ${i}`,
    });
  }
  return (
    <>
      <div className="row px-3 mb-3">
        <h4 className="col-12 text-main my-3">Contact Us</h4>
      </div>

      <AdminTable
        columns={columns}
        data={data}
        placeholder="Search contact..."
      />
    </>
  );
};

export default AdminContact;
