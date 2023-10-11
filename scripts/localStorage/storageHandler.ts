interface BucketIndex {
  bucketPaths: string[];
}

const bucketIndexAssembler = (bucketName: string) => `${bucketName}._index`;
const documentPathAssembler = (bucketName: string, documentName: string) =>
  `${bucketName}.${documentName}`;

export function createBucket(name: string) {
  const bucketIndex: BucketIndex = { bucketPaths: [] };
  const bucketIndexPath = bucketIndexAssembler(name);

  localStorage.setItem(bucketIndexPath, JSON.stringify(bucketIndex));
}

export function deleteBucket(name: string) {
  const bucketIndexPath = bucketIndexAssembler(name);
  const bucketIndexRaw = localStorage.getItem(bucketIndexPath);
  if (!bucketIndexRaw) throw "invalid bucket name";
  const bucketIndex: BucketIndex = JSON.parse(bucketIndexRaw);

  bucketIndex.bucketPaths.forEach((bucketPath) => {
    localStorage.removeItem(bucketPath);
  });

  localStorage.removeItem(bucketIndexPath);
}

export function searchBucket(name: string): string[] {
  const bucketIndexPath = bucketIndexAssembler(name);
  const bucketIndexRaw = localStorage.getItem(bucketIndexPath);
  if (!bucketIndexRaw) throw "invalid bucket name";
  const bucketIndex: BucketIndex = JSON.parse(bucketIndexRaw);

  return bucketIndex.bucketPaths;
}

export function assertBucketExists(name: string) {
  const bucketIndexPath = bucketIndexAssembler(name);
  const bucketIndexRaw = localStorage.getItem(bucketIndexPath);
  if (bucketIndexRaw == null) {
    return createBucket(name);
  }
  const bucketIndex: BucketIndex = JSON.parse(bucketIndexRaw);
  if (bucketIndex == null) {
    return createBucket(name);
  }
}

export function createOrSetDocument(
  bucketName: string,
  documentName: string,
  documentContents: any
) {
  const bucketIndexPath = bucketIndexAssembler(bucketName);
  const bucketIndexRaw = localStorage.getItem(bucketIndexPath);
  if (!bucketIndexRaw) throw "invalid bucket name";
  const bucketIndex: BucketIndex = JSON.parse(bucketIndexRaw);

  const documentPath = documentPathAssembler(bucketName, documentName);

  if (!bucketIndex.bucketPaths.includes(documentPath)) {
    bucketIndex.bucketPaths.push(documentPath);
    localStorage.setItem(bucketIndexPath, JSON.stringify(bucketIndex));
  }

  localStorage.setItem(documentPath, JSON.stringify(documentContents));
}

export function getDocument(bucketName: string, documentName: string): any {
  const documentPath = documentPathAssembler(bucketName, documentName);
  const document = localStorage.getItem(documentPath);
  if (!document) throw "invalid bucket and/or document";
  return JSON.parse(document);
}

export function getOrDefaultDocument(
  bucketName: string,
  documentName: string,
  contents: any
): any {
  try {
    return getDocument(bucketName, documentName);
  } catch (e) {
    return contents;
  }
}

export function deleteDocument(bucketName: string, documentName: string) {
  const bucketIndexPath = bucketIndexAssembler(bucketName);
  const bucketIndexRaw = localStorage.getItem(bucketIndexPath);
  if (!bucketIndexRaw) throw "invalid bucket name";
  const bucketIndex: BucketIndex = JSON.parse(bucketIndexRaw);

  const documentPath = documentPathAssembler(bucketName, documentName);

  bucketIndex.bucketPaths.splice(
    bucketIndex.bucketPaths.findIndex((e) => e == documentPath),
    1
  );

  localStorage.removeItem(documentPath);

  localStorage.setItem(bucketIndexPath, JSON.stringify(bucketIndex));
}
