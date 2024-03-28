const objectUrlRegistry: {
  [key: string]: { objectUrl: string; clearTimeout: () => void };
} = {};

export const fetchObjectUrl = (id: string, blob: Blob): string => {
  if (!objectUrlRegistry[id]) {
    objectUrlRegistry[id] = {
      objectUrl: URL.createObjectURL(blob),
      clearTimeout: () => {},
    };
  }

  // Clear timeout and reset
  objectUrlRegistry[id].clearTimeout();
  const timeout = setTimeout(() => {
    delete objectUrlRegistry[id];
  }, 10 * 60 * 1000); // 10 minutes
  objectUrlRegistry[id].clearTimeout = () => {
    clearTimeout(timeout);
  };
  return objectUrlRegistry[id].objectUrl;
};
