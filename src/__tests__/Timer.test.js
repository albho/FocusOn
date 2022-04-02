import { render, screen } from '@testing-library/react';
import Timer from '../components/Timer';

describe('Timer', () => {
  test('on initial render, the timer is set to 25', () => {
    render(<Timer />);

    const timerButton = screen.getByRole('button', { name: '25:00' });
    expect(timerButton).toBeInTheDocument();
  });
});
