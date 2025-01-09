import { expect } from '@open-wc/testing';

import { Metadata } from '../../src/models/metadata';

describe('Metadata', () => {
  it('properly instantiates metadata with identifier', async () => {
    const json = { identifier: 'foo', collection: 'bar' };
    const metadata = new Metadata(json);
    expect(metadata.identifier).to.equal('foo');
  });

  it('properly instantiates metadata with addeddate', async () => {
    const json = { identifier: 'foo', addeddate: '2021-01-01T00:00:00Z' };
    const metadata = new Metadata(json);
    expect(metadata.addeddate?.value?.getTime()).to.equal(
      new Date('2021-01-01T08:00:00Z').getTime(),
    );
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
});
