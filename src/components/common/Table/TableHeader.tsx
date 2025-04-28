import { PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";

const TableHeader = ({
  title,
  onAdd,
}: {
  title: string;
  onAdd: null | (() => void);
}) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      style={{ height: 48, padding: "8px 14px" }}
    >
      <Typography.Text style={{ fontSize: "16px", fontWeight: 600 }}>
        {title}
      </Typography.Text>
      {onAdd && (
        <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
          추가
        </Button>
      )}
    </Flex>
  );
};

export default TableHeader;
