import { Flex, Typography } from "antd";
import styled from "styled-components";

export const StyledTableContainer = styled.div`
  .ant-table-title {
    padding: 0;
  }

  thead th.ant-table-cell {
    padding: 8px 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  thead th.ant-table-cell span {
    font-size: 14px;
    font-weight: 600;
  }

  thead .ant-table-selection-column {
    width: 48px;
  }

  tbody .ant-table-selection-column {
    width: 48px;
    border-right: 1px solid rgba(0, 0, 0, 0.06);
  }
`;

export const StyledTableHeader = styled(Flex).attrs({
  justify: "space-between",
  align: "center",
})`
  height: 50px;
  padding: 8px 14px;
`;

export const StyledText = styled(Typography.Text)`
  font-size: 16px;
  font-weight: 700;
`;
