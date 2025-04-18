import { FormFieldsType } from "@/types/form";

export const formFields: FormFieldsType[] = [
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

export const selectOpts = [
  { value: "개발자", label: "개발자" },
  { value: "PO", label: "PO" },
  { value: "디자이너", label: "디자이너" },
];
