import { html, css, LitElement, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Metadata } from '../index';
import type { MetadataFieldInterface } from '../index';

/** Shape of the archive.org metadata API response we care about. */
interface MetadataApiResponse {
  metadata?: Record<string, unknown>;
  files?: unknown[];
}

/**
 * Every field the model exposes, read off `Metadata`'s prototype getters. The
 * table is built from this, so a field added to the model shows up in the demo
 * without anyone touching this file. Sorted to give the table a stable order.
 */
const MODELED_FIELDS: string[] = Object.getOwnPropertyNames(Metadata.prototype)
  .filter(
    name =>
      typeof Object.getOwnPropertyDescriptor(Metadata.prototype, name)?.get ===
      'function'
  )
  .sort();

/** Reads a field off the model by name. */
function fieldValue(metadata: Metadata, name: string): unknown {
  return (metadata as unknown as Record<string, unknown>)[name];
}

/** True for parsed field objects (`StringField`, `DateField`, and friends). */
function isMetadataField(
  value: unknown
): value is MetadataFieldInterface<unknown> {
  return typeof value === 'object' && value !== null && 'rawValue' in value;
}

/**
 * The raw keys the model reads, collected by handing `Metadata` a Proxy over the
 * raw response and then touching every field. Comparing getter names to raw keys
 * would miss the cases that matter here: keys that differ from their getter
 * (`access-restricted-item`) and fields that fall back across several keys.
 */
function modeledRawKeys(raw: Record<string, unknown>): Set<string> {
  const touched = new Set<string>();
  const probe = new Proxy(raw, {
    get(target, key) {
      if (typeof key === 'string') touched.add(key);
      return Reflect.get(target, key);
    }
  });
  const metadata = new Metadata(probe);
  for (const name of MODELED_FIELDS) fieldValue(metadata, name);
  return touched;
}

/**
 * A few stable archive.org items demonstrating different metadata shapes.
 * The last two have multi-value `subject` arrays that exercise the list parser
 * (StringListField), so their `subject` row shows `.value` (first) diverging
 * from `.values` (all).
 */
const EXAMPLES = [
  'gd73-06-10.sbd.hollister.174.sbeok.shnf',
  'nasa',
  'goody',
  'eventsounds_pack',
  'womeningovernmen0000jame'
];

/**
 * Query params the demo reads on load and keeps up to date, so a link can point
 * someone at a particular item with the table already filtered.
 */
const IDENTIFIER_PARAM = 'identifier';
const FILTER_PARAM = 'filter';

/** A trimmed query param off the current URL, or undefined if absent or blank. */
function paramFromUrl(name: string): string | undefined {
  const value = new URLSearchParams(window.location.search).get(name)?.trim();
  return value || undefined;
}

