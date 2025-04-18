import { Form as AntdForm } from "antd";
import { useEffect } from "react";
import FormItem from "./FormItem";
import { FormFieldsType } from "../../types/form";

function Form<T>({ fields, data }: { fields: FormFieldsType[]; data: T }) {
  const [form] = AntdForm.useForm();

  useEffect(() => {
    form.setFieldsValue(data);
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
