import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

import { RecordStoreType } from "@/types/record";
import { formatDate } from "@/utils/date";
import { initRecords } from "@/constants/initValues";

const storageType: "local-storage" | "in-memory" = import.meta.env.VITE_STORAGE;

const config: StateCreator<RecordStoreType, [], []> = (set) => ({
  list: [...initRecords],
  setRows: (list) => set({ list }),
  addRow: (row) =>
    set((state) => ({
      list: [
        ...state.list,
        {
          ...row,
          key: uuidv4(),
          registDate: formatDate(row.registDate),
        },
      ],
    })),
  editRow: (row) =>
    set((state) => ({
      list: state.list.map((val) =>
        val.key === row.key
          ? {
              ...row,
              registDate: formatDate(row.registDate),
            }
          : val
      ),
    })),
  deleteRow: (key) =>
    set((state) => ({
      list: state.list.filter((row) => row.key !== key),
    })),
});

export const useRecordStore =
  storageType === "local-storage"
    ? create<RecordStoreType>()(
        persist(config, {
          name: "records",
        })
      )
    : create<RecordStoreType>()(config);
