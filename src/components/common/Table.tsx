import { ReactNode } from "react";
import { Table } from "antd";
import { createColumns } from "../../utils/createColumn";

type ColumnType<T> = {
  title: string;
  dataIndex: string;
  isFilter?: boolean;
  filterMatchType?: "exact" | "partial";
  filterList?: { text: string; value: T[keyof T] }[];
  render?: (value: T[keyof T], record: T) => ReactNode;
};

function CommonTable<T>({
  columns,
  dataSource,
}: {
  columns: ColumnType<T>;
  dataSource: T[];
}) {
  return (
    <Table
      rowSelection={{ type: "checkbox" }}
      dataSource={dataSource}
      columns={createColumns(columns, dataSource)}
    />
  );
}

export default CommonTable;
