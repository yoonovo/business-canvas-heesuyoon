import { Key } from "react";
import { Table, TableProps, MenuProps } from "antd";

import "./table.css";
import { DropdownMenuBtn, TableHeader } from "@/components";
import { createColumns } from "@/utils/createColumn";
import type { CommonColumnType } from "@/types/column";
import { RecordType } from "@/types/record";

type CommonTablePropsType<T> = TableProps<T> & {
  headerTitle: string;
  columns: CommonColumnType<T>[];
  dataSource: T[];
  isButtons?: boolean; // 버튼 활성화
  buttons?: MenuProps["items"]; // 사용자 지정 버튼 메뉴
  onAdd?: null | (() => void);
  onEdit?: (v: T) => void;
  onDelete?: (v: T) => void;
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
    <Table<T>
      title={() => <TableHeader title={headerTitle} onAdd={onAdd} />}
      className="common-table"
      dataSource={dataSource}
      columns={[...createColumns(columns, dataSource), buttonsCol]}
      {...restProps}
    />
  );
}

export default CommonTable;
