import { Table } from "antd";
import type { TableProps } from "antd";
import { createColumns } from "../../utils/createColumn";
import type { CommonColumnType } from "../../types/column";

function CommonTable<T extends Record<string, React.Key | boolean>>({
  columns,
  dataSource,
  ...restProps
}: TableProps<T> & {
  columns: CommonColumnType<T>[];
  dataSource: T[];
}) {
  return (
    <Table<T>
      dataSource={dataSource}
      columns={createColumns(columns, dataSource)}
      {...restProps}
    />
  );
}

export default CommonTable;
