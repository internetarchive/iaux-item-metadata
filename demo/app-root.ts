import { html, css, LitElement, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Metadata } from '../index';
import type { MetadataFieldInterface } from '../index';

/** Shape of the archive.org metadata API response we care about. */
interface MetadataApiResponse {
  metadata?: Record<string, unknown>;
  files?: unknown[];
}

/** A field on `Metadata` we want to surface in the demo table. */
interface FieldRow {
  label: string;
  get: (metadata: Metadata) => MetadataFieldInterface<unknown> | undefined;
}

/**
 * The fields rendered in the parsed-values table. Each shows how the model
 * normalizes the raw API value into a native type. Music-specific fields
 * (venue, taper, source, lineage) populate for live-recording items.
 */
const FIELDS: FieldRow[] = [
  { label: 'title', get: m => m.title },
  { label: 'mediatype', get: m => m.mediatype },
  { label: 'creator', get: m => m.creator },
  { label: 'collection', get: m => m.collection },
  { label: 'subject', get: m => m.subject },
  { label: 'description', get: m => m.description },
  { label: 'date', get: m => m.date },
  { label: 'addeddate', get: m => m.addeddate },
  { label: 'publicdate', get: m => m.publicdate },
  { label: 'language', get: m => m.language },
  { label: 'duration', get: m => m.duration },
  { label: 'runtime', get: m => m.runtime },
  { label: 'downloads', get: m => m.downloads },
  { label: 'item_size', get: m => m.item_size },
  { label: 'files_count', get: m => m.files_count },
  { label: 'venue', get: m => m.venue },
  { label: 'taper', get: m => m.taper },
  { label: 'source', get: m => m.source },
  { label: 'lineage', get: m => m.lineage },
];

/** A few stable archive.org items demonstrating different metadata shapes. */
const EXAMPLES = ['gd73-06-10.sbd.hollister.174.sbeok.shnf', 'nasa', 'goody'];

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
  @state() private identifier = EXAMPLES[0];

  @state() private metadata?: Metadata;

  @state() private fileCount?: number;

  @state() private loading = false;

  @state() private error?: string;

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
        `https://archive.org/metadata/${encodeURIComponent(identifier)}`,
      );
      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
      }
      const json = (await response.json()) as MetadataApiResponse;
      if (!json.metadata) {
        throw new Error(`No item found for identifier “${identifier}”.`);
      }
      this.metadata = new Metadata(json.metadata);
      this.fileCount = json.files?.length;
    } catch (e) {
      this.metadata = undefined;
      this.fileCount = undefined;
      this.error = e instanceof Error ? e.message : 'Failed to load item.';
    } finally {
      this.loading = false;
    }
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
      this.metadata = new Metadata(raw);
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
        each field is normalized from its raw API value into a native type.
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
            </button>`,
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
          ${FIELDS.map(field => {
            const parsed = field.get(metadata);
            if (!parsed) return nothing;
            return html`
              <tr>
                <td><code>${field.label}</code></td>
                <td>${display(parsed.value)}</td>
                <td>${display(parsed.values)}</td>
                <td class="raw">${display(parsed.rawValue)}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  }

  private onIdentifierInput(event: Event): void {
    this.identifier = (event.currentTarget as HTMLInputElement).value;
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
