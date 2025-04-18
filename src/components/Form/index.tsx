import { Form as AntdForm, FormInstance } from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import FormItem from "./FormItem";
import { FormFieldsType } from "../../types/form";
import { CommonRecordType } from "../../types/common";

function Form({
  form,
  fields,
  fieldsData,
  setIsDisabled,
  ...restProps
}: {
  form: FormInstance;
  fields: FormFieldsType[];
  fieldsData: CommonRecordType;
  setIsDisabled: (v: boolean) => void;
}) {
  useEffect(() => {
    const dateFieldId = fields.filter(({ type }) => type === "date")?.[0].id;
    const data = {
      ...fieldsData,
      [dateFieldId]: dayjs(String(fieldsData[dateFieldId])),
    };

    form.setFieldsValue(data);
  }, [fieldsData]);

  // 필수값 유효성 검사
  useEffect(() => {
    const timer = setTimeout(() => {
      form
        .validateFields()
        .then(() => setIsDisabled(true))
        .catch(() => setIsDisabled(false));
    }, 0);

    return () => clearTimeout(timer);
  }, [form.getFieldsValue()]);

  return (
    <AntdForm form={form} layout="vertical" {...restProps}>
      {fields.map((field) => (
        <FormItem key={`form_${field.id}`} field={field} />
      ))}
    </AntdForm>
  );
}

export default Form;
