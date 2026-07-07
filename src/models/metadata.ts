import { Memoize } from 'typescript-memoize';
import { BooleanField } from './metadata-fields/field-types/boolean';
import { DateField } from './metadata-fields/field-types/date';
import { DurationField } from './metadata-fields/field-types/duration';
import { NumberField } from './metadata-fields/field-types/number';
import { StringField } from './metadata-fields/field-types/string';
import { PageProgressionField } from './metadata-fields/field-types/page-progression';
import { ByteField } from './metadata-fields/field-types/byte';
import { MediaTypeField } from './metadata-fields/field-types/mediatype';
import { StringListField } from './metadata-fields/field-types/list';
import { EnumField, EnumParser } from './metadata-fields/field-types/enum';
import { MetadataRawValue } from './metadata-fields/metadata-field';
import { mapField } from './map-field';

/** Allowed values for the `reviews-allowed` item metadata field. */
export type ReviewsAllowed = 'true' | 'none' | 'frozen';
const reviewsAllowedParser = new EnumParser<ReviewsAllowed>([
  'true',
  'none',
  'frozen'
]);

/**
 * Metadata is an expansive model that describes an Item.
 *
 * The fields in here get casted to their respective field types. See `metadata-fields/field-type`.
 *
 * Add additional fields as needed.
 *
 * @export
 * @class Metadata
 */
export class Metadata {
  /**
   * This is the raw metadata reponse; useful for inspecting the raw data returned from the server.
   *
   * @type { string: any }
   * @memberof Metadata
   */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  readonly rawMetadata: Readonly<Record<string, any>>;

  /**
   * The item identifier.
   *
   * _Note_ This is a plain string instead of a `MetadataField` since it
   * will only ever be a string and not an array.
   *
   * @type {string}
   * @memberof Metadata
   */
  get identifier(): string | undefined {
    return this.rawMetadata.identifier;
  }

  @Memoize() get addeddate(): DateField | undefined {
    return this.field(DateField, 'addeddate');
  }

  @Memoize() get audio_codec(): StringField | undefined {
    return this.field(StringField, 'audio_codec');
  }

  @Memoize() get audio_sample_rate(): NumberField | undefined {
    return this.field(NumberField, 'audio_sample_rate');
  }

  @Memoize() get avg_rating(): NumberField | undefined {
    return this.field(NumberField, 'avg_rating');
  }

  /**
   * All of the collections that an Item is in, including
   * all of the side-loaded collections from the ListAPI
   * and SimpleListsAPI like `fav-*`
   *
   * @type {StringField}
   * @memberof Metadata
   */
  @Memoize() get collection(): StringField | undefined {
    return this.field(StringField, 'collection');
  }

  /**
   * The "natural" collections for an item before augmentation
   * by side-loaded collections like ListsAPI and SimpleLists
   *
   * The `collection` field above includes things like all of
   * the `fav-*` collections, whereas this is only the collections
   * that have been directly added in the hierarchy.
   *
   * @type {StringField}
   * @memberof Metadata
   */
  @Memoize() get collections_raw(): StringField | undefined {
    return this.field(StringField, 'collections_raw');
  }

  /**
   * The size of a collection in bytes
   *
   * @type {ByteField}
   * @memberof Metadata
   */
  @Memoize() get collection_size(): ByteField | undefined {
    return this.field(ByteField, 'collection_size');
  }

  @Memoize() get contact(): StringField | undefined {
    return this.field(StringField, 'contact');
  }

  @Memoize() get contributor(): StringField | undefined {
    return this.field(StringField, 'contributor');
  }

  @Memoize() get coverage(): StringField | undefined {
    return this.field(StringField, 'coverage');
  }

  @Memoize() get creator(): StringField | undefined {
    return this.field(StringField, 'creator');
  }

  @Memoize() get creator_alt_script(): StringField | undefined {
    return this.field(StringField, 'creator-alt-script');
  }

