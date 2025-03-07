// top level models
export { Metadata } from './src/models/metadata';

// metadata field types
export { BooleanField } from './src/models/metadata-fields/field-types/boolean';
export { ByteField } from './src/models/metadata-fields/field-types/byte';
export { DateField } from './src/models/metadata-fields/field-types/date';
export { DurationField } from './src/models/metadata-fields/field-types/duration';
export {
  ListField,
  StringListField,
  NumberListField,
} from './src/models/metadata-fields/field-types/list';
export { MediaTypeField } from './src/models/metadata-fields/field-types/mediatype';
export { NumberField } from './src/models/metadata-fields/field-types/number';
export { PageProgressionField } from './src/models/metadata-fields/field-types/page-progression';
export { StringField } from './src/models/metadata-fields/field-types/string';

// base metadata field models
export {
  MetadataFieldInterface,
  MetadataRawValue,
  MetadataField,
} from './src/models/metadata-fields/metadata-field';
