import { describe, it, expect } from 'vitest';
import {
  CompactDateField,
  CompactDateParser
} from '../../../../src/models/metadata-fields/field-types/compact-date';

describe('CompactDateField', () => {
  it('parses a compact YYYYMMDDHHMMSS timestamp', () => {
    const field = new CompactDateField('20101106063500');
    const date = field.value;

    expect(date).to.be.an.instanceof(Date);
    expect(date?.getFullYear()).to.equal(2010);
    expect(date?.getMonth()).to.equal(10); // November (0-indexed)
    expect(date?.getDate()).to.equal(6);
    expect(date?.getHours()).to.equal(6);
    expect(date?.getMinutes()).to.equal(35);
  });

  it('parses a compact YYYYMMDD date', () => {
    const field = new CompactDateField('20101106');

    expect(field.value?.getFullYear()).to.equal(2010);
    expect(field.value?.getDate()).to.equal(6);
  });

  it('falls back to standard date parsing', () => {
    const field = new CompactDateField('2010-11-06T06:35:00Z');

    expect(field.value).to.be.an.instanceof(Date);
  });

  it('rejects unparseable values but preserves the raw value', () => {
    const field = new CompactDateField('not a date');

    expect(field.value).to.be.undefined;
    expect(field.rawValue).to.equal('not a date');
  });

  it('exposes a shared parser instance', () => {
    expect(CompactDateParser.shared).to.be.an.instanceof(CompactDateParser);
  });
});
