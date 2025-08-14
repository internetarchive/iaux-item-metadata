import { expect } from '@open-wc/testing';

import { Metadata } from '../../src/models/metadata';
import { StringField } from '../../src/models/metadata-fields/field-types/string';
import { NumberField } from '../../src/models/metadata-fields/field-types/number';

describe('Metadata', () => {
  describe('Metadata fields', () => {
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
      expect(metadata.external_identifier?.values).to.deep.equal([
        'abc',
        '123',
      ]);
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

  describe('valueFor', () => {
    it('valueFor returns parsed MetadataField object when available', async () => {
      const json = { identifier: 'foo', downloads: '34' };
      const metadata = new Metadata(json);
      const value = metadata.valueFor('downloads');
      expect(value).to.be.exist;
      expect(value).to.be.instanceOf(NumberField);
      expect(value?.value).to.equal(34);
    });

    it('valueFor returns parsed MetadataField object array when available', async () => {
      const json = { identifier: 'foo', downloads: ['34', '27', '17'] };
      const metadata = new Metadata(json);
      const value = metadata.valueFor('downloads');
      expect(value).to.be.exist;
      expect(value?.values).to.deep.equal([34, 27, 17]);
    });

    it('valueFor returns StringField when pulled from rawMetadata', async () => {
      const json = { identifier: 'foo', beepers: 'beep boop bop' };
      const metadata = new Metadata(json);

      const value = metadata.valueFor('beepers');
      expect(value).to.be.exist;
      expect(value).to.be.instanceOf(StringField);
      expect(value?.value).to.equal('beep boop bop');
    });

    it('valueFor returns array StringField when parsed unavailable', async () => {
      const json = { identifier: 'foo', beepers: ['beep', 'boop', 'bop'] };
      const metadata = new Metadata(json);
      const value = metadata.valueFor('beepers');
      expect(value).to.be.exist;
      expect(value?.values).to.deep.equal(['beep', 'boop', 'bop']);
      expect(value?.value).to.equal('beep');
    });

    it('valueFor returns undefined if field not available', async () => {
      const json = { identifier: 'foo', beepers: ['beep', 'boop', 'bop'] };
      const metadata = new Metadata(json);
      expect(metadata.valueFor('description')).to.be.undefined;
    });

    it('valueFor checks both dashed and snake cased fields', async () => {
      const json = { identifier: 'foo', 'creator-alt-script': 'flibbity flop' };
      const metadata = new Metadata(json);
      const snakeValue = metadata.valueFor('creator_alt_script');
      const dashValue = metadata.valueFor('creator-alt-script');
      expect(snakeValue).to.exist;
      expect(dashValue).to.exist;
      expect(snakeValue?.value).to.equal('flibbity flop');
      expect(dashValue?.value).to.equal('flibbity flop');
    });

    it('valueFor returns undefined if both dashed and snake cased not found', async () => {
      const json = { identifier: 'foo' };
      const metadata = new Metadata(json);
      const snakeValue = metadata.valueFor('creator_alt_script');
      const dashValue = metadata.valueFor('creator-alt-script');
      expect(snakeValue).to.be.undefined;
      expect(dashValue).to.be.undefined;
    });

    it('valueFor returns StringField for falsey value', async () => {
      const json = { identifier: 'foo', beepboop: 0 };
      const metadata = new Metadata(json);
      const value = metadata.valueFor('beepboop');
      expect(value).to.exist;
      expect(value?.value).to.equal('0');
    });
  });

  describe('allMetadataKeys', () => {
    it('returns all of the raw metadata keys', async () => {
      const json = {
        identifier: 'foo',
        downloads: '34',
        'creator-alt-script': 'flibbity flop',
      };
      const metadata = new Metadata(json);
      const keys = metadata.allMetadataKeys;
      expect(keys).to.include('downloads');
      expect(keys).to.include('identifier');
      expect(keys).to.include('creator-alt-script');
      expect(keys).to.not.include('creator_alt_script');
    });
  });

  describe('allMetadata', () => {
    it('returns all metadata keys and values', async () => {
      const json = { identifier: 'foo', downloads: '34' };
      const metadata = new Metadata(json);
      const allMetadata = metadata.allMetadata;
      expect(allMetadata).to.include.keys('downloads', 'identifier');
      expect(allMetadata.downloads).to.be.instanceOf(NumberField);
      expect(allMetadata.downloads.value).to.equal(34);
      expect(allMetadata.identifier).to.equal('foo');
    });
  });
});
