import {expect} from 'chai';
import mask from '../';

describe('mask', function () {
  it('should mask mongo query with all types', function () {
    expect(mask({foo: 'bar-baz'})).to.deep.equal({foo: '###'});
    expect(mask({foo: 123456789})).to.deep.equal({foo: 12345});
  });

  it('should mask queries with operators', function () {
    expect(mask({foo: {$gt: 1}})).to.deep.equal({foo: {$gt: 12345}});
  });
});
