import Home from '../../../src/app/page';
import { render } from '@testing-library/react';

describe('Home', () => {
  it('Snapshot testing', async () => {
    // @ts-expect-error: Known error
    const { container } = render(await Home({ params: {} }));

    expect(container).toMatchSnapshot();
  });
});
