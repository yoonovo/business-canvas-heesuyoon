import { Key } from "react";
import { StorageFuncType } from "./index";

const store: Record<string, Key | boolean> = {};

export const memoryStore: StorageFuncType = {
  get: (key) => store[key],
  set: (key, value) => {
    store[key] = value;
  },
  remove: (key) => {
    delete store[key];
  },
};
