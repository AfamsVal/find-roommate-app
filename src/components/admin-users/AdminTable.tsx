import { Table } from "antd";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface ITable {
  data?: any;
  columns: any;
  placeholder: string;
  moreData?: boolean;
  loading?: boolean;
}

const AdminTable: React.FC<ITable> = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const [search, setSearch] = useState<string>("");

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="row px-3">
      <div className="col-12" style={{ marginBottom: 16 }}>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
            // delay: 0.3,
          }}
          className="col-12 box-shadow-2 px-0"
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
          loading={props.loading}
        />
      </div>
    </div>
  );
};

export default AdminTable;
