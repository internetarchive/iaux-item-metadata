import { expect } from '@open-wc/testing';

import { Review } from '../../src/models/review';

describe('Review', () => {
  it('can be instantiated with a title', async () => {
    const review = new Review({
      reviewtitle: 'It was awesome!',
    });
    expect(review.reviewtitle).to.equal('It was awesome!');
  });

  it('stars get converted to a number', async () => {
    const review = new Review({
      stars: '5',
    });
    expect(review.stars).to.equal(5);
  });

  it('reviewdate get converted to a date', async () => {
    const review = new Review({
      reviewdate: '2014-05-09 09:47:15',
    });

    const expected = new Date();
    expected.setHours(9);
    expected.setMinutes(47);
    expected.setSeconds(15);
    expected.setMilliseconds(0);
    expected.setMonth(4);
    expected.setDate(9);
    expected.setFullYear(2014);

    expect(review.reviewdate?.getTime()).to.equal(expected.getTime());
  });
});
