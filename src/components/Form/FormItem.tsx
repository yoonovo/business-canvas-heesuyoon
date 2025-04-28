import { Form, Input, DatePicker, Select, Checkbox } from "antd";
import type { Rule } from "antd/es/form";

import { StyledRequiredMark } from "./form.styled";
import { selectOpts } from "@/constants/recordFormFields";
import { FormFieldsType } from "@/types/form";
import { useMemo, useState } from "react";

type FormItemPropsType = {
  field: FormFieldsType;
};

function RequiredMark(label: string) {
  return (
    <>
      {label}
      <StyledRequiredMark>*</StyledRequiredMark>
    </>
  );
}

function FormItem({ field }: FormItemPropsType) {
  const [{ id, type, label, required }] = useState(field);

  const commonProps = useMemo(
    () => ({
      name: id,
      label: required ? RequiredMark(label) : label,
    }),
    [id, label, required]
  );

  const getRules = ({ required, label, max }: FormFieldsType): Rule[] => [
    ...(required
      ? [{ required: true, message: `${label}은 필수입니다.` }]
      : []),
    ...(max
      ? [
          {
            max,
            message: `글자수 ${max}을 초과할 수 없습니다.`,
          },
        ]
      : []),
  ];

  const renderComponent = useMemo(() => {
    switch (type) {
      case "text":
        return (
          <Form.Item rules={getRules(field)} {...commonProps}>
            <Input placeholder="Input" />
          </Form.Item>
        );
      case "textarea":
        return (
          <Form.Item rules={getRules(field)} {...commonProps}>
            <Input.TextArea placeholder="TextArea" />
          </Form.Item>
        );
      case "date":
        return (
          <Form.Item rules={getRules(field)} {...commonProps}>
            <DatePicker />
          </Form.Item>
        );
      case "select":
        return (
          <Form.Item rules={getRules(field)} {...commonProps}>
            <Select options={selectOpts} style={{ width: 120 }} />
          </Form.Item>
        );
      case "checkbox":
        return (
          <Form.Item
            rules={getRules(field)}
            valuePropName="checked"
            {...commonProps}
          >
            <Checkbox>동의 합니다.</Checkbox>
          </Form.Item>
        );
      default:
        return <></>;
    }
  }, [field]);

  return <>{renderComponent}</>;
}

export default FormItem;
