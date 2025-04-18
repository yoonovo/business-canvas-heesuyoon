import React from "react";
import { Button, Checkbox, Flex, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CommonTable from "../components/common/Table";
import { CommonColumnType } from "../types/column";

type DataType = {
  key: string;
  name: string;
  address: string;
  memo: string;
  registDate: string;
  job: string;
  isAgreeEmail: boolean;
};

const { Text } = Typography;

const RecordList: React.FC = () => {
  const recordList: DataType[] = [
    {
      key: "1",
      name: "John Doe",
      address: "서울 강남구",
      memo: "외국인",
      registDate: "2024-10-02",
      job: "개발자",
      isAgreeEmail: true,
    },
    {
      key: "2",
      name: "Foo Bar",
      address: "서울 서초구",
      memo: "한국인",
      registDate: "2024-10-01",
      job: "PO",
      isAgreeEmail: false,
    },
  ];

  const columns: CommonColumnType<DataType>[] = [
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
    //   {
    //     title: "",
    //     dataIndex: "edit",
    //     render: () => (
    //       <Button color="default" variant="text" icon={<MoreOutlined />} />
    //     ),
    //   },
  ];

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        style={{ height: 50, padding: "8px 14px" }}
      >
        <Text style={{ fontSize: "16px", fontWeight: 600 }}>회원 목록</Text>
        <Button type="primary" icon={<PlusOutlined />}>
          추가
        </Button>
      </Flex>
      <CommonTable<DataType>
        rowSelection={{ type: "checkbox" }}
        dataSource={recordList}
        columns={columns}
      />
    </div>
  );
};

export default RecordList;
