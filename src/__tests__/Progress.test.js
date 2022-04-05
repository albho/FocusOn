import { render, screen } from '@testing-library/react';
import Progress from '../components/Progress';

describe('Progress', () => {
  test('displays correct number of completed focus sessions', () => {
    render(<Progress history={3} />);

    expect(screen.getByRole('heading')).toHaveTextContent(1);
  });
});
