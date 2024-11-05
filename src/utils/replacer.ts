export function bigIntReplacer(key: string, value: any) {
  return typeof value === "bigint" ? value.toString() : value;
}
