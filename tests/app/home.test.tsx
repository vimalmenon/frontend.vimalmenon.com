import Home from '../../src/app/page';
import { render } from '@testing-library/react';

describe('Home', () => {
  it('This is test case', () => {
    render(<Home />);
    expect(true).toBe(true);
  });
});
