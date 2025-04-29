import React, { useEffect, useState } from "react";
import { Modal, ModalProps } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

import { CommonTable, FormModal } from "@/components";
import { recordColumns } from "@/constants/recordColumns";
import { formFields } from "@/constants/recordFormFields";
import { initRecordItem } from "@/constants/initValues";
import type { RecordType } from "@/types/record";
import { useRecordStore } from "@/stores/useRecordStore";

const RecordList: React.FC = () => {
  const { list, addRow, editRow, deleteRow } = useRecordStore();
  const [recordItem, setRecordItem] = useState<RecordType>(initRecordItem);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalOpts, setModalOpts] = useState<
    ModalProps & { onSubmit: (v: RecordType) => void }
  >();

  // Modal 닫기 & 데이터 초기화
  const handleReset = () => {
    setRecordItem({ ...initRecordItem });
    setIsModalOpen(false);
  };

  // 회원 추가, 수정에 따라
  const handleModalOpts = (type: string, data: RecordType = initRecordItem) => {
    const isEdit = type === "edit";

    setRecordItem({ ...data });
    setModalOpts({
      title: isEdit ? "회원 수정" : "회원 추가",
      onSubmit: (v: RecordType) => {
        isEdit ? editRow(v) : addRow(v);
        handleReset();
      },
    });
    setIsModalOpen(true);
  };

  // 회원 추가
  const handleAddRecord = () => {
    handleModalOpts("add");
  };

  // 회원 수정
  const handleEditRecord = (v: RecordType) => {
    handleModalOpts("edit", v);
  };

  // 회원 삭제
  const handleDeleteRecord = ({ key, name }: RecordType) => {
    Modal.confirm({
      title: "회원 삭제",
      icon: <DeleteTwoTone />,
      content: `[${name}]님의 회원 정보를 삭제하시겠습니까?`,
      okText: "삭제",
      cancelText: "취소",
      onOk: () => key && deleteRow(key),
    });
  };

  useEffect(() => {
    // fetch("records")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, []);

  return (
    <div>
      {/* Table */}
      <CommonTable<RecordType>
        headerTitle="회원 목록"
        rowSelection={{ type: "checkbox" }}
        dataSource={list}
        columns={recordColumns}
        isButtons={true}
        onAdd={handleAddRecord}
        onEdit={handleEditRecord}
        onDelete={handleDeleteRecord}
      />
      {/* Modal */}
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
