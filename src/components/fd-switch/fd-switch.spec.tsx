import { newSpecPage } from '@stencil/core/testing';
import { FdSwitch } from './fd-switch';

describe('fd-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FdSwitch],
      html: `<fd-switch></fd-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <fd-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fd-switch>
    `);
  });
});
