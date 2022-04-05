import { render, screen } from '@testing-library/react';
import Timer from '../components/Timer';

describe('Timer', () => {
  test('on initial render, the timer is set to 25:00', () => {
    render(<Timer time={25 * 60} />);

    expect(screen.getByRole('button')).toHaveTextContent('25:00');
  });
});
