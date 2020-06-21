import { newE2EPage } from '@stencil/core/testing';

describe('fd-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fd-switch></fd-switch>');

    const element = await page.find('fd-switch');
    expect(element).toHaveClass('hydrated');
  });
});
