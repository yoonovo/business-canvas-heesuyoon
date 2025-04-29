import { useEffect } from "react";
import { Form as AntdForm, FormInstance } from "antd";

import { FormItem } from "@/components";
import { FormFieldsType } from "@/types/form";
import { parseDate } from "@/utils/date";

type FormPropsType<T> = {
  form: FormInstance;
  fields: FormFieldsType[];
  fieldsData: T;
  setIsDisabled: (v: boolean) => void;
};

function Form<T>({
  form,
  fields,
  fieldsData,
  setIsDisabled,
  ...restProps
}: FormPropsType<T>) {
  // Date 타입 필드 값을 Dayjs로 변환
  useEffect(() => {
    const dateFieldId = fields.filter(({ type }) => type === "date")?.[0]
      .id as keyof T;

    form.setFieldsValue({
      ...fieldsData,
      [dateFieldId]: parseDate(String(fieldsData[dateFieldId])),
    });
  }, [fieldsData]);

  // 필수값 유효성 검사
  useEffect(() => {
    const delay = setTimeout(() => {
      form
        .validateFields({ validateOnly: true })
        .then(() => setIsDisabled(true))
        .catch(() => setIsDisabled(false));
    }, 0);

    return () => clearTimeout(delay);
  }, [form.getFieldsValue()]);

  return (
    <AntdForm form={form} layout="vertical" requiredMark={false} {...restProps}>
      {fields.map((field) => (
        <FormItem key={`form_${field.id}`} field={field} />
      ))}
    </AntdForm>
  );
}

export default Form;
