import { render, within, screen } from '@testing-library/react';
import Timer from '../components/Timer';

describe('Timer', () => {
  test('on initial render, the timer is set to 25', () => {
    render(<Timer />);

    const { getByText } = within(screen.getByTestId('timer'));
    expect(getByText(25)).toBeInTheDocument();
  });
});
