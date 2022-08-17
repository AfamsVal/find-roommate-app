import { Table } from "antd";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface ITable {
  data?: any;
  columns: any;
  placeholder: string;
}

const AdminTable: React.FC<ITable> = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState<string>("");

  //   const start = () => {
  //     setLoading(true);
  //     // ajax request after empty completing
  //     setTimeout(() => {
  //       setSelectedRowKeys([]);
  //       setLoading(false);
  //     }, 1000);
  //   };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  //   const hasSelected = selectedRowKeys.length > 0;
  // const columns: ColumnsType<DataType> = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //   },
  //   {
  //     title: "Age",
  //     dataIndex: "age",
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //   },
  // ];

  // const data: DataType[] = [];
  // for (let i = 0; i < 46; i++) {
  //   data.push({
  //     key: i,
  //     name: `Edward King ${i}`,
  //     age: 32,
  //     address: `London, Park Lane no. ${i}`,
  //   });
  // }

  return (
    <div className="row px-3">
      <div className="col-12" style={{ marginBottom: 16 }}>
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
            // delay: 0.3,
          }}
          className="col-12 col-md-9 box-shadow-2 px-0"
        >
          <input
            type="text"
            className="form-control py-2 outline-none listing"
            placeholder={props.placeholder}
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
        </motion.div>
      </div>
      <div className="col-12" style={{ marginBottom: 16 }}>
        <Table
          rowSelection={rowSelection}
          columns={props.columns}
          dataSource={props.data}
        />
      </div>
    </div>
  );
};

export default AdminTable;
