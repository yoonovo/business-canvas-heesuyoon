import dayjs from "dayjs";

export const initRecordItem = {
  name: "",
  address: "",
  memo: "",
  registDate: dayjs(new Date()).format("YYYY-MM-DD"),
  job: "개발자",
  isAgreeEmail: false,
};

export const initRecords = [
  {
    key: 1,
    name: "John Doe",
    address: "서울 강남구",
    memo: "외국인",
    registDate: "2024-10-02",
    job: "개발자",
    isAgreeEmail: true,
  },
  {
    key: 2,
    name: "Foo Bar",
    address: "서울 서초구",
    memo: "한국인",
    registDate: "2024-10-01",
    job: "PO",
    isAgreeEmail: false,
  },
];