  @Memoize() get credits(): StringField | undefined {
    return this.field(StringField, 'credits');
  }

  @Memoize() get collection_layout(): StringField | undefined {
    return this.field(StringField, 'collection_layout');
  }

  @Memoize() get date(): DateField | undefined {
    return this.field(DateField, 'date');
  }

  @Memoize() get description(): StringField | undefined {
    return this.field(StringField, 'description');
  }

  /**
   * All time download count
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get downloads(): NumberField | undefined {
    return this.field(NumberField, 'downloads');
  }

  /**
   * The item duration in seconds
   *
   * @type {DurationField}
   * @memberof Metadata
   */
  @Memoize() get duration(): DurationField | undefined {
    return this.field(DurationField, 'duration');
  }

  @Memoize() get external_identifier(): StringField | undefined {
    return this.field(StringField, 'external-identifier');
  }

  @Memoize() get external_link(): StringField | undefined {
    return this.field(StringField, 'external-link');
  }

  /**
   * The number of files in an item
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get files_count(): NumberField | undefined {
    return this.field(NumberField, 'files_count');
  }

  @Memoize() get indexdate(): DateField | undefined {
    return this.field(DateField, 'indexdate');
  }

  @Memoize() get isbn(): StringField | undefined {
    return this.field(StringField, 'isbn');
  }

  @Memoize() get issue(): StringField | undefined {
    return this.field(StringField, 'issue');
  }

  /**
   * For collections, the number of items in the collection
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get item_count(): NumberField | undefined {
    return this.field(NumberField, 'item_count');
  }

  /**
   * The size of the item in bytes
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get item_size(): ByteField | undefined {
    return this.field(ByteField, 'item_size');
  }

  @Memoize() get language(): StringField | undefined {
    return this.field(StringField, 'language');
  }

  @Memoize() get length(): DurationField | undefined {
    return this.field(DurationField, 'length');
  }

  @Memoize() get licenseurl(): StringField | undefined {
    return this.field(StringField, 'licenseurl');
  }

  @Memoize() get lineage(): StringField | undefined {
    return this.field(StringField, 'lineage');
  }

  /**
   * The number of downloads in the last month
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get month(): NumberField | undefined {
    return this.field(NumberField, 'month');
  }

  @Memoize() get mediatype(): MediaTypeField | undefined {
    return this.field(MediaTypeField, 'mediatype');
  }

  @Memoize() get noindex(): BooleanField | undefined {
    return this.field(BooleanField, 'noindex');
  }

  @Memoize() get notes(): StringField | undefined {
    return this.field(StringField, 'notes');
  }

  /**
   * The number of users that have favorited the item
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get num_favorites(): NumberField | undefined {
    return this.field(NumberField, 'num_favorites');
  }

  @Memoize() get num_reviews(): NumberField | undefined {
    return this.field(NumberField, 'num_reviews');
  }

  @Memoize() get openlibrary_edition(): StringField | undefined {
    return this.field(StringField, 'openlibrary_edition');
  }

  @Memoize() get openlibrary_work(): StringField | undefined {
    return this.field(StringField, 'openlibrary_work');
  }

  @Memoize() get page_progression(): PageProgressionField | undefined {
    return this.field(PageProgressionField, 'page_progression');
  }

  @Memoize() get paginated(): BooleanField | undefined {
    return this.field(BooleanField, 'paginated');
  }

  @Memoize() get partner(): StringField | undefined {
    return this.field(StringField, 'partner');
  }

  @Memoize() get post_text(): StringField | undefined {
    return this.field(StringField, 'post_text');
  }

  @Memoize() get ppi(): NumberField | undefined {
    return this.field(NumberField, 'ppi');
  }

  @Memoize() get publicdate(): DateField | undefined {
    return this.field(DateField, 'publicdate');
  }

  @Memoize() get publisher(): StringField | undefined {
    return this.field(StringField, 'publisher');
  }

  @Memoize() get reviewdate(): DateField | undefined {
    return this.field(DateField, 'reviewdate');
  }

  /**
   * Whether reviews may be added to this item. One of `true` (enabled),
   * `none` (disabled), or `frozen` (existing reviews shown, no new ones).
   * Absent for most items, which means reviews are enabled.
   */
  @Memoize() get reviews_allowed(): EnumField<ReviewsAllowed> | undefined {
    return mapField(
      this.rawMetadata,
      raw => new EnumField<ReviewsAllowed>(raw, reviewsAllowedParser),
      'reviews-allowed'
    );
  }

