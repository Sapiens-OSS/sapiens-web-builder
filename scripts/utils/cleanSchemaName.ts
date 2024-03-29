export function cleanSchemaName(name: string) {
  return name
    .replace(/definition/i, "")
    .replace(/file/i, "")
    .replace(/objects/i, "")
    .trim();
}
