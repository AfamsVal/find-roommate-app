import { ColumnsType } from "antd/lib/table";
import React from "react";
import { useQuery } from "react-query";
import AdminTable from "../../../components/admin-users/AdminTable";
import { IAdminUsers } from "../../../utils/types";

const AdminRooms = () => {
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
  const columns: ColumnsType<IAdminUsers> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Agent Name",
      dataIndex: "agentName",
    },
  ];

  const data: IAdminUsers[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      amount: "10000",
      type: `London, Park Lane no. ${i}`,
      phone: `London, Park Lane no. ${i}`,
      agentName: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <>
      <div className="row px-3 mb-3">
        <h4 className="col-12 text-main my-3">All Rooms</h4>
      </div>

      <AdminTable
        columns={columns}
        data={data}
        placeholder="Search for room..."
      />
    </>
  );
};

export default AdminRooms;
