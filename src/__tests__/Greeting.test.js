import { render, screen } from '@testing-library/react';
import Greeting from '../components/Greeting';

describe('Greeting', () => {
  test('Appropriate greeting is shown based on time', () => {
    render(<Greeting />);

    const today = new Date();
    const currentHour = today.getHours();
    let currentText = 'Good afternoon!';

    if (currentHour < 12) {
      currentText = 'Good morning!';
    }

    if (currentHour < 12) {
      currentText = 'Good evening!';
    }

    expect(screen.getByRole('heading')).toHaveTextContent(currentText);
  });
});
