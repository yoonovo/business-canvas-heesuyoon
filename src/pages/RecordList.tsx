import React from "react";
import { Button, Flex, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CommonTable from "../components/common/Table";
import { recordColumns } from "../constants/recordColumns";
import type { RecordType } from "../types/record";

const { Text } = Typography;

const RecordList: React.FC = () => {
  const recordList: RecordType[] = [
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
      <CommonTable<RecordType>
        rowSelection={{ type: "checkbox" }}
        dataSource={recordList}
        columns={recordColumns}
        isButtons={true}
      />
    </div>
  );
};

export default RecordList;
