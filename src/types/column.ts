import type { ReactNode } from "react";

export type CommonColumnType<T> = {
  title: string;
  dataIndex: keyof T;
  isFilter?: boolean; // 필터링 활성화 여부
  filterMatchType?: "exact" | "partial"; // 필러링 형식 : 완전 매치(exact), 부분 매치(partial)
  filterList?: { text: string | boolean; value: string | boolean }[]; // 사용자 지정 필터링 목록
  render?: (value: any, record: T) => ReactNode;
};
