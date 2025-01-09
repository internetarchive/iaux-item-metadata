import { expect } from '@open-wc/testing';
import { ByteField } from '../../../../src/models/metadata-fields/field-types/byte';

describe('ByteField Field', () => {
  it('can parse a byte from a string', () => {
    const field = new ByteField('123');

    expect(field.value).to.be.equal(123);
    expect(field.values).to.deep.equal([123]);
    expect(field.rawValue).to.equal('123');
  });

  it('can parse a byte from a number', () => {
    const field = new ByteField(123);

    expect(field.value).to.be.equal(123);
    expect(field.values).to.deep.equal([123]);
    expect(field.rawValue).to.equal(123);
  });
});
