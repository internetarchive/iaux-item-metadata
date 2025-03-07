import { expect } from '@open-wc/testing';

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

    const expected = new Date();
    expected.setHours(13);
    expected.setMinutes(37);
    expected.setSeconds(15);
    expected.setMilliseconds(0);
    expected.setMonth(4);
    expected.setDate(20);
    expected.setFullYear(2021);

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
      collection_size: 0,
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