  @Memoize() get rights(): StringField | undefined {
    return this.field(StringField, 'rights');
  }

  @Memoize() get rights_holder(): StringField | undefined {
    return this.field(StringField, 'rights-holder', 'rights_holder');
  }

  @Memoize() get runtime(): DurationField | undefined {
    return this.field(DurationField, 'runtime');
  }

  @Memoize() get scanner(): StringField | undefined {
    return this.field(StringField, 'scanner');
  }

  @Memoize() get segments(): StringField | undefined {
    return this.field(StringField, 'segments');
  }

  @Memoize() get shotlist(): StringField | undefined {
    return this.field(StringField, 'shotlist');
  }

  @Memoize() get source(): StringField | undefined {
    return this.field(StringField, 'source');
  }

  @Memoize() get sponsor(): StringField | undefined {
    return this.field(StringField, 'sponsor');
  }

  @Memoize() get start_localtime(): DateField | undefined {
    return this.field(DateField, 'start_localtime');
  }

  @Memoize() get start_time(): DateField | undefined {
    return this.field(DateField, 'start_time');
  }

  @Memoize() get stop_time(): DateField | undefined {
    return this.field(DateField, 'stop_time');
  }

  @Memoize() get subject(): StringListField | undefined {
    return this.field(StringListField, 'subject');
  }

  @Memoize() get taper(): StringField | undefined {
    return this.field(StringField, 'taper');
  }

  @Memoize() get title(): StringField | undefined {
    return this.field(StringField, 'title');
  }

  @Memoize() get title_alt_script(): StringField | undefined {
    return this.field(StringField, 'title-alt-script');
  }

  @Memoize() get transferer(): StringField | undefined {
    return this.field(StringField, 'transferer');
  }

  @Memoize() get track(): NumberField | undefined {
    return this.field(NumberField, 'track');
  }

  @Memoize() get type(): StringField | undefined {
    return this.field(StringField, 'type');
  }

  @Memoize() get uploader(): StringField | undefined {
    return this.field(StringField, 'uploader');
  }

  @Memoize() get utc_offset(): NumberField | undefined {
    return this.field(NumberField, 'utc_offset');
  }

  @Memoize() get venue(): StringField | undefined {
    return this.field(StringField, 'venue');
  }

  @Memoize() get volume(): StringField | undefined {
    return this.field(StringField, 'volume');
  }

  /**
   * The number of downloads in the last week
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get week(): NumberField | undefined {
    return this.field(NumberField, 'week');
  }

  @Memoize() get year(): NumberField | undefined {
    return this.field(NumberField, 'year');
  }

  /**
   * Builds a field from the first of `keys` whose raw value is present,
   * or `undefined` if none are set. Later keys act as fallbacks, for fields
   * that arrive under more than one name.
   *
   * For fields whose class needs more than the raw value (e.g. an `EnumField`
   * needs its parser), call {@link mapField} directly with a factory.
   *
   * @param Ctor A field class taking a single raw value (`DateField`, `StringField`, etc.)
   * @param keys The raw metadata key(s) to read, in priority order
   */
  private field<F>(
    Ctor: new (raw: MetadataRawValue) => F,
    ...keys: string[]
  ): F | undefined {
    return mapField(this.rawMetadata, raw => new Ctor(raw), ...keys);
  }

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  constructor(json: Record<string, any> = {}) {
    this.rawMetadata = json;
  }
}
