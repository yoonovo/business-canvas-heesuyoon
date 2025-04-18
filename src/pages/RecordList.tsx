import React, { useState } from "react";
import { Button, Flex, Typography, Modal, Divider, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CommonTable from "../components/Table";
import { recordColumns } from "../constants/recordColumns";
import type { RecordType } from "../types/record";
import CommonModal from "../components/Modal";

const { Text } = Typography;

const RecordList: React.FC = () => {
  const recordList: RecordType[] = [
    {
      key: "1",
      name: "John Doe",
      address: "서울 강남구",
      memo: "외국인",
      registDate: "2024-10-02",
      job: "개발자",
      isAgreeEmail: true,
    },
    {
      key: "2",
      name: "Foo Bar",
      address: "서울 서초구",
      memo: "한국인",
      registDate: "2024-10-01",
      job: "PO",
      isAgreeEmail: false,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const addRecord = () => {
    // Modal.confirm({
    //   title: "회원 정보 추가",
    //   content: (
    //     <div>
    //       <p>some messages...some messages...</p>
    //       <p>some messages...some messages...</p>
    //     </div>
    //   ),
    //   onOk() {},
    // });
  };

  const editRecord = (v: RecordType) => {
    console.log("editRecord", v);
  };

  const deleteRecord = (v: RecordType) => {
    console.log("deleteRecord", v);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        style={{ height: 50, padding: "8px 14px" }}
      >
        <Text style={{ fontSize: "16px", fontWeight: 600 }}>회원 목록</Text>
        <Button type="primary" icon={<PlusOutlined />} onClick={addRecord}>
          추가
        </Button>
      </Flex>
      <CommonTable<RecordType>
        rowSelection={{ type: "checkbox" }}
        dataSource={recordList}
        columns={recordColumns}
        isButtons={true}
        onEdit={editRecord}
        onDelete={deleteRecord}
      />
      <CommonModal
        title="회원 추가"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default RecordList;
