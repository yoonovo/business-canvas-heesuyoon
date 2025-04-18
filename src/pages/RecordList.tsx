import React, { useState } from "react";
import { Button, Flex, Typography, ModalProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CommonTable from "../components/Table";
import { recordColumns } from "../constants/recordColumns";
import type { RecordType } from "../types/record";
import FormModal from "../components/FormModal";
import { formFields, initRecord } from "../constants/recordFormFields";
import { CommonRecordType } from "../types/common";

const { Text } = Typography;

const RecordList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalOpts, setModalOpts] = useState<
    ModalProps & { onSubmit: (v: CommonRecordType) => void }
  >();
  const [records, setRecords] = useState<RecordType[]>([
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
  ]);
  const [recordItem, setRecordItem] = useState<RecordType>(initRecord);

  // Modal 닫기 & 데이터 초기화
  const handleReset = () => {
    console.log("reset");
    setRecordItem(initRecord);
    setIsModalOpen(false);
  };

  // 회원 추가
  const addRecord = () => {
    setModalOpts({
      title: "회원 추가",
      onSubmit: (v) => {
        console.log("add", v);
        handleReset();
      },
    });
    setIsModalOpen(true);
  };

  // 회원 수정
  const editRecord = (v: RecordType) => {
    console.log("editRecord", v);
    setRecordItem(v);
    setModalOpts({
      title: "회원 수정",
      onSubmit: () => {
        console.log("edit");
        handleReset();
      },
    });
    setIsModalOpen(true);
  };

  // 회원 삭제
  const deleteRecord = (v: RecordType) => {
    console.log("deleteRecord", v);
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
      {/* Record Table */}
      <CommonTable<RecordType>
        rowSelection={{ type: "checkbox" }}
        dataSource={records}
        columns={recordColumns}
        isButtons={true}
        onEdit={editRecord}
        onDelete={deleteRecord}
      />
      {/* Record Modal */}
      <FormModal
        open={isModalOpen}
        onCancel={handleReset}
        fields={formFields}
        fieldsData={recordItem}
        onSubmit={modalOpts?.onSubmit ?? (() => {})}
        {...modalOpts}
      />
    </div>
  );
};

export default RecordList;
