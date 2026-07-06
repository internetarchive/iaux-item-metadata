import { Memoize } from 'typescript-memoize';
import { BooleanField } from './metadata-fields/field-types/boolean';
import { DateField } from './metadata-fields/field-types/date';
import { DurationField } from './metadata-fields/field-types/duration';
import { NumberField } from './metadata-fields/field-types/number';
import { StringField } from './metadata-fields/field-types/string';
import { PageProgressionField } from './metadata-fields/field-types/page-progression';
import { ByteField } from './metadata-fields/field-types/byte';
import { MediaTypeField } from './metadata-fields/field-types/mediatype';
import {
  StringListField,
  NumberListField
} from './metadata-fields/field-types/list';
import { EnumField, EnumParser } from './metadata-fields/field-types/enum';
import { AspectRatioField } from './metadata-fields/field-types/aspect-ratio';
import { CompactDateField } from './metadata-fields/field-types/compact-date';
import { UtcOffsetField } from './metadata-fields/field-types/utc-offset';
import { TunerField } from './metadata-fields/field-types/tuner';

/** Allowed values for the `reviews-allowed` item metadata field. */
export type ReviewsAllowed = 'true' | 'none' | 'frozen';
const reviewsAllowedParser = new EnumParser<ReviewsAllowed>([
  'true',
  'none',
  'frozen'
]);

/** Allowed values for the `sound` item metadata field. */
export type Sound = 'sound' | 'silent';
const soundParser = new EnumParser<Sound>(['sound', 'silent']);

