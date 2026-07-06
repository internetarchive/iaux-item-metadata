import { FieldParserRawValue } from '@internetarchive/field-parsers';

/**
 * Parses the first of `keys` whose raw value is present in `raw`, using
 * `parse`, or returns `undefined` if none are set. `parse` runs only on a
 * present value, so it never sees `null`/`undefined`. Later keys act as
 * fallbacks, for values that arrive under more than one name.
 *
 * @param raw The raw record to read from
 * @param parse Parses a present raw value (e.g. `v => DateParser.shared.parseValue(v)`)
 * @param keys The key(s) to read, in priority order
 */
export function parseField<T>(
  raw: Readonly<Record<string, unknown>>,
  parse: (value: FieldParserRawValue) => T | undefined,
  ...keys: string[]
): T | undefined {
  for (const key of keys) {
    const value = raw[key];
    if (value != null) return parse(value as FieldParserRawValue);
  }
  return undefined;
}
