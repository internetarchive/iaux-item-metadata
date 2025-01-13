import { html, css, LitElement, PropertyValues } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Metadata } from '../src/models/metadata';

@customElement('app-root')
export class AppRoot extends LitElement {
  private metadata: Metadata = new Metadata({
    identifier: 'foo',
    addeddate: '2021-01-01',
    collection: ['foo', 'bar'],
    description: 'A foo that is also a bar',
    duration: '1:23:45',
    mediatype: 'audio',
  });

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    console.log('Metadata:', this.metadata);
  }

  render() {
    return html`
      <h1>Metadata Demo</h1>
      <small><i>Open the JS console to see the Metadata object</i></small>

      <h2>Raw Metadata</h2>
      <p>${JSON.stringify(this.metadata.rawMetadata)}</p>

      <h2>Parsed Values</h2>
      <table>
        <thead>
          <th>Key</th>
          <th>Value</th>
        </thead>
        <tbody>
          <tr>
            <td>Identifier</td>
            <td>${this.metadata.identifier}</td>
          </tr>
          <tr>
            <td>Addeddate</td>
            <td>${this.metadata.addeddate?.value}</td>
          </tr>
          <tr>
            <td>Collection</td>
            <td>${this.metadata.collection?.values.join(', ')}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>${this.metadata.description?.value}</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>${this.metadata.duration?.value}</td>
          </tr>
          <tr>
            <td>MediaType</td>
            <td>${this.metadata.mediatype?.value}</td>
          </tr>
        </tbody>
      </table>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}
