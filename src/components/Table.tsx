import { Table } from "antd";
import type { TableProps } from "antd";
import { createColumns } from "../utils/createColumn";
import type { CommonColumnType } from "../types/column";
import type { MenuProps } from "antd";
import DropdownMenuBtn from "./DropdownMenuBtn";
import { Key } from "react";

type CommonTablePropsType<T> = TableProps<T> & {
  columns: CommonColumnType<T>[];
  dataSource: T[];
  isButtons?: boolean; // 버튼 활성화
  buttons?: MenuProps["items"]; // 사용자 지정 버튼 메뉴
  onEdit: (v: T) => void;
  onDelete: (v: T) => void;
};

function CommonTable<T extends Record<string, React.Key | boolean>>({
  columns,
  dataSource,
  isButtons,
  buttons,
  onEdit,
  onDelete,
  ...restProps
}: CommonTablePropsType<T>) {
  const buttonsCol = isButtons
    ? {
        title: "",
        dataIndex: "buttons",
        width: "5%",
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
      dataSource={dataSource}
      columns={[...createColumns(columns, dataSource), buttonsCol]}
      {...restProps}
    />
  );
}

export default CommonTable;
