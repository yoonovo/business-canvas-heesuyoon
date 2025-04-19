export type FormFieldsType = {
  id: string;
  type: string; // 필드 형식 (text | textarea | date | select | checkbox)
  label: string; // 필드명
  required: boolean; // 필수값 여부
};
