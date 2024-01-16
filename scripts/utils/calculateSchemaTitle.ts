export default function calculateSchemaTitle(schema: any) {
  return schema.title ?? schema.name ?? schema._key ?? "No schema name found";
}
