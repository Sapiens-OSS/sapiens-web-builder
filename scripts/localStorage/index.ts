import { PROJECT_SOURCES } from "../project";
import {
  BUCKET_NAME as LOCAL_STORAGE_BUCKET_NAME,
  LocalStorageSource,
} from "./localStorageSource";
import { assertBucketExists } from "./storageHandler";

export const localStorageSource: LocalStorageSource = new LocalStorageSource();

export const LoadLocalStorage = () => {
  assertBucketExists(LOCAL_STORAGE_BUCKET_NAME);
  if (!PROJECT_SOURCES.includes(localStorageSource))
    PROJECT_SOURCES.push(localStorageSource);
};
