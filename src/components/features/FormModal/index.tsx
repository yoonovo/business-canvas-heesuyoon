import { useState } from "react";
import { Form as AntdForm, Button, Modal, ModalProps } from "antd";

import { StyledModal } from "./modal.styled";
import { Form } from "@/components";
import { FormFieldsType } from "@/types/form";

function FormModal<T>({
  fields,
  fieldsData,
  onCancel,
  onSubmit,
  ...restProp
}: ModalProps & {
  fields: FormFieldsType[];
  fieldsData: T;
  onSubmit: (v: T) => void;
}) {
  const [form] = AntdForm.useForm();
  const values = AntdForm.useWatch([], form);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <StyledModal
      onCancel={onCancel}
      footer={
        <>
          <Button onClick={onCancel}>취소</Button>
          <Button
            type="primary"
            disabled={!isDisabled}
            onClick={() => onSubmit({ ...fieldsData, ...values })}
          >
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
    </StyledModal>
  );
}

export default FormModal;
