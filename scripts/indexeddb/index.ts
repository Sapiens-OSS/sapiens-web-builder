import { PROJECT_SOURCES } from "../project";
import { IndexedDBStorageSource } from "./indexedDBStorageSource";

export const indexedDBStorage: IndexedDBStorageSource = new IndexedDBStorageSource();

export const LoadIndexedDBSource = () => {
    if (!PROJECT_SOURCES.includes(indexedDBStorage))
      PROJECT_SOURCES.push(indexedDBStorage);
  };
  