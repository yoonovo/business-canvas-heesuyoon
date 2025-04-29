import { useState } from "react";
import { Form as AntdForm, Button, ModalProps } from "antd";

import { StyledModal } from "./modal.styled";
import { Form } from "@/components";
import { FormFieldsType } from "@/types/form";

type FormModalPropsType<T> = ModalProps & {
  fields: FormFieldsType[];
  fieldsData: T;
  onSubmit: (v: T) => void;
};

function FormModal<T>({
  fields,
  fieldsData,
  onCancel,
  onSubmit,
  ...restProp
}: FormModalPropsType<T>) {
  const [form] = AntdForm.useForm();
  const values = AntdForm.useWatch([], form);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSave = () => {
    onSubmit({ ...fieldsData, ...values });
  };

  return (
    <StyledModal
      onCancel={onCancel}
      footer={
        <>
          <Button onClick={onCancel}>취소</Button>
          <Button type="primary" disabled={!isDisabled} onClick={handleSave}>
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
