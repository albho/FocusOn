import { render, screen } from '@testing-library/react';
import Greeting from '../components/Greeting';

describe('Greeting', () => {
  test('on initial render, the the greeting says Hello!', () => {
    render(<Greeting />);

    expect(screen.getByRole('heading')).toHaveTextContent('Hello!');
  });
});
