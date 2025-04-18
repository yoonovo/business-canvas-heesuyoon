import { useEffect } from "react";
import { Form as AntdForm, FormInstance } from "antd";
import dayjs from "dayjs";

import { FormItem } from "@/components";
import { FormFieldsType } from "@/types/form";

function Form<T>({
  form,
  fields,
  fieldsData,
  setIsDisabled,
  ...restProps
}: {
  form: FormInstance;
  fields: FormFieldsType[];
  fieldsData: T;
  setIsDisabled: (v: boolean) => void;
}) {
  // Date 타입 필드 값을 Dayjs로 변환
  useEffect(() => {
    const dateFieldId = fields.filter(({ type }) => type === "date")?.[0]
      .id as keyof T;
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
