import { expect } from '@open-wc/testing';

import { Metadata } from '../../src/models/metadata';

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
});