/** Render any parsed value (Date, number, string, array, object) as text. */
function display(value: unknown): string {
  if (value === undefined || value === null) return '—';
  if (value instanceof Date) return value.toISOString();
  if (Array.isArray(value))
    return value.length ? value.map(display).join(', ') : '—';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

@customElement('app-root')
export class AppRoot extends LitElement {
  @state() private identifier = paramFromUrl(IDENTIFIER_PARAM) ?? EXAMPLES[0];

  @state() private metadata?: Metadata;

  @state() private fileCount?: number;

  @state() private loading = false;

  @state() private error?: string;

  /** Raw keys present in the response that no field reads. */
  @state() private unmodeledKeys: string[] = [];

  /** Filters the table down to field names containing this text. */
  @state() private query = paramFromUrl(FILTER_PARAM) ?? '';

  /** Whether to keep rows for fields the item leaves unset. */
  @state() private showUnset = false;

  protected firstUpdated(): void {
    // Populate the table on load so the demo shows real data immediately.
    void this.loadFromArchive();
  }

  private async loadFromArchive(): Promise<void> {
    const identifier = this.identifier.trim();
    if (!identifier) {
      this.error = 'Enter an archive.org identifier.';
      return;
    }

    this.loading = true;
    this.error = undefined;
    try {
      const response = await fetch(
        `https://archive.org/metadata/${encodeURIComponent(identifier)}`
      );
      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
      }
      const json = (await response.json()) as MetadataApiResponse;
      if (!json.metadata) {
        throw new Error(`No item found for identifier “${identifier}”.`);
      }
      this.setMetadata(json.metadata);
      this.fileCount = json.files?.length;
      this.syncUrl();
    } catch (e) {
      this.metadata = undefined;
      this.fileCount = undefined;
      this.unmodeledKeys = [];
      this.error = e instanceof Error ? e.message : 'Failed to load item.';
    } finally {
      this.loading = false;
    }
  }

  /** Builds the model and works out which raw keys it leaves untouched. */
  private setMetadata(raw: Record<string, unknown>): void {
    this.metadata = new Metadata(raw);
    const modeled = modeledRawKeys(raw);
    this.unmodeledKeys = Object.keys(raw)
      .filter(key => !modeled.has(key))
      .sort();
  }

  private parseJson(): void {
    const textarea = this.shadowRoot?.querySelector('textarea');
    const text = textarea?.value ?? '';
    if (!text.trim()) {
      this.error = 'Paste some metadata JSON first.';
      return;
    }
    try {
      const parsed = JSON.parse(text) as Record<string, unknown>;
      // Accept either a full API response or a bare metadata object.
      const raw = (parsed.metadata as Record<string, unknown>) ?? parsed;
      this.setMetadata(raw);
      this.fileCount = undefined;
      this.error = undefined;
    } catch {
      this.error = 'Could not parse that as JSON.';
    }
  }

  render() {
    return html`
      <h1>Item Metadata Demo</h1>
      <p>
        Models for
        <a href="https://archive.org" target="_blank" rel="noopener"
          >archive.org</a
        >
        item metadata. Load an item by identifier (or paste raw JSON) to see how
        each field is normalized from its raw API value into a native type. The
        item and field filter stay in the URL, so you can link straight to a
        view.
      </p>

      <form class="controls" @submit=${this.onSubmit}>
        <label class="field">
          <span>archive.org identifier</span>
          <input
            type="text"
            .value=${this.identifier}
            @input=${this.onIdentifierInput}
            placeholder="e.g. nasa"
          />
        </label>
        <button type="submit" ?disabled=${this.loading}>
          ${this.loading ? 'Loading…' : 'Load item'}
        </button>
      </form>

      <p class="examples">
        Try:
        ${EXAMPLES.map(
          id =>
            html`<button
              type="button"
              class="link"
              @click=${() => this.useExample(id)}
            >
              ${id}
            </button>`
        )}
      </p>

      <details>
        <summary>…or paste raw metadata JSON</summary>
        <form class="json-form">
          <label class="field">
            <span class="sr-only">Metadata JSON</span>
            <textarea
              rows="6"
              placeholder='{"metadata": {"identifier": "foo", "addeddate": "2021-01-01", "downloads": "42"}}'
            ></textarea>
          </label>
          <button type="button" @click=${this.parseJson}>Parse JSON</button>
        </form>
      </details>

      ${this.error
        ? html`<p class="error" role="alert">${this.error}</p>`
        : nothing}
      ${this.metadata ? this.renderResult(this.metadata) : nothing}
    `;
  }

  private renderResult(metadata: Metadata) {
    const { identifier } = metadata;
    return html`
      <h2>
        ${identifier
          ? html`<a
              href="https://archive.org/details/${identifier}"
              target="_blank"
              rel="noopener"
              >${identifier}</a
            >`
          : 'Parsed metadata'}
      </h2>
      ${this.fileCount !== undefined
        ? html`<p class="meta">${this.fileCount} files in response</p>`
        : nothing}

      <div class="toolbar">
        <label class="field">
          <span>Filter fields</span>
          <input
            type="search"
            .value=${this.query}
            @input=${this.onQueryInput}
            placeholder="e.g. date, aspect, codec"
          />
        </label>
        <label class="toggle">
          <input
            type="checkbox"
            .checked=${this.showUnset}
            @change=${this.onShowUnsetChange}
          />
          <span>Show unset fields</span>
        </label>
      </div>

      ${this.renderTable(metadata)} ${this.renderUnmodeled()}
    `;
  }

  /**
   * The fields to show: every modeled field, minus the ones this item leaves
   * unset (unless asked for) and the ones the filter excludes.
   */
  private visibleFields(metadata: Metadata): string[] {
    const query = this.query.trim().toLowerCase();
    return MODELED_FIELDS.filter(name => {
      if (query && !name.toLowerCase().includes(query)) return false;
      return this.showUnset || fieldValue(metadata, name) !== undefined;
    });
  }

  private renderTable(metadata: Metadata) {
    const fields = this.visibleFields(metadata);
    const setCount = MODELED_FIELDS.filter(
      name => fieldValue(metadata, name) !== undefined
    ).length;

    return html`
      <p class="meta">
        Showing ${fields.length} of ${MODELED_FIELDS.length} modeled fields.
        ${setCount} set on this item.
      </p>
      ${fields.length
        ? html`
            <table>
              <thead>
                <tr>
                  <th>Field</th>
                  <th><code>.value</code></th>
                  <th><code>.values</code></th>
                  <th><code>.rawValue</code></th>
                </tr>
              </thead>
              <tbody>
                ${fields.map(name => this.renderRow(metadata, name))}
              </tbody>
            </table>
          `
        : html`<p class="meta">No field names match that filter.</p>`}
    `;
  }

  private renderRow(metadata: Metadata, name: string) {
    const value = fieldValue(metadata, name);
    // `identifier` is a plain string rather than a parsed field, so it has a
    // value but no `.values` / `.rawValue` to show.
    const cells = isMetadataField(value)
      ? [display(value.value), display(value.values), display(value.rawValue)]
      : [display(value), display(undefined), display(undefined)];

    return html`
      <tr class=${value === undefined ? 'unset' : ''}>
        <td><code>${name}</code></td>
        <td>${cells[0]}</td>
        <td>${cells[1]}</td>
        <td class="raw">${cells[2]}</td>
      </tr>
    `;
  }

  /**
   * Raw keys the model doesn't read, so a field missing from the table above
   * reads as a gap in the model rather than a gap in this demo.
   */
  private renderUnmodeled() {
    if (!this.unmodeledKeys.length) return nothing;
    const query = this.query.trim().toLowerCase();
    const keys = query
      ? this.unmodeledKeys.filter(key => key.toLowerCase().includes(query))
      : this.unmodeledKeys;

    return html`
      <details class="unmodeled">
        <summary>
          ${keys.length === this.unmodeledKeys.length
            ? this.unmodeledKeys.length
            : `${keys.length} of ${this.unmodeledKeys.length}`}
          raw keys the model doesn't expose
        </summary>
        ${keys.length
          ? html`<p class="keys">
              ${keys.map(key => html`<code>${key}</code>`)}
            </p>`
          : html`<p class="meta">No unmodeled keys match that filter.</p>`}
      </details>
    `;
  }

  private onIdentifierInput(event: Event): void {
    this.identifier = (event.currentTarget as HTMLInputElement).value;
  }

  private onQueryInput(event: Event): void {
    this.query = (event.currentTarget as HTMLInputElement).value;
    this.syncUrl();
  }

  /**
   * Mirrors the loaded item and the field filter into the URL, so the address bar
   * is always a link to what's on screen. Blank values drop out of the query
   * string rather than sitting there empty.
   */
  private syncUrl(): void {
    const url = new URL(window.location.href);
    const params: Record<string, string> = {
      [IDENTIFIER_PARAM]: this.identifier,
      [FILTER_PARAM]: this.query
    };
    for (const [name, value] of Object.entries(params)) {
      if (value.trim()) url.searchParams.set(name, value.trim());
      else url.searchParams.delete(name);
    }
    window.history.replaceState({}, '', url);
  }

  private onShowUnsetChange(event: Event): void {
    this.showUnset = (event.currentTarget as HTMLInputElement).checked;
  }

  private onSubmit(event: Event): void {
    event.preventDefault();
    void this.loadFromArchive();
  }

  private useExample(id: string): void {
    this.identifier = id;
    void this.loadFromArchive();
  }

  static styles = css`
    :host {
      display: block;
      max-width: 60rem;
      margin: 0 auto;
      padding: 1rem;
      color: #222;
      line-height: 1.4;
    }

    h1 {
      margin-bottom: 0.25rem;
    }

    .controls {
      display: flex;
      align-items: flex-end;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1 1 18rem;
    }

    .field span {
      font-size: 0.8rem;
      font-weight: bold;
    }

    input,
    textarea {
      font: inherit;
      padding: 0.4rem 0.5rem;
      border: 1px solid #aaa;
      border-radius: 4px;
      width: 100%;
      box-sizing: border-box;
    }

    button {
      font: inherit;
      padding: 0.45rem 0.9rem;
      border: 1px solid #194880;
      background: #194880;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
    }

    button[disabled] {
      opacity: 0.6;
      cursor: default;
    }

    button.link {
      background: none;
      border: none;
      color: #194880;
      text-decoration: underline;
      padding: 0;
      cursor: pointer;
    }

    .examples {
      font-size: 0.85rem;
      color: #555;
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      align-items: baseline;
    }

    details {
      margin: 0.5rem 0 1rem;
    }

    .json-form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 0.5rem;
      align-items: flex-start;
    }

    .error {
      color: #b00020;
      font-weight: bold;
    }

    .meta {
      color: #555;
      font-size: 0.85rem;
      margin-top: 0;
    }

    .toolbar {
      display: flex;
      align-items: flex-end;
      gap: 1rem;
      flex-wrap: wrap;
      margin: 0.75rem 0;
    }

    .toggle {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.85rem;
      white-space: nowrap;
    }

    .toggle input {
      width: auto;
    }

    tr.unset td {
      color: #999;
    }

    .unmodeled {
      margin-top: 1rem;
    }

    .unmodeled summary {
      cursor: pointer;
      font-size: 0.85rem;
      color: #555;
    }

    .keys {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
      margin: 0.5rem 0 0;
    }

    .keys code {
      background: #f0f0f0;
      border: 1px solid #ddd;
      border-radius: 3px;
      padding: 0.1rem 0.3rem;
      font-size: 0.8rem;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      font-size: 0.9rem;
    }

    th,
    td {
      border: 1px solid #ddd;
      padding: 0.4rem 0.6rem;
      text-align: left;
      vertical-align: top;
    }

    th {
      background: #f0f0f0;
    }

    td.raw {
      color: #555;
      font-family: monospace;
      word-break: break-word;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
    }
  `;
}
