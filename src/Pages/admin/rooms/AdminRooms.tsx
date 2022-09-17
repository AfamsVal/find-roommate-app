import { useEffect, useState } from "react";
import AdminTable from "../../../components/admin-users/AdminTable";
import { fetchAllAdminRoomsAction } from "../../../context/actions/roomsAction";
import { useAppSelector } from "../../../context/GlobalState";
import { formatCurrency } from "../../../utils/formValidator";
import { IFilterSize } from "../../../utils/types";
import RoomModal from "./RoomModal";

const AdminRooms = () => {
  const { dispatch, contactUs, loading } = useAppSelector();
  const [filter, setFilter] = useState<IFilterSize>({
    start: 0,
    limit: 50,
  });
  const { result, moreData }: any = contactUs.contactList;

  // const columns: ColumnsType<IAdminUsers> = [
  const columns: any = [
    {
      title: "Name",
      dataIndex: "hostelName",
    },
    {
      title: "Amount (₦)",
      dataIndex: "rentPerYear",
      render: (amount: any) => {
        return <span>{formatCurrency(amount)}.00</span>;
      },
    },
    {
      title: "Type",
      dataIndex: "category",
    },
    {
      title: "Uploaded By",
      dataIndex: "uploadedBy",
    },
    {
      title: "Created",
      dataIndex: "createdAt",
      render: (createdAt: any) => {
        return <span>{new Date(createdAt).toLocaleDateString()}</span>;
      },
    },
    {
      title: "Blocked",
      dataKey: "key",
      key: "key",
      render: (data: any) => {
        return (
          <span className="ml-2 pl-1">
            {data.isBlocked === "1" ? "Yes" : "No"}
          </span>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "isVerified",
      render: (isVerified: any) => {
        return isVerified === "1" ? (
          <span className="text-success">Verified</span>
        ) : (
          <span className="text-danger">Pending</span>
        );
      },
    },
    {
      title: <span className="font-bold capitalize">Action</span>,
      datakey: "AFAMS VAL",
      key: "name",
      render: (data: any) => {
        return (
          <RoomModal type="approve" data={data}>
            <i className="fas fa-pencil mr-2" />
            View
          </RoomModal>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(fetchAllAdminRoomsAction(dispatch, filter));
  }, []);

  return (
    <>
      <div className="row px-3 mb-3">
        <h4 className="col-12 text-main my-3">All Rooms</h4>
      </div>

      <AdminTable
        columns={columns}
        data={result}
        placeholder="Search for room..."
        moreData={moreData}
        loading={loading}
      />
    </>
  );
};

export default AdminRooms;
