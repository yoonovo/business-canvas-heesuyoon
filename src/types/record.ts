export type RecordType = {
  key?: string;
  name: string; // 이름
  address: string; // 주소
  memo: string; // 메모
  registDate: string; // 가입일
  job: string; // 직업
  isAgreeEmail: boolean; // 이메일 수신 여부
};

export type RecordStoreType = {
  list: RecordType[];
  addRow: (row: RecordType) => void;
  editRow: (row: RecordType) => void;
  deleteRow: (key: string) => void;
  setRows: (rows: RecordType[]) => void;
};
