import { expect } from '@open-wc/testing';
import { MediaTypeField } from '../../../../src/models/metadata-fields/field-types/mediatype';

describe('MediaTypeField Field', () => {
  it('can parse a mediatype', () => {
    const field = new MediaTypeField('movies');

    expect(field.value).to.be.equal('movies');
    expect(field.values).to.deep.equal(['movies']);
    expect(field.rawValue).to.equal('movies');
  });

  it('can parse a mediatype', () => {
    const field = new MediaTypeField('blah');

    expect(field.value).to.be.equal('blah');
    expect(field.values).to.deep.equal(['blah']);
    expect(field.rawValue).to.equal('blah');
  });
});
