import { Form as AntdForm, Button, Modal } from "antd";
import { ModalProps } from "antd";
import { FormFieldsType } from "../../types/form";
import Form from "../Form";
import { CommonRecordType } from "../../types/common";
import { useState } from "react";

function FormModal({
  fields,
  fieldsData,
  onCancel,
  onSubmit,
  ...restProp
}: ModalProps & {
  fields: FormFieldsType[];
  fieldsData: CommonRecordType;
  onSubmit: (v: CommonRecordType) => void;
}) {
  const [form] = AntdForm.useForm();
  const values = AntdForm.useWatch([], form);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleOk = () => {
    onSubmit(values);
  };

  return (
    <Modal
      onCancel={onCancel}
      footer={
        <>
          <Button onClick={onCancel}>취소</Button>
          <Button type="primary" disabled={!isDisabled} onClick={handleOk}>
            저장
          </Button>
        </>
      }
      {...restProp}
    >
      <Form
        form={form}
        fields={fields}
        fieldsData={fieldsData}
        setIsDisabled={setIsDisabled}
      />
    </Modal>
  );
}

export default FormModal;
