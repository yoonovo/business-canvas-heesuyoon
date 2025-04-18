import { Form, Input } from "antd";

function RecordForm() {
  const [form] = Form.useForm();

  const formFields = [
    { type: "text", label: "이름", required: true },
    { type: "text", label: "주소", required: false },
    { type: "textarea", label: "메모", required: false },
    { type: "date", label: "가입일", required: true },
    { type: "select", label: "직업", required: false },
    { type: "checkbox", label: "이메일 수신 동의", required: false },
  ];

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="이름" required>
        <Input placeholder="Input" />
      </Form.Item>
      <Form.Item label="주소" required>
        <Input placeholder="Input" />
      </Form.Item>
      {/* <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item> */}
    </Form>
  );
}

export default RecordForm;
