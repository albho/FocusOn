import { render, screen } from '@testing-library/react';
import Status from '../components/Status';

describe('Status', () => {
  test('on initial render, the status is set to pause', () => {
    render(<Status status="Focus" />);

    expect(screen.getByRole('heading')).toHaveTextContent('Focus');
  });
});
