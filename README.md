![Build Status](https://github.com/internetarchive/iaux-item-metadata/actions/workflows/ci.yml/badge.svg) [![codecov](https://codecov.io/gh/internetarchive/iaux-item-metadata/branch/main/graph/badge.svg?token=ZOYRJ2BV9W)](https://codecov.io/gh/internetarchive/iaux-item-metadata)

# Internet Archive Item Metadata

These are the data models for Internet Archive Metadata. The Metadata models handle automatic conversions between the raw values to native Typescript data types.

When receiving JSON responses from the Internet Archive's metadata service, the values can be strings, numbers, or arrays. These take all of those values and normalizes them.

All fields, except for `identifier`, have 3 properties:
- `.value` to get the first (or only) value in the native type
- `.values` to get all of the values if it's an array in their native types
- `.rawValue` to get the original value from the response

## Demo

[Live demo](https://internetarchive.github.io/iaux-item-metadata/main/) — load any archive.org item by identifier (or paste raw metadata JSON) and inspect the parsed fields.

## Example

```ts
const metadata = new Metadata({
    identifier: 'foo',
    addeddate: '2021-01-01',
    collection: ['foo', 'bar'],
    description: 'A foo that is also a bar',
    duration: '1:23:45',
    mediatype: 'audio',
})

console.log('Raw metadata:', JSON.stringify(metadata.rawMetadata));
// outputs the raw JSON response,
// { identifier: 'foo', addeddate: '2021-01-01', collection: ['foo', 'bar'] .... }

console.log('Identifier', metadata.identifier);
// > 'foo'

console.log('Addeddate', metadata.addeddate.value);
// > Date object (Fri Jan 01 2021 00:00:00 GMT-0800 (Pacific Standard Time))

// get first value of an array of values
console.log('Collection', metadata.collection.value);
// > 'foo'

// get all values of an array
console.log('Collection', metadata.collection.values);
// > ['foo', 'bar']

// duration is in seconds and handles conversions from hh:mm:ss if needed
console.log('Duration', metadata.duration.value);
// > 5025
```