/** Allowed values for the `color` item metadata field. */
export type Color = 'color' | 'b&w';
const colorParser = new EnumParser<Color>(['color', 'b&w']);

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

  @Memoize() get access_restricted_item(): BooleanField | undefined {
    return this.rawMetadata['access-restricted-item'] != null
      ? new BooleanField(this.rawMetadata['access-restricted-item'])
      : undefined;
  }

  @Memoize() get addeddate(): DateField | undefined {
    return this.rawMetadata.addeddate != null
      ? new DateField(this.rawMetadata.addeddate)
      : undefined;
  }

  /**
   * The display aspect ratio, e.g. `"4:3"`, parsed into width, height, and a
   * decimal ratio.
   */
  @Memoize() get aspect_ratio(): AspectRatioField | undefined {
    return this.rawMetadata.aspect_ratio != null
      ? new AspectRatioField(this.rawMetadata.aspect_ratio)
      : undefined;
  }

  @Memoize() get audio_codec(): StringField | undefined {
    return this.rawMetadata.audio_codec != null
      ? new StringField(this.rawMetadata.audio_codec)
      : undefined;
  }

  @Memoize() get audio_sample_rate(): NumberField | undefined {
    return this.rawMetadata.audio_sample_rate != null
      ? new NumberField(this.rawMetadata.audio_sample_rate)
      : undefined;
  }

  @Memoize() get avg_rating(): NumberField | undefined {
    return this.rawMetadata.avg_rating != null
      ? new NumberField(this.rawMetadata.avg_rating)
      : undefined;
  }

  @Memoize() get backup_location(): StringField | undefined {
    return this.rawMetadata.backup_location != null
      ? new StringField(this.rawMetadata.backup_location)
      : undefined;
  }

  @Memoize() get ccnum(): StringField | undefined {
    return this.rawMetadata.ccnum != null
      ? new StringField(this.rawMetadata.ccnum)
      : undefined;
  }

  /**
   * Whether the broadcast included closed captioning. The raw `"yes"`/`"no"`
   * value is parsed to a boolean.
   */
  @Memoize() get closed_captioning(): BooleanField | undefined {
    return this.rawMetadata.closed_captioning != null
      ? new BooleanField(this.rawMetadata.closed_captioning)
      : undefined;
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
    return this.rawMetadata.collection != null
      ? new StringField(this.rawMetadata.collection)
      : undefined;
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
    return this.rawMetadata.collections_raw != null
      ? new StringField(this.rawMetadata.collections_raw)
      : undefined;
  }

  /**
   * The size of a collection in bytes
   *
   * @type {ByteField}
   * @memberof Metadata
   */
  @Memoize() get collection_size(): ByteField | undefined {
    return this.rawMetadata.collection_size != null
      ? new ByteField(this.rawMetadata.collection_size)
      : undefined;
  }

  @Memoize() get color(): EnumField<Color> | undefined {
    return this.rawMetadata.color != null
      ? new EnumField<Color>(this.rawMetadata.color, colorParser)
      : undefined;
  }

  @Memoize() get contact(): StringField | undefined {
    return this.rawMetadata.contact != null
      ? new StringField(this.rawMetadata.contact)
      : undefined;
  }

  @Memoize() get contributor(): StringField | undefined {
    return this.rawMetadata.contributor != null
      ? new StringField(this.rawMetadata.contributor)
      : undefined;
  }

  @Memoize() get coverage(): StringField | undefined {
    return this.rawMetadata.coverage != null
      ? new StringField(this.rawMetadata.coverage)
      : undefined;
  }

  @Memoize() get creator(): StringField | undefined {
    return this.rawMetadata.creator != null
      ? new StringField(this.rawMetadata.creator)
      : undefined;
  }

  @Memoize() get creator_alt_script(): StringField | undefined {
    return this.rawMetadata['creator-alt-script'] != null
      ? new StringField(this.rawMetadata['creator-alt-script'])
      : undefined;
  }

  @Memoize() get credits(): StringField | undefined {
    return this.rawMetadata.credits != null
      ? new StringField(this.rawMetadata.credits)
      : undefined;
  }

  @Memoize() get collection_layout(): StringField | undefined {
    return this.rawMetadata.collection_layout != null
      ? new StringField(this.rawMetadata.collection_layout)
      : undefined;
  }

  @Memoize() get date(): DateField | undefined {
    return this.rawMetadata.date != null
      ? new DateField(this.rawMetadata.date)
      : undefined;
  }

  @Memoize() get description(): StringField | undefined {
    return this.rawMetadata.description != null
      ? new StringField(this.rawMetadata.description)
      : undefined;
  }

  /**
   * All time download count
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get downloads(): NumberField | undefined {
    return this.rawMetadata.downloads != null
      ? new NumberField(this.rawMetadata.downloads)
      : undefined;
  }

  /**
   * The item duration in seconds
   *
   * @type {DurationField}
   * @memberof Metadata
   */
  @Memoize() get duration(): DurationField | undefined {
    return this.rawMetadata.duration != null
      ? new DurationField(this.rawMetadata.duration)
      : undefined;
  }

  @Memoize() get external_identifier(): StringField | undefined {
    return this.rawMetadata['external-identifier'] != null
      ? new StringField(this.rawMetadata['external-identifier'])
      : undefined;
  }

  @Memoize() get external_link(): StringField | undefined {
    return this.rawMetadata['external-link'] != null
      ? new StringField(this.rawMetadata['external-link'])
      : undefined;
  }

  /**
   * The number of files in an item
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get files_count(): NumberField | undefined {
    return this.rawMetadata.files_count != null
      ? new NumberField(this.rawMetadata.files_count)
      : undefined;
  }

  @Memoize() get frames_per_second(): NumberField | undefined {
    return this.rawMetadata.frames_per_second != null
      ? new NumberField(this.rawMetadata.frames_per_second)
      : undefined;
  }

  @Memoize() get identifier_access(): StringField | undefined {
    return this.rawMetadata['identifier-access'] != null
      ? new StringField(this.rawMetadata['identifier-access'])
      : undefined;
  }

  @Memoize() get imagecount(): NumberField | undefined {
    return this.rawMetadata.imagecount != null
      ? new NumberField(this.rawMetadata.imagecount)
      : undefined;
  }

  @Memoize() get indexdate(): DateField | undefined {
    return this.rawMetadata.indexdate != null
      ? new DateField(this.rawMetadata.indexdate)
      : undefined;
  }

  @Memoize() get isbn(): StringField | undefined {
    return this.rawMetadata.isbn != null
      ? new StringField(this.rawMetadata.isbn)
      : undefined;
  }

  @Memoize() get issue(): StringField | undefined {
    return this.rawMetadata.issue != null
      ? new StringField(this.rawMetadata.issue)
      : undefined;
  }

  /**
   * For collections, the number of items in the collection
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get item_count(): NumberField | undefined {
    return this.rawMetadata.item_count != null
      ? new NumberField(this.rawMetadata.item_count)
      : undefined;
  }

  /**
   * The size of the item in bytes
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get item_size(): ByteField | undefined {
    return this.rawMetadata.item_size != null
      ? new ByteField(this.rawMetadata.item_size)
      : undefined;
  }

  @Memoize() get language(): StringField | undefined {
    return this.rawMetadata.language != null
      ? new StringField(this.rawMetadata.language)
      : undefined;
  }

  @Memoize() get length(): DurationField | undefined {
    return this.rawMetadata.length != null
      ? new DurationField(this.rawMetadata.length)
      : undefined;
  }

  @Memoize() get licenseurl(): StringField | undefined {
    return this.rawMetadata.licenseurl != null
      ? new StringField(this.rawMetadata.licenseurl)
      : undefined;
  }

  @Memoize() get lineage(): StringField | undefined {
    return this.rawMetadata.lineage != null
      ? new StringField(this.rawMetadata.lineage)
      : undefined;
  }

  /**
   * The number of downloads in the last month
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get month(): NumberField | undefined {
    return this.rawMetadata.month != null
      ? new NumberField(this.rawMetadata.month)
      : undefined;
  }

  @Memoize() get mediatype(): MediaTypeField | undefined {
    return this.rawMetadata.mediatype != null
      ? new MediaTypeField(this.rawMetadata.mediatype)
      : undefined;
  }

  @Memoize() get mpeg_program(): NumberField | undefined {
    return this.rawMetadata.mpeg_program != null
      ? new NumberField(this.rawMetadata.mpeg_program)
      : undefined;
  }

  @Memoize() get next_item(): StringField | undefined {
    return this.rawMetadata.next_item != null
      ? new StringField(this.rawMetadata.next_item)
      : undefined;
  }

  @Memoize() get noindex(): BooleanField | undefined {
    return this.rawMetadata.noindex != null
      ? new BooleanField(this.rawMetadata.noindex)
      : undefined;
  }

  @Memoize() get notes(): StringField | undefined {
    return this.rawMetadata.notes != null
      ? new StringField(this.rawMetadata.notes)
      : undefined;
  }

  /**
   * The number of users that have favorited the item
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get num_favorites(): NumberField | undefined {
    return this.rawMetadata.num_favorites != null
      ? new NumberField(this.rawMetadata.num_favorites)
      : undefined;
  }

  @Memoize() get num_reviews(): NumberField | undefined {
    return this.rawMetadata.num_reviews != null
      ? new NumberField(this.rawMetadata.num_reviews)
      : undefined;
  }

  @Memoize() get openlibrary_edition(): StringField | undefined {
    return this.rawMetadata.openlibrary_edition != null
      ? new StringField(this.rawMetadata.openlibrary_edition)
      : undefined;
  }

  @Memoize() get openlibrary_work(): StringField | undefined {
    return this.rawMetadata.openlibrary_work != null
      ? new StringField(this.rawMetadata.openlibrary_work)
      : undefined;
  }

  @Memoize() get page_progression(): PageProgressionField | undefined {
    return this.rawMetadata.page_progression != null
      ? new PageProgressionField(this.rawMetadata.page_progression)
      : undefined;
  }

  @Memoize() get paginated(): BooleanField | undefined {
    return this.rawMetadata.paginated != null
      ? new BooleanField(this.rawMetadata.paginated)
      : undefined;
  }

  @Memoize() get partner(): StringField | undefined {
    return this.rawMetadata.partner != null
      ? new StringField(this.rawMetadata.partner)
      : undefined;
  }

  @Memoize() get post_text(): StringField | undefined {
    return this.rawMetadata.post_text != null
      ? new StringField(this.rawMetadata.post_text)
      : undefined;
  }

  @Memoize() get ppi(): NumberField | undefined {
    return this.rawMetadata.ppi != null
      ? new NumberField(this.rawMetadata.ppi)
      : undefined;
  }

  @Memoize() get previous_item(): StringField | undefined {
    return this.rawMetadata.previous_item != null
      ? new StringField(this.rawMetadata.previous_item)
      : undefined;
  }

  @Memoize() get program(): StringField | undefined {
    return this.rawMetadata.program != null
      ? new StringField(this.rawMetadata.program)
      : undefined;
  }

  @Memoize() get publicdate(): DateField | undefined {
    return this.rawMetadata.publicdate != null
      ? new DateField(this.rawMetadata.publicdate)
      : undefined;
  }

  @Memoize() get publisher(): StringField | undefined {
    return this.rawMetadata.publisher != null
      ? new StringField(this.rawMetadata.publisher)
      : undefined;
  }

  @Memoize() get reviewdate(): DateField | undefined {
    return this.rawMetadata.reviewdate != null
      ? new DateField(this.rawMetadata.reviewdate)
      : undefined;
  }

  /**
   * Whether reviews may be added to this item. One of `true` (enabled),
   * `none` (disabled), or `frozen` (existing reviews shown, no new ones).
   * Absent for most items, which means reviews are enabled.
   */
  @Memoize() get reviews_allowed(): EnumField<ReviewsAllowed> | undefined {
    return this.rawMetadata['reviews-allowed'] != null
      ? new EnumField<ReviewsAllowed>(
          this.rawMetadata['reviews-allowed'],
          reviewsAllowedParser
        )
      : undefined;
  }

  @Memoize() get rights(): StringField | undefined {
    return this.rawMetadata.rights != null
      ? new StringField(this.rawMetadata.rights)
      : undefined;
  }

  @Memoize() get rights_holder(): StringField | undefined {
    const value =
      this.rawMetadata['rights-holder'] ?? this.rawMetadata.rights_holder;

    return value != null ? new StringField(value) : undefined;
  }

  @Memoize() get runtime(): DurationField | undefined {
    return this.rawMetadata.runtime != null
      ? new DurationField(this.rawMetadata.runtime)
      : undefined;
  }

  /**
   * The scan/capture date. Parses compact `YYYYMMDD[HHMMSS]` timestamps in
   * addition to standard date strings.
   */
  @Memoize() get scandate(): CompactDateField | undefined {
    return this.rawMetadata.scandate != null
      ? new CompactDateField(this.rawMetadata.scandate)
      : undefined;
  }

  @Memoize() get scanner(): StringField | undefined {
    return this.rawMetadata.scanner != null
      ? new StringField(this.rawMetadata.scanner)
      : undefined;
  }

  @Memoize() get scanningcenter(): StringField | undefined {
    return this.rawMetadata.scanningcenter != null
      ? new StringField(this.rawMetadata.scanningcenter)
      : undefined;
  }

  @Memoize() get segments(): StringField | undefined {
    return this.rawMetadata.segments != null
      ? new StringField(this.rawMetadata.segments)
      : undefined;
  }

  @Memoize() get shotlist(): StringField | undefined {
    return this.rawMetadata.shotlist != null
      ? new StringField(this.rawMetadata.shotlist)
      : undefined;
  }

  @Memoize() get sound(): EnumField<Sound> | undefined {
    return this.rawMetadata.sound != null
      ? new EnumField<Sound>(this.rawMetadata.sound, soundParser)
      : undefined;
  }

  @Memoize() get source(): StringField | undefined {
    return this.rawMetadata.source != null
      ? new StringField(this.rawMetadata.source)
      : undefined;
  }

  @Memoize() get source_pixel_height(): NumberField | undefined {
    return this.rawMetadata.source_pixel_height != null
      ? new NumberField(this.rawMetadata.source_pixel_height)
      : undefined;
  }

  @Memoize() get source_pixel_width(): NumberField | undefined {
    return this.rawMetadata.source_pixel_width != null
      ? new NumberField(this.rawMetadata.source_pixel_width)
      : undefined;
  }

  @Memoize() get sponsor(): StringField | undefined {
    return this.rawMetadata.sponsor != null
      ? new StringField(this.rawMetadata.sponsor)
      : undefined;
  }

  @Memoize() get start_localtime(): DateField | undefined {
    return this.rawMetadata.start_localtime != null
      ? new DateField(this.rawMetadata.start_localtime)
      : undefined;
  }

  @Memoize() get start_time(): DateField | undefined {
    return this.rawMetadata.start_time != null
      ? new DateField(this.rawMetadata.start_time)
      : undefined;
  }

  @Memoize() get station_name(): StringField | undefined {
    return this.rawMetadata.station_name != null
      ? new StringField(this.rawMetadata.station_name)
      : undefined;
  }

  @Memoize() get stop_time(): DateField | undefined {
    return this.rawMetadata.stop_time != null
      ? new DateField(this.rawMetadata.stop_time)
      : undefined;
  }

  @Memoize() get subject(): StringListField | undefined {
    return this.rawMetadata.subject != null
      ? new StringListField(this.rawMetadata.subject)
      : undefined;
  }

  @Memoize() get taper(): StringField | undefined {
    return this.rawMetadata.taper != null
      ? new StringField(this.rawMetadata.taper)
      : undefined;
  }

  @Memoize() get thumbs(): NumberListField | undefined {
    return this.rawMetadata.thumbs != null
      ? new NumberListField(this.rawMetadata.thumbs)
      : undefined;
  }

  @Memoize() get times(): NumberListField | undefined {
    return this.rawMetadata.times != null
      ? new NumberListField(this.rawMetadata.times)
      : undefined;
  }

  @Memoize() get title(): StringField | undefined {
    return this.rawMetadata.title != null
      ? new StringField(this.rawMetadata.title)
      : undefined;
  }

  @Memoize() get title_alt_script(): StringField | undefined {
    return this.rawMetadata['title-alt-script'] != null
      ? new StringField(this.rawMetadata['title-alt-script'])
      : undefined;
  }

  @Memoize() get transferer(): StringField | undefined {
    return this.rawMetadata.transferer != null
      ? new StringField(this.rawMetadata.transferer)
      : undefined;
  }

  @Memoize() get track(): NumberField | undefined {
    return this.rawMetadata.track != null
      ? new NumberField(this.rawMetadata.track)
      : undefined;
  }

  /**
   * The capture tuner setting. Parses the `"Channel <n> (<freq> MHz)"` form
   * into channel and frequency; other formats expose only the raw value.
   */
  @Memoize() get tuner(): TunerField | undefined {
    return this.rawMetadata.tuner != null
      ? new TunerField(this.rawMetadata.tuner)
      : undefined;
  }

  @Memoize() get type(): StringField | undefined {
    return this.rawMetadata.type != null
      ? new StringField(this.rawMetadata.type)
      : undefined;
  }

  @Memoize() get uploader(): StringField | undefined {
    return this.rawMetadata.uploader != null
      ? new StringField(this.rawMetadata.uploader)
      : undefined;
  }

  /**
   * The UTC offset encoded as `±HHMM` (e.g. `"-800"`), parsed into hours,
   * minutes, and total signed minutes.
   */
  @Memoize() get utc_offset(): UtcOffsetField | undefined {
    return this.rawMetadata.utc_offset != null
      ? new UtcOffsetField(this.rawMetadata.utc_offset)
      : undefined;
  }

  @Memoize() get venue(): StringField | undefined {
    return this.rawMetadata.venue != null
      ? new StringField(this.rawMetadata.venue)
      : undefined;
  }

  @Memoize() get video_codec(): StringField | undefined {
    return this.rawMetadata.video_codec != null
      ? new StringField(this.rawMetadata.video_codec)
      : undefined;
  }

  @Memoize() get volume(): StringField | undefined {
    return this.rawMetadata.volume != null
      ? new StringField(this.rawMetadata.volume)
      : undefined;
  }

  /**
   * The number of downloads in the last week
   *
   * @type {NumberField}
   * @memberof Metadata
   */
  @Memoize() get week(): NumberField | undefined {
    return this.rawMetadata.week != null
      ? new NumberField(this.rawMetadata.week)
      : undefined;
  }

  @Memoize() get year(): NumberField | undefined {
    return this.rawMetadata.year != null
      ? new NumberField(this.rawMetadata.year)
      : undefined;
  }

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  constructor(json: Record<string, any> = {}) {
    this.rawMetadata = json;
  }
}
