import { ColumnsType } from "antd/lib/table";
import React from "react";
import AdminTable from "../../../components/admin-users/AdminTable";
import { DataType } from "../../../utils/types";
import ContactModal from "./ContactModal";

const AdminContact = () => {
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
      title: "Details",
      dataIndex: "details",
    },
    {
      title: <span className="font-bold capitalize">Action</span>,
      datakey: "AFAMS VAL",
      key: "name",
      render: (data: any) => {
        return (
          <ContactModal type="approve" data={data}>
            <i className="fas fa-pencil mr-2" />
            View
          </ContactModal>
        );
      },
    },
  ];
  const data: DataType[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      email: "progfams@gmail.com",
      subject: `London, Park Lane no. ${i}`,
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum harum fuga eveniet quod.`,
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
