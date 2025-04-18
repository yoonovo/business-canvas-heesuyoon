import React, { useState } from "react";
import dayjs from "dayjs";
import { Button, Flex, Typography, Modal, ModalProps } from "antd";
import { DeleteTwoTone, PlusOutlined } from "@ant-design/icons";
import CommonTable from "../components/Table";
import FormModal from "../components/FormModal";

import { recordColumns } from "../constants/recordColumns";
import { formFields } from "../constants/recordFormFields";
import type { RecordType } from "../types/record";

const { Text } = Typography;
const initRecord = {
  name: "",
  address: "",
  memo: "",
  registDate: dayjs(new Date()).format("YYYY-MM-DD"),
  job: "개발자",
  isAgreeEmail: false,
};

const RecordList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalOpts, setModalOpts] = useState<
    ModalProps & { onSubmit: (v: RecordType) => void }
  >();
  const [records, setRecords] = useState<RecordType[]>([
    {
      key: 1,
      name: "John Doe",
      address: "서울 강남구",
      memo: "외국인",
      registDate: "2024-10-02",
      job: "개발자",
      isAgreeEmail: true,
    },
    {
      key: 2,
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
    setRecordItem({ ...initRecord });
    setIsModalOpen(false);
  };

  // 회원 추가
  const addRecord = async () => {
    setModalOpts({
      title: "회원 추가",
      onSubmit: (v) => {
        setRecords((prev) => [
          ...prev,
          {
            ...v,
            key: records.length + 1,
            registDate: dayjs(v.registDate).format("YYYY-MM-DD"),
          },
        ]);
        handleReset();
      },
    });
    setIsModalOpen(true);
  };

  // 회원 수정
  const editRecord = (v: RecordType) => {
    setRecordItem(v);
    setModalOpts({
      title: "회원 수정",
      onSubmit: (v) => {
        setRecords((prev) => prev.map((val) => (val.key == v.key ? v : val)));
        handleReset();
      },
    });
    setIsModalOpen(true);
  };

  // 회원 삭제
  const deleteRecord = (v: RecordType) => {
    Modal.confirm({
      title: "회원 삭제",
      icon: <DeleteTwoTone />,
      content: `[${v.name}]님의 회원 정보를 삭제하시겠습니까?`,
      okText: "삭제",
      cancelText: "취소",
      onOk: () => setRecords((prev) => prev.filter(({ key }) => v.key !== key)),
    });
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
      <FormModal<RecordType>
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
