import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { StyledTableHeader, StyledText } from "./table.styled";

const TableHeader = ({
  title,
  onAdd,
}: {
  title: string;
  onAdd: null | (() => void);
}) => {
  return (
    <StyledTableHeader>
      <StyledText>{title}</StyledText>
      {onAdd && (
        <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
          추가
        </Button>
      )}
    </StyledTableHeader>
  );
};

export default TableHeader;
