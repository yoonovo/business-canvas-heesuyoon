import { Form, Input, DatePicker, Select, Checkbox } from "antd";

import "./form.css";
import { selectOpts } from "@/constants/recordFormFields";
import { FormFieldsType } from "@/types/form";

function FormItem({ field }: { field: FormFieldsType }) {
  const { id, type, label, required } = field;

  const commonProps = {
    name: id,
    label: required ? (
      <>
        {label}
        <span className="required-mark">*</span>
      </>
    ) : (
      label
    ),
  };

  const getRules = (type: string, required: boolean, label: string) => {
    const rules = [];

    switch (true) {
      case required:
        rules.push({ required: true, message: `${label}은 필수입니다.` });
        break;
      case type === "text":
        rules.push({ max: 20, message: "글자수 20을 초과할 수 없습니다." });
        break;
      case type === "textarea":
        rules.push({ max: 50, message: "글자수 50을 초과할 수 없습니다." });
        break;
    }

    return rules;
  };

  switch (type) {
    case "text":
      return (
        <Form.Item rules={getRules(type, required, label)} {...commonProps}>
          <Input placeholder="Input" />
        </Form.Item>
      );
    case "textarea":
      return (
        <Form.Item rules={getRules(type, required, label)} {...commonProps}>
          <Input.TextArea placeholder="TextArea" />
        </Form.Item>
      );
    case "date":
      return (
        <Form.Item rules={getRules(type, required, label)} {...commonProps}>
          <DatePicker />
        </Form.Item>
      );
    case "select":
      return (
        <Form.Item rules={getRules(type, required, label)} {...commonProps}>
          <Select options={selectOpts} style={{ width: 120 }} />
        </Form.Item>
      );
    case "checkbox":
      return (
        <Form.Item
          rules={getRules(type, required, label)}
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
