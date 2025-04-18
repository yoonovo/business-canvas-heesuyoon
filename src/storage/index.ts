import { memoryStore } from "./storageStore";
import { localStorageStore } from "./localStorage";

type StoreType = "local-storage" | "in-memory";
export type StorageFuncType = {
  get: (key: string) => any;
  set: (key: string, v: any) => void;
  remove: (key: string) => void;
};

export const storageType: StoreType = import.meta.env.VITE_STORAGE;
export const storage =
  storageType === "local-storage" ? localStorageStore : memoryStore;
