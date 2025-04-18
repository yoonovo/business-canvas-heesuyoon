import { Form, Input, DatePicker, Select, Checkbox } from "antd";
import { selectOpts } from "../../constants/recordFormFields";
import { FormFieldsType } from "../../types/form";

function FormItem({ field }: { field: FormFieldsType }) {
  const { id, type, label, required } = field;

  const commonProps = {
    name: id,
    label,
  };

  switch (type) {
    case "text":
      return (
        <Form.Item
          rules={[
            { max: 20, message: "글자수 20을 초과할 수 없습니다." },
            required
              ? { required: true, message: `${field.label}은 필수입니다.` }
              : {},
          ]}
          {...commonProps}
        >
          <Input placeholder="Input" />
        </Form.Item>
      );
    case "textarea":
      return (
        <Form.Item
          rules={[
            { max: 50, message: "글자수 50을 초과할 수 없습니다." },
            required
              ? { required: true, message: `${field.label}은 필수입니다.` }
              : {},
          ]}
          {...commonProps}
        >
          <Input.TextArea placeholder="TextArea" />
        </Form.Item>
      );
    case "date":
      return (
        <Form.Item
          rules={
            required
              ? [{ required: true, message: `${field.label}은 필수입니다.` }]
              : []
          }
          {...commonProps}
        >
          <DatePicker />
        </Form.Item>
      );
    case "select":
      return (
        <Form.Item
          rules={
            required
              ? [{ required: true, message: `${field.label}은 필수입니다.` }]
              : []
          }
          {...commonProps}
        >
          <Select options={selectOpts} style={{ width: 120 }} />
        </Form.Item>
      );
    case "checkbox":
      return (
        <Form.Item
          rules={
            required
              ? [{ required: true, message: `${field.label}은 필수입니다.` }]
              : []
          }
          valuePropName="checked"
          {...commonProps}
        >
          <Checkbox />
        </Form.Item>
      );
    default:
      return <></>;
  }
}

export default FormItem;
