import type { ColumnType as AntdColumnType } from "antd/es/table";
// import { ReactNode } from "react";

type ColumnType<T> = {
  title: string;
  dataIndex: string;
  isFilter?: boolean;
  filterMatchType?: "exact" | "partial";
  filterList?: { text: string; value: T[keyof T] }[];
  render?: (value: T[keyof T], record: T) => ReactNode;
};

export function createColumns<C extends Record<string, any>, T>(
  columns: ColumnType<T>[],
  dataSource: T[]
): AntdColumnType<T>[] {
  return columns.map(
    ({ title, dataIndex, isFilter, filterMatchType, filterList, render }) => {
      const filters = isFilter
        ? filterList
          ? filterList
          : [...new Set(dataSource.map((item) => item[dataIndex]))].map(
              (value) => ({ text: value, value })
            )
        : [];

      return {
        title,
        dataIndex,
        key: dataIndex,
        render,
        ...(isFilter && {
          filters: filters,
          onFilter: (value: boolean | React.Key, record: T) =>
            filterMatchType === "exact"
              ? record[dataIndex] === value
              : String(record[dataIndex]).includes(String(value)),
        }),
      };
    }
  );
}
