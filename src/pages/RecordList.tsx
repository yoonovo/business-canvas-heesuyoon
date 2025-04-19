import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { Button, Flex, Typography, Modal, ModalProps } from "antd";
import { DeleteTwoTone, PlusOutlined } from "@ant-design/icons";

import { CommonTable, FormModal } from "@/components";
import { recordColumns } from "@/constants/recordColumns";
import { formFields } from "@/constants/recordFormFields";
import { initRecordItem, initRecords } from "@/constants/initValues";
import type { RecordType } from "@/types/record";
import { storage } from "@/storage";

const RecordList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalOpts, setModalOpts] = useState<
    ModalProps & { onSubmit: (v: RecordType) => void }
  >();
  const [records, setRecords] = useState<RecordType[]>(
    () => storage.get("records") ?? initRecords
  );
  const [recordItem, setRecordItem] = useState<RecordType>(initRecordItem);

  // Modal 닫기 & 데이터 초기화
  const handleReset = () => {
    setRecordItem({ ...initRecordItem });
    setIsModalOpen(false);
  };

  // 회원 추가, 수정에 따라
  const handleModalOpts = (type: "add" | "edit", data?: RecordType) => {
    const isEdit = type === "edit";
    setRecordItem({ ...(data ?? initRecordItem) });

    setModalOpts({
      title: isEdit ? "회원 수정" : "회원 추가",
      onSubmit: (v) => {
        setRecords((prev) =>
          isEdit
            ? prev.map((val) =>
                val.key === v.key
                  ? {
                      ...v,
                      registDate: dayjs(v.registDate).format("YYYY-MM-DD"),
                    }
                  : val
              )
            : [
                ...prev,
                {
                  ...v,
                  key: uuidv4(),
                  registDate: dayjs(v.registDate).format("YYYY-MM-DD"),
                },
              ]
        );
        handleReset();
      },
    });
    setIsModalOpen(true);
  };

  // 회원 추가
  const addRecord = () => {
    handleModalOpts("add");
  };

  // 회원 수정
  const editRecord = (v: RecordType) => {
    handleModalOpts("edit", v);
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

  useEffect(() => {
    storage.set("records", records);
  }, [records]);

  return (
    <div>
      {/* Record Table */}
      <CommonTable<RecordType>
        headerTitle="회원 목록"
        rowSelection={{ type: "checkbox" }}
        dataSource={records}
        columns={recordColumns}
        isButtons={true}
        onAdd={addRecord}
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
