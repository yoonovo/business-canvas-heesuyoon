import { Checkbox } from "antd";
import type { CommonColumnType } from "../types/column";
import type { RecordType } from "../types/record";

export const recordColumns: CommonColumnType<RecordType>[] = [
  {
    title: "이름",
    dataIndex: "name",
    isFilter: true,
    filterMatchType: "partial",
  },
  {
    title: "주소",
    dataIndex: "address",
    isFilter: true,
    filterMatchType: "partial",
  },
  {
    title: "메모",
    dataIndex: "memo",
    isFilter: true,
    filterMatchType: "partial",
  },
  {
    title: "가입일",
    dataIndex: "registDate",
    isFilter: true,
    filterMatchType: "partial",
  },
  {
    title: "직업",
    dataIndex: "job",
    isFilter: true,
    filterMatchType: "partial",
  },
  {
    title: "이메일 수신 동의",
    dataIndex: "isAgreeEmail",
    isFilter: true,
    filterMatchType: "exact",
    filterList: [
      {
        text: "선택됨",
        value: true,
      },
      {
        text: "선택 안함",
        value: false,
      },
    ],
    render: (value: boolean) => <Checkbox checked={value} />,
  },
];
