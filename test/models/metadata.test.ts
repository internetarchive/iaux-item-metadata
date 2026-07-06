import { describe, it, expect } from 'vitest';

import { Metadata } from '../../src/models/metadata';

describe('Metadata', () => {
  it('properly instantiates metadata with no data', async () => {
    const metadata = new Metadata();
    expect(metadata.identifier).to.be.undefined;
    expect(metadata.collection).to.be.undefined;
  });

  it('properly instantiates metadata with identifier', async () => {
    const json = { identifier: 'foo', collection: 'bar' };
    const metadata = new Metadata(json);
    expect(metadata.identifier).to.equal('foo');
  });

  it('properly instantiates metadata with addeddate', async () => {
    const json = { identifier: 'foo', addeddate: '2021-05-20T13:37:15Z' };
    const metadata = new Metadata(json);

    const expected = new Date(Date.UTC(2021, 4, 20, 13, 37, 15));

    expect(metadata.addeddate?.value?.getTime()).to.equal(expected.getTime());
  });

  it('properly instantiates metadata with audio_codec', async () => {
    const json = { identifier: 'foo', audio_codec: 'boop' };
    const metadata = new Metadata(json);
    expect(metadata.audio_codec?.value).to.equal('boop');
  });

  it('properly instantiates metadata with audio_sample_rate', async () => {
    const json = { identifier: 'foo', audio_sample_rate: '123' };
    const metadata = new Metadata(json);
    expect(metadata.audio_sample_rate?.value).to.equal(123);
  });

  it('properly instantiates metadata with external-identifier', async () => {
    const json = { identifier: 'foo', 'external-identifier': ['abc', '123'] };
    const metadata = new Metadata(json);
    expect(metadata.external_identifier?.values).to.deep.equal(['abc', '123']);
  });

  it('properly instantiates metadata with reviews-allowed', async () => {
    const json = { identifier: 'foo', 'reviews-allowed': 'frozen' };
    const metadata = new Metadata(json);
    expect(metadata.reviews_allowed?.value).to.equal('frozen');
  });

  it('accepts all valid reviews-allowed values', async () => {
    for (const value of ['true', 'none', 'frozen']) {
      const metadata = new Metadata({
        identifier: 'foo',
        'reviews-allowed': value
      });
      expect(metadata.reviews_allowed?.value).to.equal(value);
    }
  });

  it('rejects an invalid reviews-allowed value', async () => {
    const json = { identifier: 'foo', 'reviews-allowed': 'maybe' };
    const metadata = new Metadata(json);
    expect(metadata.reviews_allowed?.value).to.be.undefined;
    // the raw value is still preserved for inspection
    expect(metadata.reviews_allowed?.rawValue).to.equal('maybe');
  });

  it('properly instantiates metadata with mediatype', async () => {
    const json = { identifier: 'foo', mediatype: 'texts' };
    const metadata = new Metadata(json);
    expect(metadata.mediatype?.value).to.equal('texts');
  });

  it('rejects an invalid mediatype value', async () => {
    const json = { identifier: 'foo', mediatype: 'blah' };
    const metadata = new Metadata(json);
    expect(metadata.mediatype?.value).to.be.undefined;
    // the raw value is still preserved for inspection
    expect(metadata.mediatype?.rawValue).to.equal('blah');
  });

  it('properly instantiates metadata with page_progression', async () => {
    const json = { identifier: 'foo', page_progression: 'rl' };
    const metadata = new Metadata(json);
    expect(metadata.page_progression?.value).to.equal('rl');
  });

  it('rejects an invalid page_progression value', async () => {
    const json = { identifier: 'foo', page_progression: 'blah' };
    const metadata = new Metadata(json);
    expect(metadata.page_progression?.value).to.be.undefined;
    // the raw value is still preserved for inspection
    expect(metadata.page_progression?.rawValue).to.equal('blah');
  });

  it('returns undefined for fields that have not been provided', async () => {
    const json = { identifier: 'foo', collection: ['abc', '123'] };
    const metadata = new Metadata(json);
    expect(metadata.runtime?.value).to.be.undefined;
  });

  it('accepts fields that have not been modeled', async () => {
    const json = { identifier: 'foo', foo: ['abc', '123'] };
    const metadata = new Metadata(json);
    // foo hasn't been added to the Metadata class,
    // but can be accessed via the rawMetadata property
    expect(metadata.rawMetadata.foo).to.be.deep.equal(['abc', '123']);
  });

  it('models the year as a NumberField, string value', async () => {
    const json = { identifier: 'foo', year: '1982' };
    const metadata = new Metadata(json);
    expect(metadata.year?.value).to.equal(1982);
  });

  it('models the year as a NumberField, number value', async () => {
    const json = { identifier: 'foo', year: 1982 };
    const metadata = new Metadata(json);
    expect(metadata.year?.value).to.equal(1982);
  });

  it('properly handles falsy number values', async () => {
    const json = {
      identifier: 'foo',
      year: 0,
      duration: 0,
      collection_size: 0
    };
    const metadata = new Metadata(json);
    expect(metadata.year).to.not.be.undefined;
    expect(metadata.year?.value).to.equal(0);
    expect(metadata.duration).to.not.be.undefined;
    expect(metadata.duration?.value).to.equal(0);
    expect(metadata.collection_size).to.not.be.undefined;
    expect(metadata.collection_size?.value).to.equal(0);
  });

  it('properly handles falsy boolean values', async () => {
    const json = { identifier: 'foo', noindex: false };
    const metadata = new Metadata(json);
    expect(metadata.noindex).to.not.be.undefined;
    expect(metadata.noindex?.value).to.be.false;
  });

  it('properly handles falsy string values', async () => {
    const json = { identifier: 'foo', description: '' };
    const metadata = new Metadata(json);
    expect(metadata.description).to.not.be.undefined;
    expect(metadata.description?.value).to.equal('');
  });
});
