import { describe, it, expect } from 'vitest';
import {
  LineListField,
  NumberListField,
  StringListField
} from '../../../../src/models/metadata-fields/field-types/list';

describe('List Field', () => {
  describe('String List Field', () => {
    it('can parse individual values', () => {
      const stringListField = new StringListField('foo');

      expect(stringListField.value).to.equal('foo');
      expect(stringListField.values).to.deep.equal(['foo']);
      expect(stringListField.rawValue).to.equal('foo');
    });

    it('can parse lists', () => {
      const stringListField = new StringListField('foo, bar, baz');

      expect(stringListField.value).to.equal('foo');
      expect(stringListField.values).to.deep.equal(['foo', 'bar', 'baz']);
      expect(stringListField.rawValue).to.equal('foo, bar, baz');
    });

    it('can parse lists of lists', () => {
      const stringListField = new StringListField([
        'foo, bar, baz',
        'beep, boop, bop'
      ]);

      expect(stringListField.value).to.equal('foo');
      expect(stringListField.values).to.deep.equal([
        'foo',
        'bar',
        'baz',
        'beep',
        'boop',
        'bop'
      ]);
      expect(stringListField.rawValue).to.deep.equal([
        'foo, bar, baz',
        'beep, boop, bop'
      ]);
    });
  });

  describe('NumberListField', () => {
    it('can parse lists of numbers', () => {
      const listField = new NumberListField('1, 2, 3');

      expect(listField.value).to.equal(1);
      expect(listField.values).to.deep.equal([1, 2, 3]);
      expect(listField.rawValue).to.equal('1, 2, 3');
    });

    it('can parse lists of lists', () => {
      const listField = new NumberListField(['1, 2, 3', '4, 5, 6']);

      expect(listField.value).to.equal(1);
      expect(listField.values).to.deep.equal([1, 2, 3, 4, 5, 6]);
      expect(listField.rawValue).to.deep.equal(['1, 2, 3', '4, 5, 6']);
    });
  });

  describe('Line List Field', () => {
    it('splits on newlines', () => {
      const raw =
        '1ddf028fde2ee3bdbc220ddea709aeab *Drunken Hearts 2012-06-02flac16.md5\nce5725decb7633fbb666d8bd457c2a60 *Guster2003-07-02d1t007.shn';
      const listField = new LineListField(raw);

      expect(listField.values).to.deep.equal([
        '1ddf028fde2ee3bdbc220ddea709aeab *Drunken Hearts 2012-06-02flac16.md5',
        'ce5725decb7633fbb666d8bd457c2a60 *Guster2003-07-02d1t007.shn'
      ]);
    });

    it('keeps commas and semicolons inside a line', () => {
      const listField = new LineListField('a, b; c\nd, e');

      expect(listField.values).to.deep.equal(['a, b; c', 'd, e']);
    });

    it('handles a single line', () => {
      const listField = new LineListField('only one');

      expect(listField.value).to.equal('only one');
      expect(listField.values).to.deep.equal(['only one']);
    });
  });
});
