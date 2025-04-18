import { Form as AntdForm } from "antd";
import { useEffect } from "react";
import FormItem from "./FormItem";
import { FormFieldsType } from "../../types/form";
import dayjs from "dayjs";

function Form<T>({ fields, data }: { fields: FormFieldsType[]; data: T }) {
  const [form] = AntdForm.useForm();

  useEffect(() => {
    const dateFieldId = fields.filter(({ type }) => type === "date")?.[0]
      .id as keyof T;
    const fieldsData = {
      ...data,
      [dateFieldId]: dayjs(String(data[dateFieldId])),
    };

    form.setFieldsValue(fieldsData);
  }, []);

  return (
    <AntdForm form={form} layout="vertical">
      {fields.map((field) => (
        <FormItem key={`form_${field.id}`} field={field} />
      ))}
    </AntdForm>
  );
}

export default Form;
