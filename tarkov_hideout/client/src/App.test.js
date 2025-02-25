import { render, screen } from '@testing-library/react';
import AppOriginal from '../../server_old/App-original.js';


test('renders learn react link', () => {
  render(<AppOriginal />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
