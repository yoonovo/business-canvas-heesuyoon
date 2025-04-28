import { Key } from "react";
import { TableProps, MenuProps, Table } from "antd";

import { StyledTableWrapper } from "./table.styled";
import { DropdownMenuBtn, TableHeader } from "@/components";
import { createColumns } from "@/utils/createColumn";
import type { CommonColumnType } from "@/types/column";
import { RecordType } from "@/types/record";

type CommonTablePropsType<T> = TableProps<T> & {
  headerTitle: string;
  columns: CommonColumnType<T>[];
  dataSource: T[];
  isButtons?: boolean; // 기본 버튼(수정, 삭제)과 사용자 지정 버튼 활성화
  buttons?: MenuProps["items"]; // 사용자 지정 버튼 메뉴 (기본 버튼 미노출)
  onAdd?: null | (() => void); // 테이블 헤더 추가 버튼 클릭 시 동작, null일 경우 버튼 미노출
  onEdit?: (v: T) => void; // Row 별 수정 버튼 클릭 시 동작
  onDelete?: (v: T) => void; // Row 별 삭제 버튼 클릭 시 동작
};

function CommonTable<T extends RecordType>({
  headerTitle,
  columns,
  dataSource,
  isButtons,
  buttons,
  onAdd = null,
  onEdit = () => {},
  onDelete = () => {},
  ...restProps
}: CommonTablePropsType<T>) {
  const buttonsCol = isButtons
    ? {
        title: "",
        dataIndex: "buttons",
        width: "48px",
        render: (_: Key, record: T) => (
          <DropdownMenuBtn
            buttons={buttons}
            onEdit={() => onEdit(record)}
            onDelete={() => onDelete(record)}
          />
        ),
      }
    : {};

  return (
    <StyledTableWrapper>
      <Table<T>
        title={() => <TableHeader title={headerTitle} onAdd={onAdd} />}
        dataSource={dataSource}
        columns={[...createColumns(columns, dataSource), buttonsCol]}
        {...restProps}
      />
    </StyledTableWrapper>
  );
}

export default CommonTable;
