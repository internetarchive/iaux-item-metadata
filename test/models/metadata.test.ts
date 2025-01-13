import { expect } from '@open-wc/testing';

import { Metadata } from '../../src/models/metadata';
import { DateField } from '../../src/models/metadata-fields/field-types/date';
import { DateParser } from '@internetarchive/field-parsers';

// Grab the names of all the getter fields on Metadata objects
// (with the exception of `identifier`, which is just a raw string rather
// than a field-type like the others).
const fieldNames: (keyof Metadata)[] = (
  Object.keys(
    Object.getOwnPropertyDescriptors(Metadata.prototype),
  ) as (keyof Metadata)[]
).filter(field => !['constructor', 'identifier'].includes(field));

describe('Metadata', () => {
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

  it('handles missing data gracefully', () => {
    const metadata = new Metadata({});
    for (const key of fieldNames) {
      expect(metadata[key]).to.be.undefined;
    }
  });

  it('constructs metadata with partial fields', async () => {
    const json = {
      identifier: 'foo',
      title: 'foo-title',
      description: 'foo-description',
      subject: ['foo-subject1', 'foo-subject2'],
      creator: ['foo-creator'],
      collection: ['foo-collection'],
      date: '2011-07-20T00:00:00Z',
      mediatype: 'movies',
      item_size: 123456,
      files_count: 5,
      downloads: 123,
      week: 2,
      month: 15,
    };

    const metadata = new Metadata(json);
    expect(metadata.rawMetadata).to.deep.equal(json);
    expect(metadata.identifier).to.equal(json.identifier);

    // Ensure all existing fields are present
    for (const key of Object.keys(json)) {
      if (key === 'identifier') continue;
      const fieldName = key as Exclude<keyof typeof json, 'identifier'>;

      if (Array.isArray(json[fieldName])) {
        expect(metadata[fieldName]?.values).to.deep.equal(json[fieldName]);
      } else if (metadata[fieldName] instanceof DateField) {
        expect(metadata[fieldName]?.value).to.deep.equal(
          DateParser.shared.parseValue(json[fieldName].toString()),
        );
      } else {
        expect(metadata[fieldName]?.value).to.equal(json[fieldName]);
      }
    }

    // Other fields should all be undefined
    expect(metadata.addeddate?.value).to.be.undefined;
    expect(metadata.avg_rating?.value).to.be.undefined;
    expect(metadata.collection_size?.value).to.be.undefined;
    expect(metadata.issue?.value).to.be.undefined;
    expect(metadata.item_count?.value).to.be.undefined;
    expect(metadata.language?.value).to.be.undefined;
    expect(metadata.noindex?.value).to.be.undefined;
    expect(metadata.num_favorites?.value).to.be.undefined;
    expect(metadata.num_reviews?.value).to.be.undefined;
    expect(metadata.publicdate?.value).to.be.undefined;
    expect(metadata.reviewdate?.value).to.be.undefined;
    expect(metadata.source?.value).to.be.undefined;
    expect(metadata.type?.value).to.be.undefined;
    expect(metadata.volume?.value).to.be.undefined;
  });
});
