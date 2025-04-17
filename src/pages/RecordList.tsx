import React from "react";
import { Table, Checkbox, Button, Flex, Typography } from "antd";
import { MoreOutlined, PlusOutlined } from "@ant-design/icons";

const { Text } = Typography;

const RecordList: React.FC = () => {
  const dataSource = [
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
  const columns = [
    {
      title: "이름",
      dataIndex: "name",
      key: "name",
      onFilter: (value, record) => record.name.includes(value),
      filters: [
        {
          text: "John Doe",
          value: "John Doe",
        },
        {
          text: "Foo Bar",
          value: "Foo Bar",
        },
      ],
    },
    {
      title: "주소",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "메모",
      dataIndex: "memo",
      key: "memo",
    },
    {
      title: "가입일",
      dataIndex: "registDate",
      key: "registDate",
    },
    {
      title: "직업",
      dataIndex: "job",
      key: "job",
    },
    {
      title: "이메일 수신 동의",
      dataIndex: "isAgreeEmail",
      key: "isAgreeEmail",
      filters: [
        {
          text: "선택됨",
          value: true,
        },
        {
          text: "선택 안함",
          value: false,
        },
      ],
      onFilter: (value, record) => record.isAgreeEmail === value,
      render: (value) => <Checkbox checked={value} />,
    },
    {
      title: "",
      dataIndex: "edit",
      key: "edit",
      width: "5%",
      render: () => (
        <Button color="default" variant="text" icon={<MoreOutlined />}></Button>
      ),
    },
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
      <Table
        rowSelection={{ type: "checkbox" }}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default RecordList;
