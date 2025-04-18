import React, { useState } from "react";
import { Button, Flex, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CommonTable from "../components/Table";
import { recordColumns } from "../constants/recordColumns";
import type { RecordType } from "../types/record";
import CommonModal from "../components/Modal";
import Form from "../components/Form";
import { formFields } from "../constants/recordFormFields";

const { Text } = Typography;

const RecordList: React.FC = () => {
  const initRecord = {
    name: "",
    address: "",
    memo: "",
    registDate: "",
    job: "개발자",
    isAgreeEmail: false,
  };
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [recordData, setRecordData] = useState<RecordType>(initRecord);

  const addRecord = () => {};

  const editRecord = (v: RecordType) => {
    console.log("editRecord", v);
    setRecordData(v);
    setIsModalOpen(true);
  };

  const deleteRecord = (v: RecordType) => {
    console.log("deleteRecord", v);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setRecordData(initRecord);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setRecordData(initRecord);
  };

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        style={{ height: 50, padding: "8px 14px" }}
      >
        <Text style={{ fontSize: "16px", fontWeight: 600 }}>회원 목록</Text>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalOpen(true)}
        >
          추가
        </Button>
      </Flex>
      {/* Record Table */}
      <CommonTable<RecordType>
        rowSelection={{ type: "checkbox" }}
        dataSource={recordList}
        columns={recordColumns}
        isButtons={true}
        onEdit={editRecord}
        onDelete={deleteRecord}
      />
      {/* Record Modal */}
      <CommonModal
        title="회원 추가"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        children={<Form<RecordType> fields={formFields} data={recordData} />}
      />
    </div>
  );
};

export default RecordList;
