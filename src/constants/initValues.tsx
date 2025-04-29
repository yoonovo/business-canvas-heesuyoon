import { formatDate } from "@/utils/date";

export const initRecordItem = {
  name: "",
  address: "",
  memo: "",
  registDate: formatDate(new Date()),
  job: "개발자",
  isAgreeEmail: false,
};

export const initRecords = [
  {
    key: "test1",
    name: "윤희수",
    address: "서울 강남구",
    memo: "프론트엔드",
    registDate: "2019-04-08",
    job: "개발자",
    isAgreeEmail: true,
  },
  {
    key: "test2",
    name: "홍길동",
    address: "경기 용인시",
    memo: "백엔드",
    registDate: "2024-10-01",
    job: "개발자",
    isAgreeEmail: false,
  },
  {
    key: "test3",
    name: "유관순",
    address: "서울 마포구",
    memo: "",
    registDate: "2022-03-01",
    job: "디자이너",
    isAgreeEmail: false,
  },
];
