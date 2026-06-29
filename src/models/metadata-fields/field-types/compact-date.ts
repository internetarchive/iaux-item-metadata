import type {
  FieldParserInterface,
  FieldParserRawValue,
} from '@internetarchive/field-parsers';
import { MetadataField, MetadataRawValue } from '../metadata-field';

/**
 * Parses compact, all-digit timestamps used by fields like `scandate`, e.g.
 * `"20101106"` (`YYYYMMDD`) or `"20101106063500"` (`YYYYMMDDHHMMSS`), into a
 * native `Date`. Values that are not in the compact form fall back to the
 * native `Date` parser, so ISO-ish strings are still handled. The digits are
 * interpreted as local time. Unparseable values return `undefined`.
 *
 * @class CompactDateParser
 */
export class CompactDateParser implements FieldParserInterface<Date> {
  // use a shared static instance for performance instead of
  // instantiating a new instance for every use
  static shared = new CompactDateParser();

  parseValue(rawValue: FieldParserRawValue): Date | undefined {
    if (typeof rawValue !== 'string') return undefined;
    const trimmed = rawValue.trim();
    const match = trimmed.match(
      /^(\d{4})(\d{2})(\d{2})(?:(\d{2})(\d{2})(\d{2}))?$/,
    );
    const value = match
      ? `${match[1]}-${match[2]}-${match[3]}T${match[4] ?? '00'}:${
          match[5] ?? '00'
        }:${match[6] ?? '00'}`
      : trimmed;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? undefined : date;
  }
}

/**
 * A field whose value is a `Date` parsed from a compact all-digit timestamp.
 *
 * @class CompactDateField
 */
export class CompactDateField extends MetadataField<Date, CompactDateParser> {
  constructor(rawValue: MetadataRawValue) {
    super(CompactDateParser.shared, rawValue);
  }
}
