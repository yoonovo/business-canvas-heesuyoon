import type { ColumnType as AntdColumnType } from "antd/es/table";
import type { ColumnFilterItem } from "antd/es/table/interface";
import { CommonColumnType } from "@/types/column";
import { Key } from "react";

type valueType = Key | boolean;

export function createColumns<T extends AntdColumnType>(
  columns: CommonColumnType<T>[],
  dataSource: T[]
): AntdColumnType<T>[] {
  return columns.map(
    ({ dataIndex, isFilter, filterMatchType, filterList, ...restProp }) => {
      // 필터 목록 추출
      const filters: ColumnFilterItem[] = isFilter
        ? filterList ??
          [...new Set(dataSource.map((data) => data[dataIndex]))].reduce(
            (tot: ColumnFilterItem[], v) => {
              tot.push({
                text: String(v),
                value: v as valueType,
              });
              return tot;
            },
            []
          )
        : [];

      // 필터링 형식에 따라 동작
      const onFilter = (v: valueType, record: T) => {
        const fieldValue = String(record[dataIndex]);

        switch (filterMatchType) {
          case "exact": // 완전 일치
            return record[dataIndex] === v;
          case "partial": // 부분 일치
          default:
            return fieldValue.includes(String(v));
        }
      };

      return {
        key: dataIndex as Key,
        dataIndex: String(dataIndex),
        ...(isFilter && {
          filters,
          onFilter,
        }),
        ...restProp,
      };
    }
  );
}
