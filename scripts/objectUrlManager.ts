const objectUrlRegistry: {
  [key: string]: { objectUrl: string; clearTimeout: () => void };
} = {};

const urlCreator = window.URL || window.webkitURL;


export const fetchObjectUrl = (id: string, blob: Blob): string => {
  if (!objectUrlRegistry[id]) {
    objectUrlRegistry[id] = {
      objectUrl: urlCreator.createObjectURL(blob),
      clearTimeout: () => { },
    };
  }

  // Clear timeout and reset
  objectUrlRegistry[id].clearTimeout();
  const timeout = setTimeout(() => {
    urlCreator.revokeObjectURL(objectUrlRegistry[id].objectUrl);
    delete objectUrlRegistry[id];
  }, 10 * 60 * 1000); // 10 minutes
  objectUrlRegistry[id].clearTimeout = () => {
    clearTimeout(timeout);
  };
  return objectUrlRegistry[id].objectUrl;
};
