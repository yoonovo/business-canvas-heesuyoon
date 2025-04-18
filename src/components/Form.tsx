import { Checkbox, DatePicker, Form, Input, Select } from "antd";
import { useState } from "react";

function RecordForm() {
  const [form] = Form.useForm();

  const formFields = [
    { id: "name", type: "text", label: "이름", required: true },
    { id: "address", type: "text", label: "주소", required: false },
    { id: "memo", type: "textarea", label: "메모", required: false },
    { id: "registDate", type: "date", label: "가입일", required: true },
    { id: "job", type: "select", label: "직업", required: false },
    {
      id: "isAgreeEmail",
      type: "checkbox",
      label: "이메일 수신 동의",
      required: false,
    },
  ];

  const selectOpts = [
    { value: "developer", label: <span>개발자</span> },
    { value: "po", label: <span>PO</span> },
    { value: "designer", label: <span>디자이너</span> },
  ];

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    memo: "",
    registDate: "",
    job: "개발자",
    isAgreeEmail: false,
  });

  return (
    <Form form={form} layout="vertical" initialValues={formData}>
      {formFields.map(({ id, type, label, required }) => {
        const commonProps = {
          name: id,
          label,
          required,
        };

        switch (type) {
          case "text":
            return (
              <Form.Item
                key={`form_${label}_${id}`}
                rules={[
                  { max: 20, message: "글자수 20을 초과할 수 없습니다." },
                ]}
                {...commonProps}
              >
                <Input placeholder="Input" />
              </Form.Item>
            );
          case "textarea":
            return (
              <Form.Item
                key={`form_${label}_${id}`}
                rules={[
                  { max: 50, message: "글자수 50을 초과할 수 없습니다." },
                ]}
                {...commonProps}
              >
                <Input.TextArea placeholder="TextArea" />
              </Form.Item>
            );
          case "date":
            return (
              <Form.Item key={`form_${label}_${id}`} {...commonProps}>
                <DatePicker />
              </Form.Item>
            );
          case "select":
            return (
              <Form.Item key={`form_${label}_${id}`} {...commonProps}>
                <Select
                  options={selectOpts}
                  // defaultValue={selectOpts[0]?.value}
                  style={{ width: 120 }}
                  // onChange={handleChange}
                />
              </Form.Item>
            );
          case "checkbox":
            return (
              <Form.Item
                key={`form_${label}_${id}`}
                valuePropName="checked"
                {...commonProps}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            );
        }
      })}
    </Form>
  );
}

export default RecordForm;
