import styled from "styled-components";

export const StyledTableWrapper = styled.div`
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
