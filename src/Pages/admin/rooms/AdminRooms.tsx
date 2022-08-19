import AdminTable from "../../../components/admin-users/AdminTable";
import "antd/dist/antd.css";
import RoomModal from "./RoomModal";

const AdminRooms = () => {
  // const columns: ColumnsType<IAdminUsers> = [
  const columns: any = [
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
    {
      title: <span className="font-bold capitalize">Action</span>,
      datakey: "AFAMS VAL",
      key: "name",
      render: (data: any) => {
        return (
          <RoomModal type="approve" data={data}>
            <i className="fas fa-pencil mr-2" />
            View More
          </RoomModal>
        );
      },
    },
  ];

  // const data: IAdminUsers[] = [];
  const data: any = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: "Main Top Hostel",
      amount: "10000",
      type: `London, Park Lane no. ${i}`,
      phone: `London, Park Lane no. ${i}`,
      agentName: `London, Park Lane no. ${i}`,
      email: "progfams@gmail.com",
      rentAmount: "250000",
      roomType: "1 Bedroom",
      noOfBathroom: 2,
      noOfToilet: 3,
      university: "Imo State University",
      state: "Imo State",
      location: "No 2 imsu extention gate",
      houseType: "Story Building",
      hasWater: "Yes",
      hasLight: "Yes",
      moreInfo:
        "I am sure you will love the appartment if you see it and it is highly secured",
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
