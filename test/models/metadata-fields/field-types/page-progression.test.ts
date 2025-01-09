import { expect } from '@open-wc/testing';
import { PageProgressionField } from '../../../../src/models/metadata-fields/field-types/page-progression';

describe('PageProgressionField', () => {
  it('can parse a page progression', () => {
    const field = new PageProgressionField('rl');

    expect(field.value).to.be.equal('rl');
    expect(field.values).to.deep.equal(['rl']);
    expect(field.rawValue).to.equal('rl');
  });

  it('accepts any value', () => {
    const field = new PageProgressionField('blah');

    expect(field.value).to.be.equal('blah');
    expect(field.values).to.deep.equal(['blah']);
    expect(field.rawValue).to.equal('blah');
  });
});
